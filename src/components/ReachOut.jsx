import AppointmentButton from '../components/AppointmentButton';

export default function ReachOut() {
  return (
      <div className="max-w-[375px] mx-auto px-5 py-10 bg-aqua-haze xl:max-w-[1440px] xl:h-[347.58px] xl:px-[120px] xl:py-[104px]">
          <div className="xl:max-w-[918.06px]">
            <h5 className="text-secondary font-inter text-xs xl:text-sm">• REACH OUT •</h5>
            <div className="flex flex-col gap-6 mt-4 xl:flex xl:flex-row xl:justify-between xl:items-center xl:gap-[124px] xl:mt-0" id='Explore-Process'>
              <h1 className="font-inter text-2xl text-midnight xl:text-[48px] xl:flex-1">Secure your Rights with Expert Legal Support</h1>
            <AppointmentButton/>
            </div>
          </div>
      </div>

  );}