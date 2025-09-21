import CountUp from '../components/CountUp';
import ReachOut from '../components/ReachOut';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PracticeCta from '../components/PracticeCta';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="Home" className=" w-full ">
        {/* Hero Section */}
        <div className="max-w-full xs:px-5 sm:px-10 md:px-15 lg:px-20 xl:px-25 2xl:px-30 mx-auto sm:mx-0 bg-barley-white lg:gap-15 2xl:gap-20  lg:flex  xl:flex ">
          {/* Mission statement */}
          <div className="w-full pt-[74px] lg:flex-1 ">
            <h1 className=" w-full font-inter text-[28px] sm:text-[45px] md:text-[60px] lg:text-[40px] xl:text-[64px] 2xl:text-[64px] leading-[30.8px] sm:leading-[60px] md:leading-[70px] lg:leading-[60px] xl:leading-[70px]  font-normal text-midnight  mb-[16px] sm:mb-[19px] md:mb-[22px] lg:mb-[25px] xl:mb-[28px] 2xl:mb-[30px] pt-[68px]">
              Guiding You from a Higher Ground
            </h1>
            {/* Secondary statement */}
            <p className="text-midnight text-sm md:text-[18px] text-h-1 xs:mb-[24px] md:mb-[30px] xl:mb-[35px] 2xl:mb-[40px] ">
              At SupraMontem Attorneys, we deliver law with clarity, strategy and integrity,
              elevating every client's position through modern, value-driven solutions.
            </p>
            <a
              href="#consultation"
              className="inline-flex pl-[14px] py-2 pb-2 pr-2 md:px-[14px] md:py-3 xl:px-4 xl:py-3 bg-midnight text-barley-white rounded-full hover:opacity-90 transition text-h-1 items-center text-base gap-3 lg:text-[18px] h-12 lg:h-14 xl:ml-0"
            >
              Book a free consultation
            <div  className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center transition-transform ">
              <img src="/arrow.svg" alt="arrow icon" className="bg-secondary  w-[10px] h-[10px] stroke-[1.5px]"/>

            </div>
            </a>
          </div>

          {/* Scrolling SUPRA MONTEM */}
          <div className="max-w-full xs:right-2 sm:right-5 md:right-10 left-5 lg:right-155 lg:left-15 xl:right-170 2xl:right-200 xl:left-25 2xl:left-30 lg:h-[94px] h-16  mt-9 sm:mt-16 md:mt-18 lg:mt-145 xl:mt-145 mx-5 sm:mx-7 xl:inline-flex xl:gap-80  lg:px-0 xl:mx-0  overflow-hidden  absolute">            
            <div className="inline-flex gap-80 xl:contents">
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
        <div className="w-full mx-auto xs:px-5 sm:px-10 md:px-15 lg:px-20 xl:px-25 2xl:px-30">
          <div className="lg:mx-[30px] py-8 md:py-14 xl:py-20 2xl:py-[104px]  text-center ">
            <h2 className="font-inter text-48  font-normal text-midnight ">
              At Supra Montem Attorneys, we merge deep legal insight, strategic focus, and a 
              Client-first ethos to deliver truly distinguished legal solutions. Rooted 
              in integrity and driven by results, we stand with you-every step, every matter.
            </h2>
          </div>
        </div>

        {/* Practice Areas Section */}
        <div className="max-w-full container bg-midnight py-8 md:py-14 xl:py-20 2xl:py-[104px] ">
          <div className=" xs:mx-0 lg:mx-[180px]">
            <h5 className="font-inter text-secondary text-sm text-left leading-[14px] tracking-[0.56px] mb-[15px] font-medium ">
              • PRACTICE AREAS • 
            </h5>
            <h2 className="font-inter text-barley-white lg:text-[35px] xl:text-[40px] 2xl:text-[48px] font-medium lg:font-normal  text-48 text-left tracking-[0.96px]">Expert Legal Services Tailored to Your Needs</h2>
          </div>
          <div className="" > <PracticeCta/></div>
        </div>

        {/* Statistics Section */}
        <div className="max-w-[375px] mx-auto bg-aqua-haze px-[50px] xl:max-w-[1440px] xl:px-[120px]">
          <div className="py-[50px] flex flex-col gap-17 text-center xl:pt-[136px] xl:pb-[136px] xl:pl-[104px] xl:pr-[104px] xl:flex-row xl:justify-between xl:gap-8">
            <div className="xl:flex-1">
              <CountUp target={20} suffix="+" duration={2500} />
              <h6 className="text-lg text-midnight font-inter font-semibold mt-2 xl:text-[20px]">Years of Experience</h6>
              <p className="text-base text-blue-bayoux font-inter mt-4 xl:text-[16px]">We've handled cases across 
                diverse areas, securing justice for our clients</p>
            </div>

            <div className="xl:flex-1">
              <CountUp target={99.7} suffix="%" decimals={1} duration={2500} />
              <h6 className="text-lg text-midnight font-inter font-semibold mt-2 xl:text-[20px]">Success Rate</h6>
              <p className="text-base text-blue-bayoux font-inter mt-4 xl:text-[16px]">Our cases result to favourable 
                outcomes for 99% of our clients.</p>
            </div>

            <div className="xl:flex-1">
              <CountUp target={1.5} suffix="K" decimals={1} duration={2500} />
              <h6 className="text-lg text-midnight font-inter font-semibold mt-2 xl:text-[20px]">clients Served</h6>
              <p className="text-base text-blue-bayoux font-inter mt-4 xl:text-[16px]">We've served over 100 clients, from individuals to Businesses.</p>
            </div>

          </div>
        </div>

        {/* Process Section*/}
        <div className="max-w-[375px] mx-auto px-5 py-10 xl:max-w-[1440px] xl:mx-auto xl:max-h-[656.97px] xl:px-0 xl:py-0">
          <div className="xl:pt-[120px] xl:px-[120px]">
            <div className="xl:max-w-[1200px] xl:mx-auto">
              <h5 className="text-secondary font-inter text-xs xl:text-sm">• Our Process •</h5>
              <div className="flex flex-col gap-6 mt-4 xl:flex-row xl:justify-between xl:items-center xl:mt-0" id='Explore-Process'>
                <h1 className="font-inter text-2xl text-midnight xl:text-[48px]">Explore Our Process</h1>
                <a
                  href="#consultation"
                  className="inline-flex px-3 py-2 bg-midnight text-barley-white rounded-[24px] hover:opacity-90 transition font-inter items-center gap-2 text-sm w-fit xl:gap-3 xl:px-4 xl:py-3 xl:text-base"
                >
                  Book a free consultation
                  <img src="/arrow.png" alt="arrow icon" className="bg-secondary rounded-[50%] w-[20px] h-[20px] xl:w-[30px] xl:h-[30px]"/>
                </a>
              </div>
            </div>
            <div className='flex flex-col gap-8 mt-8 xl:max-w-[1200px] xl:mt-[50px] xl:flex xl:items-center xl:justify-between xl:mx-auto xl:gap-[40px] xl:flex-row'>
              <div className="w-[335px] h-[399.97px] relative mx-auto xl:w-[360px] xl:mx-0" id="process-image">
                <img src="/Consultation.png" alt="process image" className="w-full h-full object-cover" />
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-midnight p-2 w-[295px] h-[169.97px] xl:left-5 xl:right-5 xl:transform-none xl:translate-x-0 xl:w-auto xl:h-38">
                  <div className="flex flex-col items-start text-left">
                    <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-inter font-medium text-[16px] mb-3">
                      01
                    </div>
                    <h3 className="text-barley-white font-inter font-medium text-xl mb-2">Consultation</h3>
                    <p className="text-barley-white font-inter text-sm">Providing legal advice tailored to your specific needs</p>
                  </div>
                </div>
              </div>

              <div className="w-[335px] h-[399.97px] relative mx-auto xl:w-[360px] xl:mx-0" id="process-image">
                <img src="/Strategy.png" alt="process image" className="w-full h-full object-cover" />
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-midnight p-2 w-[295px] h-[169.97px] xl:left-5 xl:right-5 xl:transform-none xl:translate-x-0 xl:w-auto xl:h-38">
                  <div className="flex flex-col items-start text-left">
                    <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-inter font-medium text-[16px] mb-3">
                      02
                    </div>
                    <h3 className="text-barley-white font-inter font-medium text-xl mb-2">Strategy & Planning</h3>
                    <p className="text-barley-white font-inter text-sm">Creating a tailored legal strategy to meet your goals</p>
                  </div>
                </div>
              </div>

              <div className="w-[335px] h-[399.97px] relative mx-auto xl:w-[360px] xl:mx-0" id="process-image">
                <img src="/Execution.png" alt="process image" className="w-full h-full object-cover" />
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-midnight p-2 w-[295px] h-[169.97px] xl:left-5 xl:right-5 xl:transform-none xl:translate-x-0 xl:w-auto xl:h-38">
                  <div className="flex flex-col items-start text-left">
                    <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-inter font-medium text-[16px] mb-3">
                      03
                    </div>
                    <h3 className="text-barley-white font-inter font-medium text-xl mb-2">Execution</h3>
                    <p className="text-barley-white font-inter text-sm">Executing the legal strategy for resolution of your legal matters</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        
        {/* Legal Automation Section */}
        <div className="max-w-[375px] mx-auto px-5 py-10 xl:max-w-[1440px] xl:mx-auto xl:px-[120px] xl:py-0">
          <div className="flex flex-col gap-8 xl:max-w-[1200px] xl:flex-row xl:gap-8 xl:relative">
            <div className="xl:flex-1 xl:pt-[120px] xl:sticky xl:top-[0px] xl:self-start xl:pb-[120px]">
              <h5 className="font-inter text-secondary text-xs text-left xl:text-sm">
                • LEGAL AUTOMATION • 
              </h5>
              <h2 className="text-midnight font-inter leading-tight text-2xl mt-4 xl:text-5xl xl:mt-0">
                Fast. Reliable. Lawyer-Crafted Documents at Your Finger Tips
              </h2>
              <h5 className="font-inter text-midnight text-sm mt-4 xl:text-[16px] xl:mt-5">
                From Quit Notices to Tenancy Agreements, NDAs, and more. 
                Generate legally valid documents in minutes. Just fill in your details, make payment, 
                and receive your document signed, stamped, and delivered to your email.
              </h5>
              <a
                href="#consultation"
                className="inline-flex mt-6 px-3 py-2 bg-midnight text-barley-white rounded-[24px] hover:opacity-90 transition font-inter items-center gap-3 text-sm w-fit xl:mt-5 xl:px-4 xl:py-3 xl:text-base"
              >
                Get started now
                <img src="/arrow.png" alt="arrow icon" className="bg-secondary rounded-[50%] w-[30px] h-[30px]"/>
              </a>
            </div>

            <div className="flex flex-col gap-8 xl:flex-1 xl:flex xl:flex-col xl:gap-[68.5px] xl:pt-[120px] xl:pb-[120px]">
              <div className="relative">
                <img src="/details.png" alt="Details Image" className="w-full h-[405px] object-cover xl:hidden" />
                <img src="/justice_image1.png" alt="Justice Image" className="hidden xl:block xl:w-[563px] xl:h-[405px]" />
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-midnight w-[303px] h-[217px] xl:absolute  xl:left-7 xl:right-5 xl:bg-midnight xl:w-[250px] xl:h-[200px] xl:bottom-500  xl:transform-none xl:translate-x-0">
                  <div className="flex flex-col items-start text-left p-[15px]">
                    <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-inter font-medium text-[16px] mb-3">
                      <img src="/justice_icon1.svg" alt="justice Icon" />
                    </div>
                    <h3 className="text-barley-white font-inter text-xl mb-3">Input your Details</h3>
                    <p className="text-barley-white font-inter text-sm">Enter the information needed to personalize your legal document quickly and securely.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img src="/payment.png" alt="Payment Image" className="w-full h-[405px] object-cover xl:hidden" />
                <img src="/justice_image2.png" alt="Justice Image" className="hidden xl:block xl:w-[563px] xl:h-[404px]" />
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-midnight w-[303px] h-[217px] xl:absolute  xl:left-7 xl:right-5 xl:bg-midnight xl:w-[250px] xl:h-[200px] xl:bottom-300  xl:transform-none xl:translate-x-0">
                  <div className="flex flex-col items-start text-left p-[15px]">
                    <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-inter font-medium text-[16px] mb-3">
                      <img src="/justice_icon2.svg" alt="justice Icon" />
                    </div>
                    <h3 className="text-barley-white font-inter text-xl mb-3">Make Payment</h3>
                    <p className="text-barley-white font-inter text-sm">Complete payment via our secure platform to initiate processing. Your data remains protected at all times</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img src="/document.png" alt="Document Image" className="w-full h-[405px] object-cover xl:hidden" />
                <img src="/justice_image3.png" alt="Justice Image" className="hidden xl:block xl:w-[563px] xl:h-[405px]" />
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-midnight w-[303px] h-[217px] xl:absolute  xl:left-7 xl:right-5 xl:bg-midnight xl:w-[250px] xl:h-[200px] xl:bottom-100  xl:transform-none xl:translate-x-0">
                  <div className="flex flex-col items-start text-left p-[15px]">
                    <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-inter font-medium text-[16px] mb-3">
                      <img src="/justice_icon3.svg" alt="justice Icon" />
                    </div>
                    <h3 className="text-barley-white font-inter text-xl mb-3">Receive your Document</h3>
                    <p className="text-barley-white font-inter text-[13px]">Your document will be generated, signed, sealed, and delivered straight to your email, ready to use.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories section */}
        <div className="max-w-[375px] mx-auto px-5 py-10 xl:max-w-[1440px] xl:max-h-[739px] xl:mx-auto xl:px-[120px] xl:py-[104px]">
          <div className="xl:max-w-[1200px]">
            <h5 className="font-inter text-secondary text-xs xl:text-sm">SUCCESS STORIES</h5>
              <h2 className="text-midnight font-inter leading-tight text-2xl mt-4 xl:text-5xl xl:mt-0">
                Legal Journeys, Real Results
              </h2>
          </div>
          <div className="mt-8 xl:max-w-[1200px] items-center xl:mt-[64px] ">
            <img src="/Quote.png" alt="Quote image" className="w-[50px] h-[40px] mx-auto xl:mx-0  xl:w-[64.5px] xl:h-[52.5px] xl:mt-[64px]" />
            <h3 className="font-inter text-sm text-center xl:text-left text-midnight mt-4 xl:text-[28px] xl:pt-[16px] xl:pr-[30px]">
              Supra Montem guided me through a complex property transaction with remarkable clarity and professionalism. 
              Their attention to detail and prompt communication made the entire process seamless. 
              I felt fully supported every step of the way.
            </h3>
            <div className="mt-6 flex gap-3 px-[72px] xl:px-0 xl:mt-[48px] xl:gap-[16px]">
                <img src="/Client_image.png" alt="client Image" className="w-16 h-16 rounded-full xl:w-auto xl:h-auto"/>
                <div>
                  <h5 className="text-midnight font-inter text-base font-semibold xl:text-[20px]">Sir O'Kelly</h5>
                  <p className="text-blue-bayoux font-inter text-sm xl:text-[16px]">CEO, Venoxe Inc.</p>
                </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-[375px] h-[1600px] mx-auto bg-midnight px-5 py-10 xl:max-w-[1440px] xl:max-h-[780.23px] xl:px-[120px] xl:py-[104px] xl:mx-auto">
          <div className="xl:max-w-[1200px]">
            <h5 className="font-inter text-barley-white text-xs xl:text-sm">•  MEET OUR TEAM • </h5>
              <h2 className="text-barley-white font-inter leading-tight text-2xl mt-4 xl:text-5xl xl:mt-[15px]">
                Meet the Experts Behind Your Legal Success
              </h2>
          </div>
          <div className='flex flex-col gap-18 mt-8 xl:max-w-[1200px] xl:mt-[50px] xl:flex-row xl:items-center xl:justify-between xl:mx-auto xl:gap-[50px]'>
            <div className="w-full relative pb-[50px] xl:w-[360px]" id="process-image">
              <img src="/team1.png" alt="process image" className="w-full object-cover xl:w-auto" />
              <div className="absolute bottom--30 left-0 right-0  bg-barley-white pl-[24px] pb-[24px] pt-[16px] h-[90px]">
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-midnight font-semibold text-xl font-inter mb-[9px] xl:text-2xl">Izundu Ukanwa</h3>
                  <h4 className="text-midnight font-inter text-sm xl:font-[16px] xl:text-sm">CEO, Senior Attorney</h4>
                </div>
              </div>
            </div>

            <div className="w-full relative pb-[50px] xl:w-[360px]" id="process-image">
              <img src="/advisor.png" alt="process image" className="w-full object-cover xl:w-auto" />
              <div className="absolute bottom--30 left-0 right-0  bg-barley-white pl-[24px] pb-[24px] pt-[16px] h-[90px]">
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-midnight font-semibold text-xl font-inter mb-[9px] xl:text-2xl">Seun Ukanwa</h3>
                  <h4 className="text-midnight font-inter text-sm xl:font-[16px] xl:text-sm">Senior Legal Advisor</h4>
                </div>
              </div>
            </div>

            <div className="w-full relative pb-[50px] xl:w-[360px]" id="process-image">
              <img src="/expert.png" alt="process image" className="w-full object-cover xl:w-auto" />
              <div className="absolute bottom--30 left-0 right-0  bg-barley-white pl-[24px] pb-[24px] pt-[16px] h-[90px]">
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-midnight font-semibold text-xl font-inter mb-[9px] xl:text-2xl">James Roberts</h3>
                  <h4 className="text-midnight font-inter text-sm xl:font-[16px] xl:text-sm">Litigation Expert</h4>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Blog Section */}
        <div className="max-w-[375px] mx-auto px-5 py-10 xl:max-w-[1440px] xl:px-[120px] xl:max-h-[915.97px] xl:py-[104px] xl:mx-auto">
          <div className="xl:max-w-[1200px]">
            <h5 className="font-inter text-secondary text-xs mb-4 xl:text-sm xl:mb-[11px]">•  BLOG • </h5>
              <h2 className="text-midnight font-inter leading-tight text-2xl xl:text-5xl xl:mt-[15px]">
                Insights and Updates from the Legal World
              </h2>
          </div>
          <div className='flex flex-col gap-8 mt-8 xl:max-w-[1200px] xl:mt-[50px] xl:flex-row xl:items-center xl:justify-between xl:mx-auto xl:gap-[40px]'>
            <div className="w-[335px] h-[494.95px] relative mx-auto xl:w-[360px] xl:mx-0 xl:pb-[200px]" id="process-image">
              <img src="/blog3.png" alt="process image" className="w-[335px] h-[312px] object-cover xl:h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-5 xl:bottom--30 xl:pb-[24px] xl:pt-[28px] xl:h-[230px] xl:bg-transparent">
                <div className="flex flex-col items-start">
                  <h3 className="text-secondary text-base font-medium font-inter mb-1 xl:text-[14px] xl:mb-[3.3px]">Event</h3>
                  <h4 className="text-midnight font-inter font-medium text-base mb-2 xl:text-[20px] xl:mb-[11.09px]">Umuahia Business Summit: Legal Insights and Impact</h4>
                  <h4 className="text-midnight font-inter text-sm mb-3 xl:text-[13px] xl:mb-[16.68px]">From regulatory compliance to business structuring, 
                    this piece unpacks key legal highlights from the UBS event ...
                  </h4>
                <a
                  href="#"
                  className="inline-flex text-matisse font-inter items-center gap-2 text-sm xl:gap-3"
                >
                  Read Full Story
                  <img src="/Vector.png" alt="Vector icon" className="w-[10px] h-[10px]"/>
                </a>
                </div>
              </div>
            </div>

            <div className="w-[335px] h-[494.95px] relative mx-auto xl:w-[360px] xl:mx-0 xl:pb-[200px]" id="process-image">
              <img src="/blog2.png" alt="process image" className="w-[335px] h-[312px] object-cover xl:h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-5  xl:bottom--30 xl:pb-[24px] xl:pt-[28px] xl:h-[230px] xl:bg-transparent">
                <div className="flex flex-col items-start">
                  <h3 className="text-secondary text-base font-inter mb-1 xl:text-[14px] xl:mb-[3.3px]">EVENT</h3>
                  <h4 className="text-midnight font-inter font-medium text-base mb-2 xl:text-[20px] xl:mb-[11.09px]">Umuahia Business Summit: Legal Insights and Impact</h4>
                  <h4 className="text-midnight font-inter text-sm mb-3 xl:text-[13px] xl:mb-[16.68px]">From regulatory compliance to business structuring, 
                    this piece unpacks key legal highlights from the UBS event ...
                  </h4>
                <a
                  href="#"
                  className="inline-flex text-matisse font-inter items-center gap-2 text-sm xl:gap-3"
                >
                  Read Full Story
                  <img src="/Vector.png" alt="Vector icon" className="w-[10px] h-[10px]"/>
                </a>
                </div>
              </div>
            </div>

            <div className="w-[335px] h-[494.95px] relative mx-auto xl:w-[360px] xl:mx-0 xl:pb-[200px]" id="process-image">
              <img src="/blog1.png" alt="process image" className="w-[335px] h-[312px] object-cover xl:h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-5 xl:bottom--30 xl:pb-[24px] xl:pt-[28px] xl:h-[230px] xl:bg-transparent">
                <div className="flex flex-col items-start">
                  <h3 className="text-secondary text-base font-medium font-inter mb-1 xl:text-[14px] xl:mb-[3.3px]">EVENT</h3>
                  <h4 className="text-midnight font-inter font-medium text-base mb-2 xl:text-[20px] xl:mb-[11.09px]">Umuahia Business Summit: Legal Insights and Impact</h4>
                  <h4 className="text-midnight font-inter text-sm mb-3 xl:text-[13px] xl:mb-[16.68px]">From regulatory compliance to business structuring, 
                    this piece unpacks key legal highlights from the UBS event ...
                  </h4>
                <a
                  href="#"
                  className="inline-flex text-matisse font-inter items-center gap-2 text-sm xl:gap-3"
                >
                  Read Full Story
                  <img src="/Vector.png" alt="Vector icon" className="w-[10px] h-[10px]"/>
                </a>
                </div>
              </div>
            </div>

          </div> 

            <div className="mt-8 text-center xl:mt-[64px] xl:mb-[104px]">
                <button
                type="submit"
                className="inline-flex px-3 py-2 bg-midnight text-barley-white rounded-[24px] hover:opacity-90 transition font-inter items-center gap-3 text-sm xl:px-[14px] xl:py-[13.5px] xl:text-[18px]"
                >
                Load More Updates
                <img src="/arrow.png" alt="arrow icon" className="bg-secondary rounded-[50%] w-[30px] h-[30px] xl:w-[32px] xl:h-[32px]"/>
                </button>
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
