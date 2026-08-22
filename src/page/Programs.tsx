import PageHero from '@/components/common/PageHero';
import ProgramOverview from '@/components/programs/ProgramOverview';
import ProgramDetails from '@/components/programs/ProgramDetails';

export default function Programs() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageHero
        image="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1600&q=80"
        title="Our Programs"
        description="Industry-integrated diploma designed to take you from student to hospitality professional in 15 months."
      />
      <ProgramOverview />
      <ProgramDetails />
    </div>
  );
}
