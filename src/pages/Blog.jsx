import Navbar from '../components/Navbar';
import ReachOut from '../components/ReachOut';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";


export default function Blog() {

  return (
    <div className="min-h-screen">
      <Navbar />
      
      
      <div className="max-w-[1440px]  mt-[80px] mb-[104px]">
        <div className="h-[347.58px] bg-aqua-haze flex flex-col items-center justify-center">
            <h5 className="font-inter text-secondary text-sm mb-[11px]">•  BLOG • </h5>
            <h1 className="font-inter text-[48px] text-midnight text-center">
            Insights and Updates from the Legal World
            </h1>        
        </div>
        <div className='px-[120px] mt-[104px]  mx-auto '>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
                <div className="relative pb-[200px]" id="process-image">
                <img src="/blog3.png" alt="process image" className=" object-cover" />
                <div className="absolute bottom--30 left-0 right-0  pb-[24px] pt-[16px] h-[230px]">
                    <div className="flex flex-col items-start text-left">
                    <h3 className="text-secondary font-[14px] font-inter mb-[3.3px]">EVENT</h3>
                    <h4 className="text-midnight font-inter font-medium text-[20px] mb-[11.09px]">Unuahia Business Summit: Legal Insights and Impact</h4>
                    <h4 className="text-midnight font-inter  text-sm text-[13px] mb-[16.68px]">From regulatory compliance to business structuring, 
                        this piece unpacks key legal highlights from the UBS event ...
                    </h4>
                    <Link
                    to="/blog/10-key-questions-to-ask-before-hiring-a-law-firm"
                    className="inline-flex text-matisse font-inter items-center gap-3"
                    >
                    Read Full Story
                    <img src="/Vector.png" alt="Vector icon" className=" w-[10px] h-[10px]"/>
                    </Link>
                    </div>
                </div>
                </div>

                <div className="relative pb-[200px]" id="process-image">
                <img src="/blog2.png" alt="process image" className=" object-cover" />
                <div className="absolute bottom--30 left-0 right-0  pb-[24px] pt-[16px] h-[230px]">
                    <div className="flex flex-col items-start text-left">
                    <h3 className="text-secondary font-[14px] font-inter mb-[3.3px]">EVENT</h3>
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

                <div className="relative pb-[200px]" id="process-image">
                <img src="/blog1.png" alt="process image" className=" object-cover" />
                <div className="absolute bottom--30 left-0 right-0  pb-[24px] pt-[16px] h-[230px]">
                    <div className="flex flex-col items-start text-left">
                    <h3 className="text-secondary font-[14px] font-inter mb-[3.3px]">EVENT</h3>
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

            <div className="text-center mt-[64px] mb-[104px]">
                <button
                type="submit"
                className="inline-flex px-[14px] py-[13.5px] bg-midnight text-barley-white rounded-[24px] hover:opacity-90 transition font-inter items-center gap-3 text-[18px]"
                >
                Load More Updates
                <img src="/arrow.png" alt="arrow icon" className="bg-secondary rounded-[50%] w-[32px] h-[32px]"/>
                </button>
            </div> 
        </div> 
       
      </div>
        <ReachOut />
        <Footer />
    </div>
  );}
