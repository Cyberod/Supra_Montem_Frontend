import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import DemandLetterForm from '../components/DemandLetterForm';
import Footer from '../components/Footer';


export default function DemandLetter() {
  const breadcrumbItems = [
    { label: 'Legal Automation', href: '/' },
    { label: 'Demand Letter' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="hidden lg:block">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section id="practice-area" className="w-full pt-[74px]  lg:pt-0">
      {/* Topic Section */}
        <div className="max-w-full container bg-midnight py-[80px] xl:py-[100px] h-auto">
          <div className="text-center px-5  lg:px-[150px]">
            <h1 className="font-inter text-barley-white font-normal text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-[39.2px] tracking-[1.12px] md:leading-[62.4px] md:tracking-[1.92px]">
              Demand Letter
            </h1>
          </div>
        </div>

        {/* Demand Letter Form */}
        <DemandLetterForm />

        <Footer />
      </section>

    </div>
  );
}
