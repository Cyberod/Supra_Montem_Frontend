import Navbar from '../components/Navbar';
import ReachOut from '../components/ReachOut';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";





export default function LegalAutomation(){
    return(
    <div className="min-h-screen">
      <Navbar />
      <section id="LegalAutomation" className="w-full">
      {/* Topic Section */}
        <div className="max-w-full container xl:py-[104px] py-10 bg-aqua-haze">
          <div className="text-center px-5">
            <h5 className="section-name text-center">• LEGAL AUTOMATION •</h5>
            <h1 className="font-inter text-midnight font-normal text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-[39.2px] tracking-[1.12px] md:leading-[62.4px] md:tracking-[1.92px]">
              Fast. Reliable. Lawyer-Crafted Documents at Your Fingertips
            </h1>
          </div>
        </div>

        {/* Legal Automation  */}
        {/* Business Name Registration
            Company Registration
            Company Seal
            Company Stamp
            Independent Contractors Agreement
            Non-Disclosure Agreement
            Lease Agreement
            Loan Agreement
            Quit Notice
            Tenancy Agreement
            Trademark Registration
            US Company Registration
        
        */}
        <div className='max-w-full py-[40px] lg:py-[80px] xl:py-[104px]  container'>
            {/* Legal Automation services */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {[
                    "Business Name Registration",
                    "Company Registration",
                    "Company Seal",
                    "Company Stamp",
                    "Independent Contractors Agreement",
                    "Non-Disclosure Agreement",
                    "Lease Agreement",
                    "Loan Agreement",
                    "Quit Notice",
                    "Tenancy Agreement",
                    "Trademark Registration",
                    "US Company Registration"
                ].map((service, index) => {
                    const urlMap = {
                        "Business Name Registration": "",
                        "Company Registration": "",
                        "Company Seal": "",
                        "Company Stamp": "",
                        "Independent Contractors Agreement": "",
                        "Non-Disclosure Agreement": "",
                        "Lease Agreement": "",
                        "Loan Agreement": "",
                        "Quit Notice": "",
                        "Tenancy Agreement": "",
                        "Trademark Registration": "",
                        "US Company Registration": ""
                    };
                    const linkUrl = urlMap[service] || "/legal-automation";
                    return (
                        <Link to={linkUrl} key={index} className="flex items-center p-[16px] border-2 border-aqua-haze">
                            <div className="bg-aqua-haze p-4 mr-4">
                                <img src="/automate_icon1.svg" alt="Automation Icon" className="w-6 h-6" />
                            </div>
                            <span className="text-xs md:text-sm xl:text-[18px] xl:font-normal xl:leading-[28.8px] xl:tracking-[-0.72px] font-medium">
                                {service}
                            </span>
                        </Link>
                    );
                })}
            </div>
          
        </div>

        <ReachOut />
        <Footer />
        
      </section>
    </div>
    );
}