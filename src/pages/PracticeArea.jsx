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

      <div className="hidden xl:block">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section id="practice-area" className="w-full bg-aqua-haze">
      {/* Topic Section */}
        <div className="max-w-[375px] mx-auto px-5 mt-20 py-10 xl:mt-0 xl:max-w-[1440px] xl:mx-auto xl:px-[120px] xl:py-[104px] xl:h-[347.58px]">
          <div className="text-center px-10 xl:mb-16 xl:px-[180px]">
            <h5 className="font-inter text-secondary text-xs mb-4 xl:text-sm xl:mb-3">• PRACTICE AREAS •</h5>
            <h1 className="font-inter text-2xl text-midnight leading-tight xl:text-[48px]">
              Expert Legal Services Tailored to Your Needs
            </h1>
          </div>
        </div>
        <div className="max-w-[375px] px-5 xl:max-w-[1440px] xl:px-[120px] bg-midnight  ">

            <div className="py-10 xl:pt-[80px] xl:pb-[104px]" > <PracticeCta/></div>

        </div>
        <ReachOut />
        <Footer />
      </section>

    </div>
  );
}
