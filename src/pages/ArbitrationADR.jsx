import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import AppointmentForm from '../components/AppointmentForm';
import Footer from '../components/Footer';


export default function ArbitrationADR() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: 'Arbitration ADR' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="hidden xl:block">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* Hero Section */}
      <div className="max-w-[375px] mx-auto mt-20 h-32 bg-midnight flex items-center justify-center xl:mt-0 xl:max-w-[1440px] xl:h-[258px]">
        <h1 className="font-inter text-2xl text-barley-white text-center px-5 xl:text-[64px] xl:px-0">
          Arbitration ADR
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-[375px] mx-auto px-5 py-8 xl:max-w-full xl:mx-auto xl:px-[120px] xl:py-[48px]">
        <div className="space-y-6">
          <p className="font-inter text-sm text-midnight leading-relaxed xl:text-[18px]">
            We handle arbitration matters, whether in Nigeria or abroad, whether between commercial adversaries or by investors against states. We also conduct court proceedings relating to arbitration, including court applications to uphold arbitration agreements or to set awards aside. Most of our arbitration matters have an international dimension. We also handle mediations.
          </p>
          
          <p className="font-inter text-sm text-midnight leading-relaxed xl:text-[18px]">
            We have worked as lead counsel, as co-counsel in support of foreign law firms, as arbitrators, as expert witnesses and as registrars to arbitrators. In arbitration and mediation, our approach is the same approach that we take with litigation: speed, thoroughness, imagination, empathy, tenacity, diligence, clarity from the start as to goals and strategy, and realism.
          </p>

          <div className="mt-6 xl:mt-8">
            <h3 className="font-inter text-lg text-midnight font-semibold mb-4 xl:text-[24px] xl:mb-6">
              Our most significant work here has included advising and representing clients in the following areas:
            </h3>
            
            <ul className="space-y-3 font-inter text-sm text-midnight leading-relaxed xl:text-[18px]">
              <li className="flex items-start">
                <span className="text-midnight mr-2 xl:mr-3">•</span>
                foreign investors in an investment treaty arbitration
              </li>
              <li className="flex items-start">
                <span className="text-midnight mr-2 xl:mr-3">•</span>
                private equity firms in London-seated arbitration against their financial services sector investees
              </li>
              <li className="flex items-start">
                <span className="text-midnight mr-2 xl:mr-3">•</span>
                Paris-seated arbitration against the Federal Government re-awarding a USD6bn power sector project
              </li>
              <li className="flex items-start">
                <span className="text-midnight mr-2 xl:mr-3">•</span>
                banks in mediating claims filed against them by large creditor customers
              </li>
              <li className="flex items-start">
                <span className="text-midnight mr-2 xl:mr-3">•</span>
                an international logistics company in arbitration claims filed by it against a pan-African business group
              </li>
              <li className="flex items-start">
                <span className="text-midnight mr-2 xl:mr-3">•</span>
                a tanker charterer recovering from a sub-charterer over USD300mm in damages for breach in an arbitration
              </li>
              <li className="flex items-start">
                <span className="text-midnight mr-2 xl:mr-3">•</span>
                a leading "GSM" telephone operator in more than one discrete arbitration filed against it by its suppliers
              </li>
              <li className="flex items-start">
                <span className="text-midnight mr-2 xl:mr-3">•</span>
                an arbitration dispute among the shareholders of a large telecommunications operator
              </li>
              <li className="flex items-start">
                <span className="text-midnight mr-2 xl:mr-3">•</span>
                a foreign "IT" contractor in an adjudication
              </li>
              <li className="flex items-start">
                <span className="text-midnight mr-2 xl:mr-3">•</span>
                an LSE-listed energy company in a quest for expert determination
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Appointment Form */}
      <AppointmentForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
