import CountUp from '../components/CountUp';

export default function Home() {
  return (
    <section id="Home" className=" w-full py-12">
      <div className="max-w-[1440px] mx-auto px-[120px] flex gap-10 bg-background-primary">
        {/* Left Text Column */}
        <div className="pt-30 flex-1 space-y-6 ">
          <h1 className="font-inter text-6xl text-midnight leading-tight">
            Guiding You from a higher Ground
          </h1>
          <p className="text-midnight text-sm  text-[18px] font-inter">
            At SupraMontem Attorney, we deliver law with clarity, strategy and integrity,
            elevating every client's position through modern, value-driven solutions.
          </p>
          <a
            href="#consultation"
            className="inline-flex mt-2 px-4 py-3 bg-midnight text-white rounded-[24px] hover:opacity-90 transition font-inter items-center gap-3"
          >
            Book a free consultation
            <img src="src/assets/arrow.png" alt="arrow icon" className="bg-secondary rounded-[50%] w-[30px] h-[30px]"/>
          </a>

          {/* Scrolling SUPRA MONTEM */}
            <div className="overflow-hidden  mt-10 mb-10 inline-flex items-center gap-30">
              <img src="src/assets/SUPRAMONTEM SCROLLER.png" className="animate-marquee h-25"/>
              <img src="src/assets/SUPRAMONTEM SCROLLER.png" className="animate-marquee h-25"/>
            </div>

        </div>

        {/* Right CEO Image */}
        <div className="w-[500px] flex justify-end">
          <img
            src="src/assets/ceo.png"
            alt="CEO"
            className="w-full h-full object-cover"
          />
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

      <div className="container bg-midnight  ">
        <div className=" pt-[104px] pb-[104px] pl-[180px] pr-[180px]">
          <h5 className="font-inter text-barley-white text-[14px] text-left">
            • PRACTICE AREAS • 
          </h5>
          <h2 className="font-inter text-barley-white text-[48px] text-left">Expert Legal Services Tailored to Your Needs</h2>

          <div className="flex justify-between gap-20 pt-[80px]" id="practice-cta">
            <ul className="text-barley-white text-left">
              <li className="pt-[48px]">
                <a href="/arbitration-adr" className="practice-cta">
                  <span>Arbitration ADR</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/competition" className="practice-cta">
                  <span>Competition</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/corporate" className="practice-cta">
                  <span>Corporate</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/corporate" className="practice-cta">
                  <span>Derivatives</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/corporate" className="practice-cta">
                  <span>Environmental</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/corporate" className="practice-cta">
                  <span>Intellectual Property</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/corporate" className="practice-cta">
                  <span>Investigations</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/corporate" className="practice-cta">
                  <span>Litigations</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/corporate" className="practice-cta">
                  <span>Tax</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
            </ul>
            <ul className="text-barley-white text-left">
              <li className="pt-[48px]">
                <a href="/employment" className="practice-cta">
                  <span>Capital Markets</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/litigation" className="practice-cta">
                  <span>Compliance ESG</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/real-estate" className="practice-cta">
                  <span>Data Protection</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/litigation" className="practice-cta">
                  <span>Employment</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/litigation" className="practice-cta">
                  <span>Foreign Investments</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/litigation" className="practice-cta">
                  <span>Insolvency</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/litigation" className="practice-cta">
                  <span>Lendings</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/litigation" className="practice-cta">
                  <span>Mergers and Acquisitions</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
              <li className="pt-[48px]">
                <a href="/litigation" className="practice-cta">
                  <span>White Collar</span>
                  <img src="src/assets/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container bg-aqua-haze">
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
      <div className="max-w-[1440px] mx-auto  max-h-[656.97px]">
        <div className="pt-[120px] px-[120px]">
          <div className="max-w-[1200px] mx-auto">
            <h5 className="text-secondary font-[14px] font-inter">• Our Process •</h5>
            <div className="flex justify-between items-center" id='Explore-Process'>
              <h1 className="font-inter text-[48px] text-midnight ">Explore Our Process</h1>
              <a
                href="#consultation"
                className="inline-flex px-4 py-3 bg-midnight text-white rounded-[24px] hover:opacity-90 transition font-inter items-center gap-3"
              >
                Book a free consultation
                <img src="src/assets/arrow.png" alt="arrow icon" className="bg-secondary rounded-[50%] w-[32px] h-[32px]"/>
              </a>
            </div>
          </div>
          <div className='max-w-[1200px] mt-[50px]  flex items-center justify-between mx-auto gap-[40px] '>
            <div className=" w-[360px]  " id="process-image">
            <img src="src/assets/consultation.png" alt="process image" className="" />
            </div>
            <div className=" w-[360px]" id="process-image ">
            <img src="src/assets/consultation.png" alt="process image" className=" " />
            </div>
            <div className=" w-[360px]" id="process-image ">
            <img src="src/assets/consultation.png" alt="process image" className=" " />
            </div>
          </div>

        </div>
      </div>


    </section>
    
    
  );
}
