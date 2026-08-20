import React, { useState } from 'react';
import PageHero from '@/components/common/PageHero';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Calendar
} from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Campus Visit Request',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="w-full pb-20 bg-white">
      <PageHero
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
        title="Contact Us & Plan Your Visit"
        description="Experience our campus, meet faculty, and start your journey in hospitality."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#8b1525] font-['Outfit'] text-xs font-bold uppercase tracking-widest">
            Admissions & Campus Hub
          </span>
          <h1 className="font-['Bebas_Neue','Outfit',sans-serif] text-5xl sm:text-6xl lg:text-7xl text-[#0a192f] tracking-tight uppercase mt-2">
            Contact Us & <span className="text-gold-gradient">Plan Your Visit</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Experience our 5-star simulation suites, live commercial kitchens, and meet faculty members in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0a192f] text-white">
              <h3 className="font-['Outfit'] font-bold text-xl text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#c59b27]" />
                Campus Headquarters
              </h3>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#c59b27]" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Campus Address</span>
                    <span className="text-slate-300">Nexstay Academy Tower, Grand Boulevard, Luxury Hospitality Hub</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#c59b27]" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Admissions Helplines</span>
                    <span className="text-slate-300">+91 (0) 98765 43210</span>
                    <span className="text-slate-300 block">+91 (0) 98765 43211</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#c59b27]" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Official Email</span>
                    <span className="text-slate-300">admissions@nexstayacademy.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#c59b27]" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Visiting Hours</span>
                    <span className="text-slate-300">Monday - Saturday: 9:00 AM to 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Visit Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8b1525] uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" />
                Schedule a Guided Campus Tour
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Parents and candidates are welcome for free personal counselling and hands-on lab demonstration tours.
              </p>
            </div>
          </div>

          {/* Contact & Tour Booking Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-lg">
            <h3 className="font-['Outfit'] font-bold text-2xl text-[#0a192f] mb-6">
              Send an Inquiry or Schedule a Visit
            </h3>

            {sent ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-['Outfit'] font-bold text-xl text-emerald-900 mb-2">
                  Inquiry Received!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-700">
                  Thank you for reaching out to Nexstay Academy. Our admissions representative will contact you shortly to confirm your visit slot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#c59b27]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#c59b27]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#c59b27]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#c59b27]"
                  >
                    <option value="Campus Visit Request">Book Guided Campus Tour</option>
                    <option value="Admission Eligibility">Admission & Eligibility Inquiry</option>
                    <option value="Scholarship & Fee">Scholarship & Fee Structure</option>
                    <option value="Placement & Internships">Placement & Internships Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Preferred Date
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you are looking for or specify your preferred date for campus visit..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#c59b27]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0a192f] to-[#132a4a] text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4 text-[#c59b27]" />
                  <span>Send Message & Confirm Visit</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
