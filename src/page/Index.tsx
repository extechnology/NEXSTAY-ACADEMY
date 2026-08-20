import { HeroSection } from '@/components/home/HeroSection';
import HomeAboutSection from '@/components/home/HomeAboutSection';
import ProgramSnapshotSection from '@/components/home/Programsnapshotsection';
import EarnWhileYouLearnSection from '@/components/home/Earnwhileyoulearnsection';
import WhyChooseNAHM from '@/components/home/WhyUs';




export default function Home() {

  return (

    <div className="w-full bg-white overflow-hidden">

      <HeroSection />

      <HomeAboutSection />

      <ProgramSnapshotSection />

      <EarnWhileYouLearnSection />

      <WhyChooseNAHM />

      {/* <PlacementsStrip /> */}

    </div>

  );

}