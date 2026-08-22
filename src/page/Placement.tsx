import PageHero from '@/components/common/PageHero';
import PlacementOverview from '@/components/placement/PlacementOverview';
import CareerPaths from '@/components/placement/CareerPaths';
import HiringPartners from '@/components/placement/HiringPartners';
import PlacementCTA from '@/components/placement/PlacementCTA';

export default function Placement() {
  return (
    <div className="w-full bg-[#f8fafc] overflow-x-hidden">
      {/* Page Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1600&q=80"
        title="Placements & Careers"
        description="NAHM provides 100% job placement assistance to every graduating student, with opportunities both within India and internationally."
      />

      {/* 1. Overview + Placement Support */}
      <PlacementOverview />

      {/* 2. Career Paths After the Diploma */}
      <CareerPaths />

      {/* 3. Hiring Partners — animated logo strip */}
      <HiringPartners />

      {/* 4. Closing CTA */}
      <PlacementCTA />
    </div>
  );
}
