export default function Footer() {
  return (
      <div className="max-w-[375px] mx-auto px-5 py-10 bg-midnight relative xl:max-w-[1440px] xl:h-[685.14px] xl:px-[120px] xl:pb-[28px] xl:pt-[64px]">
        <div className="flex flex-col gap-8 text-white xl:max-w-[1200px] xl:px-[40px] xl:flex xl:flex-row xl:space-x-0">
            {/* Logo */}
            <div className="flex flex-col">
                <img src="/LightLogo.png" alt="SupraMontem Logo" className="w-[143px] h-[24px] xl:w-[149.4px] xl:h-[32px]" />
                <p className="mt-6 text-xs font-inter text-grey font-normal text-left xl:mt-[32px] xl:text-[14px] xl:max-w-[400px]">
                    Supramontem is a trusted law firm with 20+ years of 
                    experience, offering expert legal services in criminal defense, family law, and estate planning.
                </p>
            </div>


            {/* Pages and Social side by side */}
            <div className="flex gap-8 xl:justify-between xl:gap-[8px]">
                {/* Pages Column */}
                <div className="flex flex-col flex-1 xl:w-[200px]">
                    <h3 className="font-semibold font-inter text-grey">Pages</h3>
                    <div className="mt-6 flex flex-col gap-4 xl:mt-[32px] xl:gap-[16px]">
                        <a href="#" className="text-xs font-inter text-secondary hover:text-secondary transition xl:text-[14px]">Home</a>
                        <a href="#" className="text-xs font-inter text-grey hover:text-secondary transition xl:text-[14px]">Practice Area</a>
                        <a href="#" className="text-xs font-inter text-grey hover:text-secondary transition xl:text-[14px]">Legal Automation</a>
                        <a href="#" className="text-xs font-inter text-grey hover:text-secondary transition xl:text-[14px]">Blog</a>
                        <a href="#" className="text-xs font-inter text-grey hover:text-secondary transition xl:text-[14px]">Contact</a>
                    </div>
                </div>

                {/* Social Column */}
                <div className="flex flex-col flex-1 xl:w-[200px]">
                    <h3 className="font-semibold font-inter text-grey">Social</h3>
                    <div className="mt-6 flex flex-col gap-4 xl:mt-[32px] xl:gap-[16px]">
                        <a href="#" className="flex items-center gap-2 text-xs font-inter text-grey hover:text-secondary transition xl:gap-[8px] xl:text-[14px]">
                            <img src="/instagram.svg" alt="Instagram" className="w-4 h-4 xl:w-[20px] xl:h-[20px]" />
                            Instagram
                        </a>
                        <a href="#" className="flex items-center gap-2 text-xs font-inter text-grey hover:text-secondary transition xl:gap-[8px] xl:text-[14px]">
                            <img src="/twitter.svg" alt="Twitter" className="w-4 h-4 xl:w-[20px] xl:h-[20px]" />
                            Twitter (X)
                        </a>
                        <a href="#" className="flex items-center gap-2 text-xs font-inter text-grey hover:text-secondary transition xl:gap-[8px] xl:text-[14px]">
                            <img src="/linkedin.svg" alt="LinkedIn" className="w-4 h-4 xl:w-[20px] xl:h-[20px]" />
                            LinkedIn
                        </a>
                        <a href="#" className="flex items-center gap-2 text-xs font-inter text-grey hover:text-secondary transition xl:gap-[8px] xl:text-[14px]">
                            <img src="/facebook.svg" alt="Facebook" className="w-4 h-4 xl:w-[20px] xl:h-[20px]" />
                            Facebook
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Us Column */}
            <div className="flex flex-col xl:w-[200px] xl:pr-0">
                <h3 className="font-semibold font-inter text-grey">Contact Us</h3>
                <div className="mt-6 flex flex-col gap-3 xl:mt-[32px] xl:gap-[10px]">
                    <p className="text-xs font-inter text-grey xl:text-[14px]">+234-7035786703</p>
                    <p className="text-xs font-inter text-grey xl:text-[14px]">info@supramontem.com</p>
                    <p className="text-xs font-inter text-grey xl:text-[14px]">1 Bende Road, Umu Obasi, Umuahia 440234, Abia</p>
                </div>
            </div>
        </div>
        
        {/* Horizontal line and bottom content */}
        <div className="text-white mt-8 xl:max-w-[1200px] xl:px-[40px] xl:mt-[40px]">
            <hr className="w-[335px] xl:w-full" />
            <div className="flex flex-col gap-4 pt-6 xl:flex xl:flex-row xl:items-center xl:justify-between xl:pt-[24px]">
                <div className="flex gap-6 xl:inline-flex xl:items-center xl:gap-8">
                    <p className="text-xs font-inter text-grey xl:text-[16px] xl:mt-[24px]">
                        Terms & Conditions
                    </p>
                    <p className="text-xs font-inter text-grey xl:text-[16px] xl:mt-[24px]">
                        Privacy policy
                    </p>
                </div>
                <div>
                    <p className="text-xs font-inter text-grey xl:text-center xl:text-[16px] xl:mt-[24px]">
                        © 2025 Supramontem Attorneys. All rights reserved. Built by Jay-Tech Solutions.
                    </p>
                </div>
            </div>


        </div>

        {/* Footer Montem Scroller */}
{/*         <div className="w-[335px] h-16 overflow-hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:max-w-[1000px] xl:h-[94px] xl:inline-flex xl:gap-200 xl:pt-[87px] xl:pb-[88.57] xl:mb-[28px] xl:static xl:left-auto xl:transform-none xl:translate-x-0">
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee w-[1248px] h-16 xl:max-w-[1833px] xl:h-[94px]"/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee w-[1248px] h-16 xl:max-w-[1833px] xl:h-[94px]"/>
        </div> */}
{/*         <div className=" max-w-[1000px] overflow-hidden inline-flex gap-200  absolute pt-[87px] pb-[88.57]  mb-[28px]">
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee max-w-[1833px] h-[94px]"/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee max-w-[1833px] h-[94px]"/>

        </div> */}

      </div>
);}
