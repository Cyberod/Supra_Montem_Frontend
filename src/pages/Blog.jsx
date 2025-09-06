import Navbar from '../components/Navbar';
import ReachOut from '../components/ReachOut';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";


export default function Blog() {

  return (
    <div className="min-h-screen">
      <Navbar />
      
      
      <div className="max-w-[375px] mx-auto mt-10 mb-16 xl:max-w-[1440px] xl:mt-[80px] xl:mb-[104px]">
        <div className="h-32 bg-aqua-haze flex flex-col items-center justify-center px-5 xl:h-[347.58px] xl:px-0">
            <h5 className="font-inter text-secondary text-xs mb-4 xl:text-sm xl:mb-[11px]">•  BLOG • </h5>
            <h1 className="font-inter text-2xl text-midnight text-center xl:text-[48px]">
            Insights and Updates from the Legal World
            </h1>        
        </div>
        <div className='max-w-[375px] mx-auto px-5 mt-8 xl:max-w-[1200px] xl:mt-[104px] xl:px-0'>
            <div className="flex flex-col gap-8 xl:grid xl:grid-cols-1 xl:md:grid-cols-2 xl:lg:grid-cols-3 xl:gap-[40px]">
                <div className="bg-white overflow-hidden">
                    <img src="/blog3.png" alt="process image" className="w-full h-[200px] object-cover" />
                    <div className="p-5 xl:py-7">
                        <h3 className="text-secondary text-base font-medium font-inter mb-1 xl:text-[14px] xl:mb-[3.3px]">EVENT</h3>
                        <h4 className="text-midnight font-inter font-medium text-lg mb-2 xl:text-[24px] xl:mb-[11.09px]">Unuahia Business Summit: Legal Insights and Impact</h4>
                        <h4 className="text-midnight font-inter text-sm mb-4 xl:mb-[16.68px]">From regulatory compliance to business structuring, 
                            this piece unpacks key legal highlights from the UBS event ...
                        </h4>
                        <Link
                        to="/blog/10-key-questions-to-ask-before-hiring-a-law-firm"
                        className="inline-flex text-matisse font-inter items-center gap-2 text-sm xl:gap-3 xl:text-base"
                        >
                        Read More
                        <img src="/Vector.png" alt="Vector icon" className="w-[10px] h-[10px]"/>
                        </Link>
                    </div>
                </div>

                <div className="bg-white overflow-hidden">
                    <img src="/blog2.png" alt="process image" className="w-full h-[200px] object-cover" />
                    <div className="p-5 xl:py-7">
                        <h3 className="text-secondary text-base font-medium font-inter mb-1 xl:text-[14px] xl:mb-[3.3px]">EVENT</h3>
                        <h4 className="text-midnight font-inter font-medium text-lg mb-2 xl:text-[24px] xl:mb-[11.09px]">Unuahia Business Summit: Legal Insights and Impact</h4>
                        <h4 className="text-midnight font-inter text-sm mb-4 xl:mb-[16.68px]">From regulatory compliance to business structuring, 
                            this piece unpacks key legal highlights from the UBS event ...
                        </h4>
                        <a
                        href="#"
                        className="inline-flex text-matisse font-inter items-center gap-2 text-sm xl:gap-3 xl:text-base"
                        >
                        Read More
                        <img src="/Vector.png" alt="Vector icon" className="w-[10px] h-[10px]"/>
                        </a>
                    </div>
                </div>

                <div className="bg-white overflow-hidden">
                    <img src="/blog1.png" alt="process image" className="w-full h-[200px] object-cover" />
                    <div className="p-5 xl:py-7">
                        <h3 className="text-secondary text-base font-medium font-inter mb-1 xl:text-[14px] xl:mb-[3.3px]">EVENT</h3>
                        <h4 className="text-midnight font-inter font-medium text-lg mb-2 xl:text-[24px] xl:mb-[11.09px]">Unuahia Business Summit: Legal Insights and Impact</h4>
                        <h4 className="text-midnight font-inter text-sm mb-4 xl:mb-[16.68px]">From regulatory compliance to business structuring, 
                            this piece unpacks key legal highlights from the UBS event ...
                        </h4>
                        <a
                        href="#"
                        className="inline-flex text-matisse font-inter items-center gap-2 text-sm xl:gap-3 xl:text-base"
                        >
                        Read More
                        <img src="/Vector.png" alt="Vector icon" className="w-[10px] h-[10px]"/>
                        </a>
                    </div>
                </div>

            </div>

            <div className="text-center mt-8 xl:mt-[80px]">
                <button
                type="submit"
                className="inline-flex px-3 py-2 bg-midnight text-barley-white rounded-[24px] hover:opacity-90 transition font-inter items-center gap-3 text-sm xl:px-[14px] xl:py-[13.5px] xl:text-[18px]"
                >
                Load more
                <img src="/arrow.png" alt="arrow icon" className="bg-secondary rounded-[50%] w-[30px] h-[30px] xl:w-[32px] xl:h-[32px]"/>
                </button>
            </div> 
        </div> 
       
      </div>
        <ReachOut />
        <Footer />
    </div>
  );}
