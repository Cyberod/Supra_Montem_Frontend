import Navbar from '../components/Navbar';
import ReachOut from '../components/ReachOut';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import ActionButton from '../components/ActionButton';


export default function Blog() {

  return (
    <div className="min-h-screen">
      <Navbar />

      <section id="practice-area" className="w-full  pt-[74px]">
      {/* Topic Section */}
        <div className="max-w-full bg-aqua-haze container lg:py-[104px] py-10">
          <div className="text-center  px-5  container">
            <h5 className="section-name text-center">• BLOG •</h5>
            <h1 className="font-inter lg:font-normal font-medium text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-[39.2px] tracking-[1.12px] md:leading-[62.4px] md:tracking-[1.92px]">
                Insights and Updates from the Legal World
            </h1>
          </div>
        </div>
        <div className="max-w-full container lg:py-[104px] pt-[40px]">

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
                  Umuahia Business Summit: Legal Insights and Impact
                </h3>
                <p className="text-blue-bayoux font-inter text-sm sm:text-xl lg:text-base mb-4 line-clamp-3">
                  From regulatory compliance to business structuring, this piece unpacks key legal highlights from the UBS event...
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
                  How Law Firms Help Resolve Disputes 
                </h3>
                <p className="text-blue-bayoux font-inter text-sm sm:text-xl lg:text-base mb-4 line-clamp-3">
                  Family-related legal issues are often sensitive and emotionally charged. From marriage and divorce to child custody and...         </p>
                <a
                  href="/blog/how-law-firms-help-resolves-disputes"
                  className="full-story inline-flex text-matisse font-inter font-medium items-center text-sm sm:text-xl lg:text-base gap-3 "
                >
                  Read Full Story
                  <img src="/blue_arrow.svg" alt="arrow-icon" className='w-[10px] h-[10px] stroke-[1.5px]' />
                </a>
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
          
          <div className="  text-center mt-16 mb-10 lg:mb-0">
              <ActionButton label="Load More Updates" href="" />

          </div>

        </div>
        <ReachOut />
        <Footer />
      </section>

    </div>
  );}
