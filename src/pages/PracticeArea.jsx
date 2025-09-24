import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PracticeCta from '../components/PracticeCta';
import ReachOut from '../components/ReachOut';
import Breadcrumbs from '../components/Breadcrumbs';


export default function PracticeArea() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Practice Areas' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="hidden lg:block">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section id="practice-area" className="w-full bg-aqua-haze pt-[74px] lg:pt-0">
      {/* Topic Section */}
        <div className="max-w-full container xl:py-[104px] py-10">
          <div className="text-center px-5  lg:px-[150px]">
            <h5 className="section-name text-center">• PRACTICE AREAS •</h5>
            <h1 className="font-inter text-midnight font-normal text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-[39.2px] tracking-[1.12px] md:leading-[62.4px] md:tracking-[1.92px]">
              Expert Legal Services Tailored to Your Needs
            </h1>
          </div>
        </div>
        <div className="max-w-full container bg-midnight">

            <div className="py-10 xl:pt-[80px] xl:pb-[104px]" > <PracticeCta/></div>

        </div>
        <ReachOut />
        <Footer />
      </section>

    </div>
  );
}
