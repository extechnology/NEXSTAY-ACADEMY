import React, { useState } from 'react';
import PageHero from '@/components/common/PageHero';
import { 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  ShieldCheck
} from 'lucide-react';

export default function Admission() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: 'bsc-hospitality',
    qualification: '12th-completed',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const feeStructure = [
    {
      course: 'B.Sc in Hospitality & Hotel Administration',
      duration: '3 Years (6 Semesters)',
      feePerSem: '₹45,000 / Sem',
      totalFee: '₹2,70,000',
      scholarship: 'Up to 30% merit scholarship',
      features: ['Full Uniform Set Included', 'Knife & Chef Kit Included', 'Opera Software License']
    },
    {
      course: 'Diploma in Culinary Arts & Bakery',
      duration: '1 Year + 6 Mo Internship',
      feePerSem: '₹55,000 / Term',
      totalFee: '₹1,10,000',
      scholarship: 'Early bird ₹10,000 off',
      features: ['All Ingredients Provided', 'Commercial Lab Access', 'Chef Masterclasses']
    },
    {
      course: 'Professional Mixology & Beverage Operations',
      duration: '6 Months Fast-Track',
      feePerSem: 'One-Time',
      totalFee: '₹45,000',
      scholarship: 'Group discount available',
      features: ['Bar Tool Kit Included', 'Wine Certification', 'Direct Hotel Placements']
    }
  ];

  return (
    <div className="w-full pb-20 bg-white">
      <PageHero
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
        title="Fee Structure & Admissions"
        description="Transparent fees, flexible installments, and merit scholarships for deserving students."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#8b1525] font-['Outfit'] text-xs font-bold uppercase tracking-widest">
            Admissions 2025 - 2026
          </span>
          <h1 className="font-['Bebas_Neue','Outfit',sans-serif] text-5xl sm:text-6xl lg:text-7xl text-[#0a192f] tracking-tight uppercase mt-2">
            Fee Structure & <span className="text-gold-gradient">Admissions</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Transparent fee structure, flexible installment options, and merit scholarships for deserving students.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Left: Fee Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-['Outfit'] font-bold text-2xl text-[#0a192f] mb-4">
              Programs & Transparent Tuition Fees
            </h3>

            {feeStructure.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-[#c59b27]/60 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
                  <div>
                    <h4 className="font-['Outfit'] font-bold text-lg text-[#0a192f]">
                      {item.course}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">{item.duration}</span>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="font-['Outfit'] font-extrabold text-xl text-[#8b1525]">
                      {item.totalFee}
                    </div>
                    <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                      {item.scholarship}
                    </div>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b27] flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="p-5 rounded-2xl bg-[#0a192f] text-white flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-[#c59b27] flex-shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white block text-sm">0% Interest EMI Loans Available</span>
                Partnered with leading education loan providers to support all qualified applicants.
              </div>
            </div>
          </div>

          {/* Right: Interactive Application Form */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#c59b27]" />
              <span className="text-xs font-bold text-[#8b1525] uppercase tracking-wider">
                Direct Admission Form
              </span>
            </div>
            <h3 className="font-['Outfit'] font-bold text-2xl text-[#0a192f] mb-6">
              Apply For Admission 2025
            </h3>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-['Outfit'] font-bold text-lg text-emerald-900 mb-1">
                  Application Submitted!
                </h4>
                <p className="text-xs text-emerald-700">
                  Our admissions counselor will contact you within 24 business hours to guide you through verification and registration.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#c59b27] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#c59b27] transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#c59b27] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Select Desired Program *
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#c59b27] transition-colors"
                  >
                    <option value="bsc-hospitality">B.Sc in Hospitality & Hotel Administration (3 Yrs)</option>
                    <option value="diploma-culinary">Diploma in Culinary Arts & Bakery (1 Yr)</option>
                    <option value="mixology-bar">Professional Mixology & Bar Operations (6 Mo)</option>
                    <option value="front-office">Executive Diploma in Front Office (1 Yr)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0a192f] to-[#132a4a] text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <GraduationCap className="w-4 h-4 text-[#c59b27]" />
                  <span>Submit Admission Application</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
