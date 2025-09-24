import { NavLink } from 'react-router-dom';


export default function Footer() {
  return (
      <div className="max-w-full container bg-midnight  h-auto py-[40px] lg:pb-[124px] ">
        <div className="  flex flex-col gap-8 text-white lg:pt-8  lg:px-[40px] lg:flex lg:flex-row lg:space-x-0">
            {/* Logo */}
            <div className="flex flex-col">
                <img src="/LightLogo.png" alt="SupraMontem Logo" className="w-[143px] h-[24px] lg:w-[149.4px] lg:h-[32px]" />
                <p className="mt-6 text-xs font-inter text-grey font-normal text-left lg:mt-[32px] lg:text-[14px] lg:max-w-[400px]">
                    Supramontem is a trusted law firm with 20+ years of 
                    experience, offering expert legal services in criminal defense, family law, and estate planning.
                </p>
            </div>


            {/* Pages and Social side by side */}
            <div className="flex gap-8 lg:justify-between lg:gap-[8px]">
                {/* Pages Column */}
                <div className="flex flex-col flex-1 lg:w-[200px]">
                    <h3 className="font-semibold font-inter text-grey">Pages</h3>
                    <div className="mt-6 flex flex-col gap-4 xl:mt-[32px] xl:gap-[16px]">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) =>
                        `text-base font-inter ${
                            isActive ? 'text-secondary' : 'text-grey hover:text-secondary'
                        } transition xl:text-[14px]`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/practice-areas" 
                        className={({ isActive }) =>
                        `text-base font-inter ${
                            isActive ? 'text-secondary' : 'text-grey hover:text-secondary'
                        } transition xl:text-[14px]`
                        }
                    >
                        Practice Area
                    </NavLink>
                    <NavLink 
                        to="/legal-automation" 
                        className={({ isActive }) =>
                        `text-base font-inter ${
                            isActive ? 'text-secondary' : 'text-grey hover:text-secondary'
                        } transition xl:text-[14px]`
                        }
                    >
                        Legal Automation
                    </NavLink>
                    <NavLink 
                        to="/blog" 
                        className={({ isActive }) =>
                        `text-base font-inter ${
                            isActive ? 'text-secondary' : 'text-grey hover:text-secondary'
                        } transition xl:text-[14px]`
                        }
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) =>
                        `text-base font-inter ${
                            isActive ? 'text-secondary' : 'text-grey hover:text-secondary'
                        } transition xl:text-[14px]`
                        }
                    >
                        Contact
                    </NavLink>
                    </div>
                </div>

                {/* Social Column */}
                <div className="flex flex-col flex-1 xl:w-[200px]">
                    <h3 className="font-semibold font-inter text-grey">Social</h3>
                    <div className="mt-6 flex flex-col gap-4 xl:mt-[32px] xl:gap-[16px]">
                        <a href="#" className="flex  gap-2 text-base font-inter text-grey hover:text-secondary transition xl:gap-[8px] xl:text-[14px]">
                            <img src="/instagram.svg" alt="Instagram" className="w-4 h-4 xl:w-[20px] mt-1 xl:h-[20px]" />
                            Instagram
                        </a>
                        <a href="#" className="flex  gap-2 text-base font-inter text-grey hover:text-secondary transition xl:gap-[8px] xl:text-[14px]">
                            <img src="/twitter.svg" alt="Twitter" className="w-4 h-4 xl:w-[20px] mt-1 xl:h-[20px]" />
                            Twitter (X)
                        </a>
                        <a href="#" className="flex  gap-2 text-base font-inter text-grey hover:text-secondary transition xl:gap-[8px] xl:text-[14px]">
                            <img src="/linkedin.svg" alt="LinkedIn" className="w-4 h-4 xl:w-[20px] mt-1 xl:h-[20px]" />
                            LinkedIn
                        </a>
                        <a href="#" className="flex  gap-2 text-base font-inter text-grey hover:text-secondary transition xl:gap-[8px] xl:text-[14px]">
                            <img src="/facebook.svg" alt="Facebook" className="w-4 h-4 xl:w-[20px] mt-1 xl:h-[20px]" />
                            Facebook
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Us Column */}
            <div className="flex flex-col xl:w-[200px] xl:pr-0">
                <h3 className="font-semibold font-inter text-grey">Contact Us</h3>
                <div className="mt-6 flex flex-col gap-3 xl:mt-[32px] xl:gap-[10px]">
                    <p className="text-base font-inter text-grey xl:text-[14px]">+234-7035786703</p>
                    <p className="text-base font-inter text-grey xl:text-[14px]">info@supramontem.com</p>
                    <p className="text-base font-inter text-grey xl:text-[14px]">1 Bende Road, Umu Obasi, Umuahia 440234, Abia</p>
                </div>
            </div>
        </div>
        
        {/* Horizontal line and bottom content */}
        <div className="text-white mt-8 lg:px-[40px] lg:mt-[40px]">
            <hr className="w-[335px] lg:w-full" />
            <div className="flex flex-col gap-4 pt-6 lg:flex lg:flex-row lg:items-center lg:justify-between lg:pt-[24px]">
                <div className="flex gap-6 lg:inline-flex lg:items-center lg:gap-8">
                    <p className=" font-inter text-grey text-base lg:text-xs xl:text-base">
                        Terms & Conditions
                    </p>
                    <p className=" font-inter text-grey text-base lg:text-xs xl:text-base">
                        Privacy policy
                    </p>
                </div>
                <div>
                    <p className=" font-inter text-grey lg:text-center text-base lg:text-xs xl:text-base">
                        © 2025 Supramontem Attorneys. All rights reserved. 
                    </p>
                </div>
            </div>

        {/* Footer Montem Scroller */}

        <div className=" max-w-full overflow-hidden inline-flex lg:gap-50 gap-20 h-auto relatve mt-[28px] lg:mt-[87px]">
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee2 oject-cover max-w-[1248px] h-auto lg:max-w-[1833px] "/>
            {/* Fade overlay for left side */}

        </div>
        </div>




      </div>
);}
