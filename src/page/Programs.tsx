import PageHero from '@/components/common/PageHero';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  CheckCircle, 
  ArrowRight,
} from 'lucide-react';

export default function Programs() {
  const programsList = [
    {
      id: 'bsc-hospitality',
      title: 'B.Sc in Hospitality & Hotel Administration',
      duration: '3 Years Full-Time',
      type: 'Degree Program',
      tag: 'Flagship Degree',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive 3-year degree curriculum covering hotel sales, food and beverage operations, accommodation management, front office dynamics, and culinary sciences with mandatory luxury internships.',
      modules: [
        'Front Office & Concierge Dynamics',
        'Food & Beverage Production (Culinary Lab)',
        'Housekeeping Management & Interior Aesthetics',
        'Hospitality Marketing, Accounting & Law'
      ]
    },
    {
      id: 'diploma-culinary',
      title: 'Diploma in International Culinary Arts & Bakery',
      duration: '1 Year + 6 Months Internship',
      type: 'Diploma Program',
      tag: 'Chef Specialized',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      description: 'Intensive culinary arts diploma taught by Master Chefs. Master international cuisines including French, Italian, Pan-Asian, alongside pastry, artisan bakery, and kitchen management.',
      modules: [
        'Advanced Classical Cooking & Butchery',
        'Artisan Bread, Pastry & Chocolaterie',
        'Kitchen Sanitation, HACCP & Inventory Management',
        'Menu Engineering & Molecular Gastronomy'
      ]
    },
    {
      id: 'mixology-bar',
      title: 'Professional Mixology, Sommelier & Beverage Operations',
      duration: '6 Months Fast-Track',
      type: 'Certification',
      tag: 'Fast Placement',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      description: 'Hands-on practical certificate program covering modern mixology, wine tasting, sommelier skills, flair bartending, and bar profit optimization.',
      modules: [
        'Cocktail Crafting & Flavor Profiling',
        'Wine Regions, Tasting & Sommelier Service',
        'Flair Bartending Techniques & Speed Pouring',
        'Bar Costing & Inventory Control'
      ]
    },
    {
      id: 'front-office-exec',
      title: 'Executive Diploma in Front Office & Guest Relations',
      duration: '1 Year Full-Time',
      type: 'Diploma Program',
      tag: 'Corporate & Front Desk',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      description: 'Master Opera PMS and Fidelio software, executive concierge services, VIP guest relations, and front office revenue management.',
      modules: [
        'Opera / Property Management Systems (PMS)',
        'VIP & Executive Concierge Protocols',
        'Revenue Management & Room Pricing Strategies',
        'Conflict Resolution & Guest Delight Standards'
      ]
    }
  ];

  return (
    <div className="w-full pb-20 bg-white">
      <PageHero
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
        title="Industry-Approved Programs"
        description="Designed with 5-star hotel chains for real-world hospitality excellence."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <span className="text-[#8b1525] font-['Outfit'] text-xs font-bold uppercase tracking-widest">
            Academic Pathways
          </span>
          <h1 className="font-['Bebas_Neue','Outfit',sans-serif] text-5xl sm:text-6xl lg:text-7xl text-[#0a192f] tracking-tight uppercase mt-2">
            Industry-Approved <span className="text-gold-gradient">Programs</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Designed in collaboration with 5-star hotel chains to provide students with the highest degree of real-world industry readiness.
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {programsList.map((prog) => (
            <div
              key={prog.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 h-64 sm:h-72 rounded-2xl overflow-hidden relative">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#0a192f]/90 backdrop-blur-sm text-white font-['Outfit'] font-bold text-xs uppercase tracking-wider rounded-lg border border-[#c59b27]/40">
                  {prog.tag}
                </span>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#c59b27]/15 text-[#0a192f] font-bold">
                      {prog.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#c59b27]" />
                      {prog.duration}
                    </span>
                  </div>

                  <h3 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-[#0a192f] mb-3">
                    {prog.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {prog.modules.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#c59b27] flex-shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <Link
                    to={`/admission?program=${prog.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0a192f] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#132a4a] transition-all"
                  >
                    <span>Apply For This Program</span>
                    <ArrowRight className="w-4 h-4 text-[#c59b27]" />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-slate-600 hover:text-[#0a192f] uppercase tracking-wider"
                  >
                    Download Syllabus
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
