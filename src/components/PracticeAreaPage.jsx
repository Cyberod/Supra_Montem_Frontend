import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import ReachOut from '../components/ReachOut';
import Footer from '../components/Footer';

export default function PracticeAreaPage({ title, description, listHeading, listItems }) {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: title }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="hidden lg:block">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section id="practice-area" className="w-full pt-[74px] lg:pt-0">
        {/* Topic Section */}
        <div className="max-w-full container relative bg-midnight py-[80px] xl:py-[100px] h-auto">
          <div className="text-center px-5 lg:px-[150px]">
            <h1 className="font-inter text-barley-white font-normal text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-[39.2px] tracking-[1.12px] md:leading-[62.4px] md:tracking-[1.92px]">
              {title}
            </h1>
          </div>
          <img
            src="/ADR_LINES.svg"
            alt="vector line"
            className="container absolute overflow-hidden top-0 right-5"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-full container py-8 xl:py-[48px]">
          <div>
            {description.map((para, idx) => (
              <p
                key={idx}
                className="font-inter text-blue-bayoux leading-relaxed text-[18px] mb-4"
              >
                {para}
              </p>
            ))}

            {listItems && listItems.length > 0 && (
              <div className="mt-6 xl:mt-8">
                {listHeading && (
                  <h3 className="font-inter text-xl text-midnight font-semibold mb-4 xl:text-[24px] xl:mb-6">
                    {listHeading}
                  </h3>
                )}

                <ul className="space-y-3 font-inter text-blue-bayoux leading-relaxed text-[18px]">
                  {listItems.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-bayoux mr-2 xl:mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <ReachOut />
        <Footer />
      </section>
    </div>
  );
}
