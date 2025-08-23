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
      <Breadcrumbs items={breadcrumbItems} />
      

      <section id="practice-area" className="w-full py-12 bg-aqua-haze ">

        <div className="max-w-[1440px] mx-auto px-[120px] py-[104px] h-[347.58px] ">
          <div className="text-center mb-16 px-[180px]">
            <h5 className="font-inter text-secondary text-sm mb-3">• PRACTICE AREAS •</h5>
            <h1 className="font-inter text-[48px] text-midnight leading-tight">
              Expert Legal Services Tailored to Your Needs
            </h1>
          </div>

        </div>
        <div className="max-w-[1440px] px-[120px] bg-midnight  ">

            <div className="pt-[80px] pb-[104px]" > <PracticeCta/></div>

        </div>

      </section>


        <ReachOut />
      <Footer />
    </div>
  );
}
