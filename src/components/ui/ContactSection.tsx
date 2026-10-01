import { useState } from 'react'
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from 'lucide-react'
import { submitContactLead, isSupabaseConfigured } from '../../lib/supabase'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mode: 'Offline (Hyderabad Campus)',
    program: 'Beginner Level',
    campus: 'Moosapet (Main Academy)',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
    mode?: 'supabase' | 'mock'
  }>({ type: null, message: '' })

  const programs = [
    'Beginner Level',
    'Intermediate Level',
    'Advanced Level',
    'One-on-One Coaching',
    'Chess for Kids (Ages 4-14)',
    'Corporate Chess Training',
  ]

  const campuses = [
    'Moosapet (Main Academy)',
    'KPHB / Kukatpally Center',
    'Pragathi Nagar Center',
    'Online Campus (Worldwide Live)',
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus({
        type: 'error',
        message: 'Please provide student name, email, and contact phone number.',
      })
      return
    }

    setLoading(true)
    setStatus({ type: null, message: '' })

    const result = await submitContactLead({
      name: formData.name,
      email: formData.email,
      organization: `Phone: ${formData.phone} | Campus: ${formData.campus} | Mode: ${formData.mode}`,
      category: formData.program,
      scale: formData.mode,
      message: formData.message || `Enrollment request for ${formData.program} at ${formData.campus}`,
    })

    setLoading(false)
    if (result.success) {
      setStatus({
        type: 'success',
        message:
          result.mode === 'supabase'
            ? 'Registration received directly into PICA database! Our academy team will contact you shortly to schedule your free diagnostic session.'
            : 'Enrollment inquiry received successfully! Our admissions coach will call you within 24 hours to schedule your session.',
        mode: result.mode,
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        mode: 'Offline (Hyderabad Campus)',
        program: 'Beginner Level',
        campus: 'Moosapet (Main Academy)',
        message: '',
      })
    } else {
      setStatus({
        type: 'error',
        message: result.error || 'Failed to submit registration. Please call us directly at 9440202728.',
      })
    }
  }

  return (
    <section id="contact" className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Academy Admissions Contact */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-[0.2em] w-fit">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Admissions & Trial Session</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white font-display tracking-tight leading-tight">
            Book a Free Trial or Enroll Today.
          </h2>

          <p className="text-slate-200 text-sm md:text-base leading-relaxed">
            Take the first step toward grandmaster thinking. Speak with our coaching mentors, schedule an evaluation game, or visit any of our Hyderabad campuses.
          </p>

          {/* Quick Contact Cards */}
          <div className="space-y-3 pt-2">
            {/* Phone */}
            <div className="p-4 rounded-xl glass-panel border border-white/10 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
                  Admissions Hotline
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  <a href="tel:+919440202728" className="hover:text-amber-300 transition-colors">
                    +91 94402 02728
                  </a>{' '}
                  / +91 86397 99535
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Alternative line: +91 73307 41123</div>
              </div>
            </div>

            {/* Email */}
            <div className="p-4 rounded-xl glass-panel border border-white/10 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
                  Official Email
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  <a href="mailto:picamakeyourmovenow@gmail.com" className="hover:text-amber-300 transition-colors">
                    picamakeyourmovenow@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Campus Locations summary */}
            <div className="p-4 rounded-xl glass-panel border border-white/10 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
                  Hyderabad Campuses
                </div>
                <div className="text-xs text-slate-200 mt-1 leading-snug">
                  1. Moosapet (Anjaneya Nagar)<br />
                  2. KPHB Kukatpally (HMT Sathavahana Nagar)<br />
                  3. Pragathi Nagar (Near Peacock Circle)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Enrollment Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel-elevated rounded-3xl p-7 md:p-10 border border-white/15 relative shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400 font-bold block mb-1">
                  PICA ENROLLMENT DESK
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Student Registration & Free Trial
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isSupabaseConfigured ? 'bg-emerald-400' : 'bg-amber-400'} animate-pulse`} />
                <span className="text-[10px] font-mono text-slate-400">
                  {isSupabaseConfigured ? 'Live Database' : 'Database Ready'}
                </span>
              </div>
            </div>

            {/* Status Alert */}
            {status.type && (
              <div
                className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-xs leading-relaxed ${
                  status.type === 'success'
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                    : 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                )}
                <div>
                  <p className="font-bold">{status.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Student / Parent Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Student / Parent Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Arjun / Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. parent@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    WhatsApp / Contact Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 94402 02728"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Program Level */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Desired Program
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#121624] border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    {programs.map((p) => (
                      <option key={p} value={p} className="bg-[#0e1017]">
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mode & Campus */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Preferred Mode
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#121624] border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Offline (Hyderabad Campus)">Offline (Hyderabad Campus)</option>
                    <option value="Online (Live Digital Class)">Online (Live Digital Class)</option>
                    <option value="Hybrid (Online + Weekend Over-the-Board)">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Campus / Location
                  </label>
                  <select
                    value={formData.campus}
                    onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#121624] border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    {campuses.map((c) => (
                      <option key={c} value={c} className="bg-[#0e1017]">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  Student Age & Prior Chess Experience (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Age 8, knows basic moves, wants to prepare for school and FIDE tournaments..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:scale-[1.01] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Booking Your Session...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit & Book Free Trial Evaluation</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
