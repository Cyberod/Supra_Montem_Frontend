import {Link} from "react-router-dom";

export default function AppointmentButton() {
  return (
            <Link
              to="/contact"
              className="inline-flex mt-6 px-3 py-2 xl:px-4 xl:py-3 bg-midnight text-barley-white rounded-[24px] hover:opacity-90 transition font-inter items-center gap-2 text-base text-[14px] xl:gap-3 xl:text-[16px] xl:ml-0 xl:mt-2"
            >
              Book a free consultation
            <div className="bg-secondary rounded-[50%] w-[20px] h-[20px] xl:w-[30px] xl:h-[30px]">
              <img src="/arrow.svg" alt="arrow icon" className="w-[10px] h-[10px] ml-1 mt-1 xl:w-[20px] xl:h-[20px] xl:mt-1 xl:ml-1"/>
            </div>
            </Link>
    );}