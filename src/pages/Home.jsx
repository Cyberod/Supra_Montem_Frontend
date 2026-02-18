import CountUp from '../components/CountUp';
import ReachOut from '../components/ReachOut';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PracticeCta from '../components/PracticeCta';
import ActionButton from '../components/ActionButton';
import SuccessStories from '../components/SuccessStories';
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="Home" className=" w-full ">
        {/* Hero Section */}
        <div className="max-w-full container  bg-barley-white lg:gap-15 2xl:gap-20  lg:flex  xl:flex ">
          {/* Mission statement */}
          <div className="w-full pt-[74px] lg:flex-1 ">
            <h1 className=" w-full font-inter text-[28px] sm:text-[45px] md:text-[60px] lg:text-[40px] xl:text-[64px] 2xl:text-[64px] leading-[30.8px] sm:leading-[60px] md:leading-[70px] lg:leading-[60px] xl:leading-[70px]  font-normal text-midnight  mb-[16px] sm:mb-[19px] md:mb-[22px] lg:mb-[25px] xl:mb-[28px] 2xl:mb-[30px] pt-[68px]">
              Guiding You from a Higher Ground
            </h1>
            {/* Secondary statement */}
            <p className="text-midnight text-sm md:text-[18px] text-h-1 mb-[24px] md:mb-[30px] xl:mb-[35px] 2xl:mb-[40px] ">
              At Supra Montem Attorneys, we deliver law with clarity, strategy and integrity,
              elevating every client's position through modern, value-driven solutions.
            </p>
            <div>
              <ActionButton label="Book a free Consultation" />
            </div>
          </div>

          {/* Scrolling SUPRA MONTEM */}
          <div className="max-w-full right-2 sm:right-5 md:right-10 left-5 lg:right-155 lg:left-15 xl:right-170 2xl:right-200 xl:left-25 2xl:left-30 lg:h-[94px] h-16  mt-9 sm:mt-16 md:mt-18 lg:mt-145 xl:mt-145 mx-5 sm:mx-7 xl:inline-flex xl:gap-80  lg:px-0 xl:mx-0  overflow-hidden  absolute">            
            <div className="inline-flex gap-80 xl:contents">
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>
              <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-16 lg:h-[94px]"/>

            </div>
            {/* Fade overlay for left side */}
            <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-barley-white to-transparent pointer-events-none z-10"></div>
          </div>

          {/* CEO Image */}
          <div className="relative -mx-5 sm:-mx-10 md:-mx-15 lg:mx-0 h-[441px] sm:h-[720px] md:h-[900px] lg:h-[675px]  mt-25 sm:mt-32 md:mt-34 lg:w-[500px] 2xl:w-[600px] xl:flex xl:justify-end lg:pt-[68px] lg:mt-0"> 
            <img
              src="/ceo.png"
              alt="CEO"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Pitch statement */}
        <div className="w-full container">
          <div className="lg:mx-[30px] py-10 md:py-14 xl:py-20 2xl:py-[104px]  text-center ">
            <h2 className="font-inter text-48  font-normal text-midnight ">
              At Supra Montem Attorneys, we merge deep legal insight, strategic focus, and a 
              Client-first ethos to deliver truly distinguished legal solutions. Rooted 
              in integrity and driven by results, we stand with you-every step, every matter.
            </h2>
          </div>
        </div>

        {/* Practice Areas Section */}
        <div className="max-w-full container bg-midnight py-10 md:py-14 xl:py-20 2xl:py-[104px] ">
          <div className=" xs:mx-0 lg:mx-[180px]">
            <h5 className="section-name">
              • PRACTICE AREAS • 
            </h5>
            <h2 className="font-inter text-barley-white lg:text-[35px] xl:text-[40px] 2xl:text-[48px] font-medium lg:font-normal  text-48 text-left tracking-[0.96px]">Expert Legal Services Tailored to Your Needs</h2>
          </div>
          <div className="" > <PracticeCta/></div>
        </div>

        {/* Statistics Section */}
        <div className="max-w-full container bg-aqua-haze">
          <div className="py-[40px] flex flex-col gap-17 tems-center  lg:py-[104px] mx-[50px] lg:mx-[136px] lg:flex-row lg:justify-between lg:gap-12">

            <div className="xl:flex-1 text-center lg:text-left">
              <CountUp target={35} suffix="+" duration={2500} />
              <h6 className="text-lg text-midnight font-inter font-semibold mt-3 xl:text-[20px]">Years of Combined Experience</h6>
              <p className="text-sm text-blue-bayoux font-inter mt-4 xl:text-base">We've handled cases across 
                diverse areas, securing justice for our clients</p>
            </div>

            <div className="xl:flex-1 text-center lg:text-left">
              <CountUp target={99.9} suffix="%" decimals={1} duration={2500} />
              <h6 className="text-lg text-midnight font-inter font-semibold mt-2 xl:text-[20px]">Success Rate</h6>
              <p className="text-sm text-blue-bayoux font-inter mt-4 xl:text-base">Our cases result to favourable 
                outcomes for 99% of our clients.</p>
            </div>

            <div className="xl:flex-1 text-center lg:text-left">
              <CountUp target={1.5} suffix="K" decimals={1} duration={2500} />
              <h6 className="text-lg text-midnight font-inter font-semibold mt-2 xl:text-[20px]">clients Served</h6>
              <p className="text-sm text-blue-bayoux font-inter mt-4 xl:text-base">We've served over 1,000 clients, from individuals to Businesses.</p>
            </div>

          </div>
        </div>

        {/* Process Section*/}
        <div className="max-w-full container">
          <div className="py-10 md:py-20 lg:pt-30 ">
            <div className=' lg:mx-0'>
              <h5 className="section-name">• OUR PROCESS •</h5>
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between  lg:items-center lg:mt-0" id='Explore-Process'>
                <h1 className="font-inter text-midnight  font-medium lg:font-normal  text-[24px] sm:text-[40px] md:text-[48px] lg:text-[42px] 2xl:text-[48px] text-left tracking-[0.96px]">Explore Our Process</h1>
              <div>
                <ActionButton label="Book a free Consultation" className=" w-[247px] md:w-[257px] md:gap-4 h-auto lg:w-auto" href="/contact" />
              </div>
              </div>
            </div>
            <div className='flex flex-col gap-8 mt-8 lg:mt-[50px] lg:flex lg:items-center lg:justify-between lg:mx-auto xl:gap-[40px] lg:flex-row'>
              
              <div className="w-full h-auto relative mx-auto lg:w-auto xl:mx-0 group transition-all duration-300 overflow-hidden" id="process-image">
                <img src="/Consultation.png" alt="process image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-5 left-5 right-5 h-auto bg-midnight p-5 sm:p-8 md:p-10 lg:p-3 xl:p-5">
                  <div className="flex flex-col items-start text-left">
                    <div className="action-tag">
                      01
                    </div>
                    <h3 className="action-header">Consultation</h3>
                    <p className="action-text">Providing legal advice tailored to your specific needs</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto relative mx-auto lg:w-auto xl:mx-0 group transition-all duration-300 overflow-hidden" id="process-image">
                <img src="/Strategy.png" alt="process image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-5 left-5 right-5 h-auto bg-midnight p-5 sm:p-8 md:p-10 lg:p-3 xl:p-5">
                  <div className="flex flex-col items-start text-left">
                    <div className="action-tag">
                      02
                    </div>
                    <h3 className="action-header">Strategy & Planning</h3>
                    <p className="action-text">Creating a tailored legal strategy to meet your goals</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto relative mx-auto lg:w-auto xl:mx-0 group transition-all duration-300 overflow-hidden" id="process-image">
                <img src="/Execution.png" alt="process image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-5 left-5 right-5 h-auto bg-midnight p-5 sm:p-8 md:p-10 lg:p-3 xl:p-5">
                  <div className="flex flex-col items-start text-left">
                    <div className="action-tag">
                      03
                    </div>
                    <h3 className="action-header">Execution</h3>
                    <p className="action-text">Executing the legal strategy for resolution of your legal matters</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        
        {/* Legal Automation Section */}
        <div className="max-w-full container">
          <div className="flex flex-col gap-8 lg:flex-row  lg:relative">
            <div className="lg:flex-1 lg:sticky lg:top-[0px] lg:self-start py-10 sm:py-15 md:py-20 lg:py-25 xl:py-30">
              <h5 className="section-name">
                • LEGAL AUTOMATION • 
              </h5>
              <h2 className="text-midnight font-inter font-medium lg:font-normal text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] 2xl:text-[48px] mt-[10px]  ">
                Fast. Reliable. Lawyer-Crafted Documents at Your Fingertips
              </h2>
              <h5 className="font-inter text-midnight text-base mt-5 ">
                From Quit Notices to Tenancy Agreements, NDAs, and more. 
                Generate legally valid documents in minutes. Just fill in your details, make payment, 
                and receive your document signed, stamped, and delivered to your email.
              </h5>
              <ActionButton label="Get started now" href='#' className='mt-5 mb-8' />
            </div>

            <div className="flex flex-col gap-8 lg:flex-1 lg:flex lg:flex-col lg:gap-[68.5px] lg:py-30">

              <div className="relative">
                <img src="/details.png" alt="Details Image" className="w-full h-auto object-cover lg:hidden" />
                <img src="/justice_image1.png" alt="Justice Image" className="hidden lg:block lg:w-full h-auto" />
                <div className="absolute top-5 left-5 right-5 xl:top-8 lg:left-8 lg:right-40 xl:right-60 h-auto bg-midnight ">
                  <div className="flex flex-col items-start text-left p-5 sm:p-8 md:p-10 lg:p-3 xl:p-5">
                    <div className="action-tag">
                      <img src="/justice_icon1.svg" alt="justice Icon" />
                    </div>
                    <h3 className="action-header">Input your Details</h3>
                    <p className="action-text">Enter the information needed to personalize your legal document quickly and securely.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img src="/payment.png" alt="Payment Image" className="w-full h-auto object-cover lg:hidden" />
                <img src="/justice_image2.png" alt="Justice Image" className="hidden lg:block lg:w-full h-auto" />
                <div className="absolute top-5 left-5 right-5 lg:top-8 lg:left-8 lg:right-40 xl:right-60 h-auto bg-midnight ">
                  <div className="flex flex-col items-start text-left p-5 sm:p-8 md:p-10 lg:p-3 xl:p-5">
                    <div className="action-tag">
                      <img src="/justice_icon2.svg" alt="justice Icon" />
                    </div>
                    <h3 className="action-header">Make Payment</h3>
                    <p className="action-text">Complete payment via our secure platform to initiate processing. Your data remains protected at all times</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img src="/document.png" alt="Document Image" className="w-full h-auto object-cover lg:hidden" />
                <img src="/justice_image3.png" alt="Justice Image" className="hidden lg:block lg:w-full h-auto" />
                <div className="absolute top-5 left-5 right-5 lg:top-8 lg:left-8 lg:right-40 xl:right-60 h-auto bg-midnight">
                  <div className="flex flex-col items-start text-left p-5 sm:p-8 md:p-10 lg:p-3 xl:p-5">
                    <div className="action-tag">
                      <img src="/justice_icon3.svg" alt="justice Icon" />
                    </div>
                    <h3 className="action-header">Receive your Document</h3>
                    <p className="action-text">Your document will be generated, signed, sealed, and delivered straight to your email, ready to use.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories section */}
        < SuccessStories />

        {/* Team Section */}
        <div className="max-w-full bg-midnight container relative">
          <div className=" py-8 md:py-14 xl:py-20 2xl:py-[104px]">
            {/* Section Header */}
            <div className="mb-6 sm:mb-8 md:mb-12 xl:mb-16">
              <h5 className="section-name ">
                • MEET OUR TEAM •
              </h5>
              <h2 className="text-barley-white font-inter font-medium lg:font-normal  text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
                Meet the Experts Behind Your Legal Success
              </h2>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              {/* Team Member 1 */}
              <div className="bg-barley-white ">
                <img
                  src="/team1.png"
                  alt="Izundu Ukanwa, CEO, Senior Attorney"
                  className="w-full h-auto "
                />
                <div className="p-6 md:p-7 lg:p-4 bg-barley-white">
                  <h3 className="text-midnight font-inter font-semibold text-base sm:text-xl md:text-3xl lg:text-2xl mb-3 mt-2 lg:mb-2 lg:mt-0">
                    Izundu Ukanwa
                  </h3>
                  <p className="text-midnight font-inter text-xs sm:text-sm md:text-xl mb-1 lg:text-[16px]">
                    Principal Partner
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className=" ">
                <img
                  src="/advisor.png"
                  alt="Seun Ukanwa, Senior Legal Advisor"
                  className="w-full h-auto "
                />
                <div className="p-6 md:p-7 lg:p- bg-barley-white">
                  <h3 className="text-midnight font-inter font-semibold text-base sm:text-xl md:text-3xl lg:text-2xl mb-3 mt-2 lg:mb-2 lg:mt-0">
                    Seun Ukanwa
                  </h3>
                  <p className="text-midnight font-inter text-xs sm:text-sm md:text-xl mb-1 lg:text-[16px]">
                    Managing Partner
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className=" ">
                <img
                  src="/expert.png"
                  alt="Mary Ogwo, Esq., Associate"
                  className="w-full h-auto "
                />
                <div className="p-6 md:p-7 lg:p- bg-barley-white">
                  <h3 className="text-midnight font-inter font-semibold text-base sm:text-xl md:text-3xl lg:text-2xl mb-3 mt-2 lg:mb-2 lg:mt-0">
                    Mary Ogwo, Esq.
                  </h3>
                  <p className="text-midnight font-inter text-xs sm:text-sm md:text-xl mb-1 lg:text-[16px]">
                    Associate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="max-w-full relative container">
          <div className="py-8 md:py-14 xl:py-20 2xl:py-[104px]">
            {/* Section Header */}
            <div className=" mb-8 md:mb-10 lg:mb-12">
              <h5 className="section-name  ">
                • BLOG •
              </h5>
              <h2 className="text-midnight font-inter font-medium lg:font-normal text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight">
                Insights and Updates from the Legal World
              </h2>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">

              {/* Blog Post 1 */}
              <div className="bg-white group transition-all duration-300 overflow-hidden border border-none">
                <img 
                  src="/blog3.png" 
                  alt="Umuahia Business Summit: Legal Insights and Impact" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="py-5 md:py-6 lg:px-0">
                  <span className="font-inter text-secondary text-sm md:text-base lg:text-sm font-medium mb-2 block">
                    EVENT
                  </span>
                  <h3 className="text-midnight font-inter font-medium text-base md:text-xl lg:text-[18px] xl:text-[22px] 2xl:text-2xl mb-3 lg:tracking-[0.96px]">
                  10 Key Questions to Ask Before Hiring a Law Firm                
                  </h3>
                  <p className="text-blue-bayoux font-inter text-sm sm:text-xl lg:text-base mb-4 line-clamp-3">
                    Choosing the right law firm is crucial for ensuring legal success, whether for personal matters or business needs...   
                  </p>
                  <Link
                    to="/blog/10-key-questions-to-ask-before-hiring-a-law-firm"
                    className="full-story inline-flex text-matisse font-inter font-medium items-center text-sm sm:text-xl lg:text-base gap-3 "
                  >
                    Read Full Story
                    <img src="/blue_arrow.svg" alt="arrow-icon" className='w-[10px] h-[10px] stroke-[1.5px]' />
                  </Link>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-white group transition-all duration-300 overflow-hidden border border-none">
                <img 
                  src="/blog2.png" 
                  alt="Umuahia Business Summit: Legal Insights and Impact" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="py-5 md:py-6 lg:px-0">
                  <span className="font-inter text-secondary text-sm md:text-base lg:text-sm font-medium mb-2 block">
                    FAMILY LAW
                  </span>
                  <h3 className="text-midnight font-inter font-medium text-base md:text-xl lg:text-[18px] xl:text-[22px] 2xl:text-2xl mb-3 lg:tracking-[0.96px]">
                  Guiding Families Through Legal Matters: The Role of a Law Firm 
                  </h3>
                  <p className="text-blue-bayoux font-inter text-sm sm:text-xl lg:text-base mb-4 line-clamp-3">
                  Family-related legal issues are often sensitive and emotionally charged. From marriage and divorce to child custody and...         
                  </p>
                  <Link
                    to="/blog/Guiding-Families-Through-Legal-Matters-The-Role-of-a-Law-Firm"
                    className="full-story inline-flex text-matisse font-inter font-medium items-center text-sm sm:text-xl lg:text-base gap-3 "
                  >
                    Read Full Story
                    <img src="/blue_arrow.svg" alt="arrow-icon" className='w-[10px] h-[10px] stroke-[1.5px]' />
                  </Link>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="bg-white group transition-all duration-300 overflow-hidden border border-none">
                <img 
                  src="/blog1.png" 
                  alt="Umuahia Business Summit: Legal Insights and Impact" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="py-5 md:py-6 lg:px-0">
                  <span className="font-inter text-secondary text-sm md:text-base lg:text-sm font-medium mb-2 block">
                    PROPERTY LAW
                  </span>
                  <h3 className="text-midnight font-inter font-medium text-base md:text-xl lg:text-[18px] xl:text-[22px] 2xl:text-2xl mb-3 lg:tracking-[0.96px]">
                  How Law Firms Help Resolve Disputes
                  </h3>
                  <p className="text-blue-bayoux font-inter text-sm sm:text-xl lg:text-base mb-4 line-clamp-3">
                  Land-related conflicts can escalate quickly without proper guidance. This post outlines steps to resolve property issues through legal channels ...
                  </p>
                  <Link
                    to="/blog/how-law-firms-help-resolve-disputes"
                    className="full-story inline-flex text-matisse font-inter font-medium items-center text-sm sm:text-xl lg:text-base gap-3 "
                  >
                    Read Full Story
                    <img src="/blue_arrow.svg" alt="arrow-icon" className='w-[10px] h-[10px] stroke-[1.5px]' />
                  </Link>
                </div>
              </div>
            </div>

            {/* View More Button */}
            <div className="mt-12 md:mt-14 lg:mt-16">
              <div>
                <ActionButton  label="View More Updates" href="blog" />

              </div>
            </div>
          </div>
        </div>

        {/* Reach out section */}
        <ReachOut />

        {/* Footer Section */}
        <Footer />

      </section>

    </div>
    
  );
}
