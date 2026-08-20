import PageHero from '@/components/common/PageHero';
import { Link } from 'react-router-dom';

export default function Placement() {
  const alumniStories = [
    {
      name: "Rohit Verma",
      role: "Assistant F&B Manager",
      hotel: "Burj Al Arab, Dubai",
      package: "AED 95,000 / annum",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      quote: "The practical training at Nexstay gave me the exact skills needed to excel in luxury 7-star hospitality."
    },
    {
      name: "Pooja Sharma",
      role: "Pastry Sous Chef",
      hotel: "The Ritz-Carlton, London",
      package: "£ 34,000 / annum",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      quote: "The culinary labs and French pastry masterclasses prepared me directly for European Michelin-standard kitchens."
    },
    {
      name: "Arun Nair",
      role: "Front Office Executive",
      hotel: "Taj Mahal Palace, Mumbai",
      package: "₹ 6.5 LPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      quote: "Campus placement on Day 1! Nexstay's reputation with luxury brands is unmatched."
    }
  ];

  return (
    <div className="w-full pb-20 bg-white">
      <PageHero
        image="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1600&q=80"
        title="Placements & Global Careers"
        description="100% placement record across leading 5-star hotels, cruise liners, and Michelin-starred restaurants."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#8b1525] font-['Outfit'] text-xs font-bold uppercase tracking-widest">
            Career Guarantee
          </span>
          <h1 className="font-['Bebas_Neue','Outfit',sans-serif] text-5xl sm:text-6xl lg:text-7xl text-[#0a192f] tracking-tight uppercase mt-2">
            Placements & <span className="text-gold-gradient">Global Careers</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            100% Placement record across leading 5-star hotel chains, international luxury cruise liners, and Michelin-starred restaurants.
          </p>
        </div>

        {/* Highlight Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="font-['Bebas_Neue'] text-5xl text-[#8b1525]">100%</div>
            <div className="font-['Outfit'] font-bold text-lg text-[#0a192f] mt-1">Placement Assurance</div>
            <p className="text-xs text-slate-500 mt-2">Every student receives minimum 3 placement interview opportunities before graduation.</p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="font-['Bebas_Neue'] text-5xl text-[#c59b27]">₹ 18.5 LPA</div>
            <div className="font-['Outfit'] font-bold text-lg text-[#0a192f] mt-1">Highest International Package</div>
            <p className="text-xs text-slate-500 mt-2">Offered by luxury resort conglomerates in the Middle East and Europe.</p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="font-['Bebas_Neue'] text-5xl text-[#0a192f]">500+</div>
            <div className="font-['Outfit'] font-bold text-lg text-[#0a192f] mt-1">Recruitment Partners</div>
            <p className="text-xs text-slate-500 mt-2">Direct on-campus recruitment drives held year-round.</p>
          </div>
        </div>

        {/* Alumni Success Stories */}
        <div className="mb-20">
          <h3 className="font-['Outfit'] font-bold text-3xl text-[#0a192f] mb-8">
            Alumni Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumniStories.map((story, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#c59b27]"
                  />
                  <div>
                    <h4 className="font-['Outfit'] font-bold text-base text-[#0a192f]">{story.name}</h4>
                    <span className="text-xs text-slate-500 block">{story.role}</span>
                    <span className="text-xs font-bold text-[#8b1525]">{story.hotel}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "{story.quote}"
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-700">
                  Package: {story.package}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-3xl bg-[#0a192f] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-['Outfit'] font-bold text-2xl text-white">
              Launch Your Hospitality Dream with Nexstay
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Connect with our career advisors to explore placement paths for your chosen program.
            </p>
          </div>
          <Link
            to="/admission"
            className="px-6 py-3 rounded-xl bg-[#c59b27] text-[#0a192f] font-bold text-xs uppercase tracking-wider hover:bg-[#e5be58] transition-colors"
          >
            Apply Now
          </Link>
        </div>

      </div>
    </div>
  );
}
