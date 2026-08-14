import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import SevenDayNoticeForm from '../components/SevenDayNoticeForm';
import Footer from '../components/Footer';


export default function SevenDayNotice() {
  const breadcrumbItems = [
    { label: 'Legal Automation', href: '/' },
    { label: 'Seven Days Notice' }
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
              Seven Days Notice
            </h1>
          </div>
        </div>

        {/* Seven Day Notice Form */}
        <SevenDayNoticeForm />



        <Footer />
      </section>

    </div>
  );
}
