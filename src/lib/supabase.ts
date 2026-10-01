import { createClient } from '@supabase/supabase-js'

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  organization?: string
  category?: string
  scale?: string
  message: string
  created_at?: string
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('placeholder') &&
  !supabaseUrl.includes('example.com')
)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

/**
 * Submits contact lead to Supabase contacts table.
 * If credentials are not yet configured, gracefully records to local storage.
 */
export async function submitContactLead(data: Omit<ContactSubmission, 'id' | 'created_at'>): Promise<{ success: boolean; error?: string; mode: 'supabase' | 'mock' }> {
  try {
    if (supabase && isSupabaseConfigured) {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: data.name,
            email: data.email,
            organization: data.organization || null,
            category: data.category || 'General Strategic Counsel',
            scale: data.scale || 'Undisclosed',
            message: data.message,
            created_at: new Date().toISOString(),
          }
        ])

      if (error) {
        console.error('Supabase submission error:', error)
        return { success: false, error: error.message, mode: 'supabase' }
      }

      return { success: true, mode: 'supabase' }
    } else {
      // Local development mock fallback
      await new Promise(resolve => setTimeout(resolve, 800)) // simulate network latency
      
      const existing = JSON.parse(localStorage.getItem('pica_contact_submissions') || '[]')
      const newEntry = {
        ...data,
        id: `mock-${Date.now()}`,
        created_at: new Date().toISOString(),
      }
      localStorage.setItem('pica_contact_submissions', JSON.stringify([newEntry, ...existing]))
      
      console.info('PICA Lead recorded (Mock Mode - set VITE_SUPABASE_URL to connect to real Supabase):', newEntry)
      return { success: true, mode: 'mock' }
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown transmission error'
    return { success: false, error: errorMsg, mode: isSupabaseConfigured ? 'supabase' : 'mock' }
  }
}
