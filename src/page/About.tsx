
import { Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/common/PageHero';


export default function About() {
  return (
    <div className="w-full pb-20 bg-white">
      <PageHero
        image="https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/1xDovcXHDHdX76OMkRSIrs/d5e225770b3b28588116adccaee55e4e/Shorelight_Hotel_Management_Courses.jpg?fit=thumb"
        title="Shaping Leaders of Hospitality Excellence"
        description="World-class hotel management education, combining Swiss traditions with modern luxury standards."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#8b1525] font-['Outfit'] text-xs font-bold uppercase tracking-widest">
            About Nexstay Academy
          </span>
          <h1 className="font-['Bebas_Neue','Outfit',sans-serif] text-5xl sm:text-6xl lg:text-7xl text-[#0a192f] tracking-tight uppercase mt-2">
            Shaping Leaders of <span className="text-gold-gradient">Hospitality Excellence</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Established with a vision to deliver benchmark hotel management education, Nexstay Academy combines traditional Swiss & international hospitality ethos with contemporary luxury hotel standards.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-[#0a192f] flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-[#c59b27]" />
            </div>
            <h3 className="font-['Outfit'] font-bold text-2xl text-[#0a192f] mb-3">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be recognized globally as the premier hospitality academy producing visionary managers, master culinarians, and luxury guest service innovators.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-[#8b1525] flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-[#c59b27]" />
            </div>
            <h3 className="font-['Outfit'] font-bold text-2xl text-[#0a192f] mb-3">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Empowering students through immersive hands-on training, industry certifications, soft skills excellence, and guaranteed placements in 5-star international hotel chains.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#0a192f] text-white mb-20">
          <div className="text-center">
            <div className="font-['Bebas_Neue'] text-5xl text-[#c59b27]">100%</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">Placement Track Record</div>
          </div>
          <div className="text-center border-l border-slate-700">
            <div className="font-['Bebas_Neue'] text-5xl text-[#c59b27]">500+</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">5-Star Hotel Partners</div>
          </div>
          <div className="text-center border-l border-slate-700">
            <div className="font-['Bebas_Neue'] text-5xl text-[#c59b27]">15+</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">Years of Academic Prestige</div>
          </div>
          <div className="text-center border-l border-slate-700">
            <div className="font-['Bebas_Neue'] text-5xl text-[#c59b27]">5000+</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">Alumni Worldwide</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-['Outfit'] font-bold text-2xl text-[#0a192f] mb-4">
            Ready to Begin Your Hospitality Career?
          </h3>
          <Link
            to="/admission"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gold-gradient text-[#0a192f] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
          >
            <span>Apply for 2025 Admissions</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
