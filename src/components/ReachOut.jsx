import ActionButton from "./ActionButton";

export default function ReachOut() {
  return (
      <div className="max-w-full relative container">
          <div className="py-8 md:py-14 xl:py-20 2xl:py-[104px] lg:pr-[120px]  xl:pr-[200px] 2xl:pr-[280px]">
            <h5 className="section-name">• REACH OUT •</h5>
            <div className="flex flex-col gap-6  lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-auto" id='Explore-Process'>
              <h1 className="flex-1 font-inter font-normal text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[45px] 2xl:text-5xl xl:flex-1 lg:leading-[62.4px]">Secure your Rights with Expert Legal Support</h1>
              <ActionButton label="Book free consultation" href="" className=" w-[237px] md:w-[257px] md:gap-6 h-auto lg:w-auto" />
            </div>
          </div>
      </div>

  );}