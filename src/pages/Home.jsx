import CountUp from '../components/CountUp';
import ReachOut from '../components/ReachOut';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PracticeCta from '../components/PracticeCta';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="Home" className=" w-full py-12 ">
        <div className="max-w-[375px] xl:max-w-[1440px] h-[824px] xl:h-[675px] mx-auto  xl:px-[120px] xl:flex xl:gap-[80px] bg-barley-white">
          <div className='px-[20px]'>
            {/* Left Text Column */}
            <div className="pt-[48px] xl:pt-30 xl:flex-1 xl:space-y-6 max-w[335px] xl:max-w-[520px]">
              <h1 className="font-inter text-[28px] text-md xl:text-6xl  text-midnight leading-tight">
                Guiding You from a Higher Ground
              </h1>
              <p className="mt-[16px] text-midnight text-sm  xl:text-[18px] font-inter">
                At SupraMontem Attorney, we deliver law with clarity, strategy and integrity,
                elevating every client's position through modern, value-driven solutions.
              </p>
              <a
                href="#consultation"
                className=" w-[237px] h-[48px] inline-flex xl:mt-2 px-3 xl:px-4 text-sm py-2 xl:py-3 bg-midnight text-white rounded-[24px] hover:opacity-90 transition font-inter items-center gap-3"
              >
                <p >Book a free consultation</p>
                <img src="/arrow.png" alt="arrow icon" className="bg-secondary rounded-[50%] w-[30px] h-[30px]"/>
              </a>


            </div>
          </div>

          {/* Scrolling SUPRA MONTEM */}
          <div className="overflow-hidden mt-145  max-w-[520px] absolute inline-flex gap-80 ">
            <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-[94px]   "/>
            <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-[94px]    "/>
            <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-[94px]    "/>
            <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-[94px]    "/>
            <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-[94px]    "/>
            <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-[94px]    "/>
            <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-[94px]    "/>
            <img src="/SUPRA_MONTEM_ATTORNEYS.png" className="animate-marquee2 max-w-[1833px] h-[94px]    "/>

          </div>

          <div>
          {/* Right CEO Image */}
            <div className="w-full xl:w-[500px] xl:flex xl:justify-end"> 
              <img
                src="/ceo.png"
                alt="CEO"
                className="w-full h-full  object-cover"
              />
            </div>
          </div>
        </div>

        
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div className="pt-20 text-center pb-20">
            <h2 className="font-inter text-[42px] text-midnight leading-tight">
              At Supra Montem Attorney, we merge deep legal insight, strategic focus, and a 
              Client-first ethos to deliver truly distinguished legal solutions. Rooted 
              in integrity and driven by results, we stand with you-every step, every matter.
            </h2>
            
          </div>
        </div>

        <div className="max-w-[1440px] px-[120px] bg-midnight  ">
          <div className=" pt-[104px]  max-w[1200px] px-[180px]">
            <h5 className="font-inter text-barley-white text-[14px] text-left">
              • PRACTICE AREAS • 
            </h5>
            <h2 className="font-inter text-barley-white text-[48px] text-left">Expert Legal Services Tailored to Your Needs</h2>
            
            
          </div>
          <div className="pt-[80px] pb-[104px]" > <PracticeCta/></div>
        </div>

        {/* Statistics Section */}
        <div className="max-w-[1440px] px-[120px] bg-aqua-haze">
          <div className="pt-[136px] pb-[136px] pl-[104px] pr-[104px] flex justify-between gap-8">
            <div className="flex-1">
              <CountUp target={20} suffix="+" duration={2500} />
              <h6 className="text-[20px] text-midnight font-inter font-semibold">Years of Experience</h6>
              <p className="text-[16px] text-blue-bayoux font-inter mt-4">We've handled cases across 
                diverse areas, securing justice for our clients</p>
            </div>

            <div className="flex-1">
              <CountUp target={99.7} suffix="%" decimals={1} duration={2500} />
              <h6 className="text-[20px] text-midnight font-inter font-semibold">Success Rate</h6>
              <p className="text-[16px] text-blue-bayoux font-inter mt-4">Our cases result to favourable 
                outcomes for 99% of our clients.</p>
            </div>

            <div className="flex-1">
              <CountUp target={1.5} suffix="K" decimals={1} duration={2500} />
              <h6 className="text-[20px] text-midnight font-inter font-semibold">clients Served</h6>
              <p className="text-[16px] text-blue-bayoux font-inter mt-4">We've served over 100 clients, from individuals to Businesses.</p>
            </div>

          </div>
        </div>
        {/* Process Image */}
        <div className="max-w-[1440px] mx-auto  max-h-[656.97px] ">
          <div className="pt-[120px] px-[120px]">
            <div className="max-w-[1200px] mx-auto">
              <h5 className="text-secondary font-inter test-sm">• Our Process •</h5>
              <div className="flex justify-between items-center" id='Explore-Process'>
                <h1 className="font-inter text-[48px] text-midnight ">Explore Our Process</h1>
                <a
                  href="#consultation"
                  className="inline-flex px-4 py-3 bg-midnight text-white rounded-[24px] hover:opacity-90 transition font-inter items-center gap-3"
                >
                  Book a free consultation
                  <img src="/arrow.png" alt="arrow icon" className="bg-secondary rounded-[50%] w-[32px] h-[32px]"/>
                </a>
              </div>
            </div>
            <div className='max-w-[1200px] mt-[50px]  flex items-center justify-between mx-auto gap-[40px] '>
              <div className="w-[360px] relative" id="process-image">
                <img src="/Consultation.png" alt="process image" className="w-full h-full object-cover" />
                <div className="absolute bottom-5 left-5 right-5 bg-midnight p-2 h-38">
                  <div className="flex flex-col items-start text-left">
                    <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-inter font-medium text-[16px] mb-3">
                      01
                    </div>
                    <h3 className="text-barley-white font-inter font-medium text-xl mb-2">Consultation</h3>
                    <p className="text-barley-white font-inter text-sm">Providing legal advice tailored to your specific needs</p>
                  </div>
                </div>
              </div>

              <div className="w-[360px] relative" id="process-image">
                <img src="/Strategy.png" alt="process image" className="w-full h-full object-cover" />
                <div className="absolute bottom-5 left-5 right-5 bg-midnight p-2 h-38">
                  <div className="flex flex-col items-start text-left">
                    <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-inter font-medium text-[16px] mb-3">
                      02
                    </div>
                    <h3 className="text-barley-white font-inter font-medium text-xl mb-2">Strategy & Planning</h3>
                    <p className="text-barley-white font-inter text-sm">Creating a tailored legal strategy to meet your goals</p>
                  </div>
                </div>
              </div>

              <div className="w-[360px] relative" id="process-image">
                <img src="/Execution.png" alt="process image" className="w-full h-full object-cover" />
                <div className="absolute bottom-5 left-5 right-5 bg-midnight p-2 h-38">
                  <div className="flex flex-col items-start text-left">
                    <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-inter font-medium text-[16px] mb-3">
                      01
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
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div className="max-w-[1200px] flex gap-8 relative">
            <div className="flex-1 pt-[120px] sticky top-[0px] self-start pb-[120px]">
              <h5 className="font-inter text-secondary text-sm text-left">
                • LEGAL AUTOMATION • 
              </h5>
              <h2 className="text-midnight font-inter leading-tight text-5xl">
                Fast. Reliable. Lawyer-Crafted Documents at Your Finger Tips
              </h2>
              <h5 className="font-inter text-midnight text-[16px] mt-5">
                From Quit Notices to Tenancy Agreements, NDAs, and more. 
                Generate legally valid documents in minutes. Just fill in your details, make payment, 
                and receive your document signed, stamped, and delivered to your email.
              </h5>
              <a
                href="#consultation"
                className="inline-flex mt-5 px-4 py-3 bg-midnight text-white rounded-[24px] hover:opacity-90 transition font-inter items-center gap-3"
              >
                Get started now
                <img src="/arrow.png" alt="arrow icon" className="bg-secondary rounded-[50%] w-[30px] h-[30px]"/>
              </a>
            </div>

            <div className="flex-1 flex flex-col gap-[68.5px] pt-[120px] pb-[120px]">
              <div>
                <img src="/Justice_Image1.png" alt="Justice Image" className="w-[563px] h-[473px]" />
              </div>
              <div>
                <img src="/Justice_Image2.png" alt="Justice Image" className="w-[563px] h-[473px]" />
              </div>
              <div>
                <img src="/Justice_Image3.png" alt="Justice Image" className="w-[563px] h-[473px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories section */}
        <div className="max-w-[1440px] max-h-[739px] mx-auto px-[120px] py-[104px]">
          <div classNamee="max-w-[1200px] ">
            <h5 className="font-inter text-secondary text-sm">SUCCESS STORIES</h5>
              <h2 className="text-midnight font-inter leading-tight text-5xl">
                Legal Journeys, Real Results
              </h2>
          </div>
          <div classNamee="max-w-[1200px] mt-[64px]">
            <img src="/Quote.png" alt="Quote image" className="w-[64.5px] h-[52.5px] mt-[64px]" />
            <h3 className="font-inter font-[28px] text-midnight pt-[16px] pr-[30px]">
              Supra Montem guided me through a complex property transaction with remarkable clarity and professionalism. 
              Their attention to detail and prompt communication made the entire process seamless. 
              I felt fully supported every step of the way.
            </h3>
            <div className="mt-[48px] flex left gap-[16px]">
                <img src="/Client_image.png" alt="client Image" className=" rounded-full"/>
                <div>
                  <h5 className="text-midnight font-inter text-[20px] font-semibold">Sir O'Kelly</h5>
                  <p className="text-blue-bayoux font-inter text-[16px]">CEO, Venoxe Inc.</p>
                </div>
            </div>


          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-[1440px] max-h-[857.23px] px-[120px] py-[104px] mx-auto bg-midnight">
          <div classNamee="max-w-[1200px]  ">
            <h5 className="font-inter text-barley-white text-sm">•  MEET OUR TEAM • </h5>
              <h2 className="text-barley-white font-inter leading-tight text-5xl mt-[15px]">
                Meet the Experts Behind Your Legal Success
              </h2>
          </div>
          <div className='max-w-[1200px] mt-[50px]  flex items-center justify-between mx-auto gap-[50px] '>
            <div className="w-[360px] relative pb-[50px]" id="process-image">
              <img src="/team1.png" alt="process image" className=" object-cover" />
              <div className="absolute bottom--30 left-0 right-0  bg-barley-white pl-[24px] pb-[24px] pt-[16px] h-[90px]">
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-midnight font-semibold text-2xl font-inter mb-[9px]">Izundu Ukanwa</h3>
                  <h4 className="text-midnight font-inter font-[16px] text-sm">CEO, Senior Attorney</h4>
                </div>
              </div>
            </div>

            <div className="w-[360px] relative pb-[50px]" id="process-image">
              <img src="/advisor.png" alt="process image" className=" object-cover" />
              <div className="absolute bottom--30 left-0 right-0  bg-barley-white pl-[24px] pb-[24px] pt-[16px] h-[90px]">
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-midnight font-semibold text-2xl font-inter mb-[9px]">Seun Ukanwa</h3>
                  <h4 className="text-midnight font-inter font-[16px] text-sm">Senior Legal Advisor</h4>
                </div>
              </div>
            </div>

            <div className="w-[360px] relative pb-[50px]" id="process-image">
              <img src="/expert.png" alt="process image" className=" object-cover" />
              <div className="absolute bottom--30 left-0 right-0  bg-barley-white pl-[24px] pb-[24px] pt-[16px] h-[90px]">
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-midnight font-semibold text-2xl font-inter mb-[9px]">James Roberts</h3>
                  <h4 className="text-midnight font-inter font-[16px] text-sm">Litigation Expert</h4>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Blog Section */}
        <div className="max-w-[1440px] px-[120px] max-h-[915.97px] py-[104px] mx-auto">
          <div classNamee="max-w-[1200px]  ">
            <h5 className="font-inter text-secondary text-sm mb-[11px]">•  BLOG • </h5>
              <h2 className="text-midnight font-inter leading-tight text-5xl mt-[15px]">
                Insights and Updates from the Legal World
              </h2>
          </div>
          <div className='max-w-[1200px] mt-[50px]  flex items-center justify-between mx-auto gap-[40px] '>
            <div className="w-[360px] relative pb-[200px]" id="process-image">
              <img src="/blog3.png" alt="process image" className=" object-cover" />
              <div className="absolute bottom--30 left-0 right-0  pb-[24px] pt-[16px] h-[230px]">
                <div className="flex flex-col items-start ">
                  <h3 className="text-secondary font-[14px] font-inter mb-[3.3px]">Event</h3>
                  <h4 className="text-midnight font-inter font-medium text-[20px] mb-[11.09px]">Unuahia Business Summit: Legal Insights and Impact</h4>
                  <h4 className="text-midnight font-inter  text-sm text-[13px] mb-[16.68px]">From regulatory compliance to business structuring, 
                    this piece unpacks key legal highlights from the UBS event ...
                  </h4>
                <a
                  href="#"
                  className="inline-flex text-matisse font-inter items-center gap-3"
                >
                  Read Full Story
                  <img src="/Vector.png" alt="Vector icon" className=" w-[10px] h-[10px]"/>
                </a>
                </div>
              </div>
            </div>

            <div className="w-[360px] relative pb-[200px]" id="process-image">
              <img src="/blog2.png" alt="process image" className=" object-cover" />
              <div className="absolute bottom--30 left-0 right-0  pb-[24px] pt-[16px] h-[230px]">
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-secondary font-[14px] font-inter mb-[3.3px]">Event</h3>
                  <h4 className="text-midnight font-inter font-medium text-[20px] mb-[11.09px]">Unuahia Business Summit: Legal Insights and Impact</h4>
                  <h4 className="text-midnight font-inter  text-sm text-[13px]  mb-[16.68px]">From regulatory compliance to business structuring, 
                    this piece unpacks key legal highlights from the UBS event ...
                  </h4>
                <a
                  href="#"
                  className="inline-flex text-matisse font-inter items-center gap-3"
                >
                  Read Full Story
                  <img src="/Vector.png" alt="Vector icon" className=" w-[10px] h-[10px]"/>
                </a>
                </div>
              </div>
            </div>

            <div className="w-[360px] relative pb-[200px]" id="process-image">
              <img src="/blog1.png" alt="process image" className=" object-cover" />
              <div className="absolute bottom--30 left-0 right-0  pb-[24px] pt-[16px] h-[230px]">
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-secondary font-[14px] font-inter mb-[3.3px]">Event</h3>
                  <h4 className="text-midnight font-inter font-medium text-[20px] mb-[11.09px]">Unuahia Business Summit: Legal Insights and Impact</h4>
                  <h4 className="text-midnight font-inter  text-sm text-[13px] mb-[16.68px]">From regulatory compliance to business structuring, 
                    this piece unpacks key legal highlights from the UBS event ...
                  </h4>
                <a
                  href="#"
                  className="inline-flex text-matisse font-inter items-center gap-3"
                >
                  Read Full Story
                  <img src="/Vector.png" alt="Vector icon" className=" w-[10px] h-[10px]"/>
                </a>
                </div>
              </div>
            </div>

          </div> 

            <div className=" mt-[64px] mb-[104px] ">
                <button
                type="submit"
                className="inline-flex px-[14px] py-[13.5px] bg-midnight text-barley-white rounded-[24px] hover:opacity-90 transition font-inter items-center gap-3 text-[18px]"
                >
                Load More Updates
                <img src="/arrow.png" alt="arrow icon" className="bg-secondary rounded-[50%] w-[32px] h-[32px]"/>
                </button>
            </div> 
  
        </div>


      </section>
        {/* Reach out section */}
        <ReachOut />

        {/* Footer Section */}
        <Footer />
    </div>
    
  );
}
