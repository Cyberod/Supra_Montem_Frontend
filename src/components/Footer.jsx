export default function Footer() {
  return (
      <div className="max-w-[1440px] h-[685.14px] px-[120px] pb-[28px] pt-[64px] bg-midnight">
        <div className="max-w-[1200px] px-[40px] text-white flex space-x-0 ">
            {/* Left Part */}
            <div className="flex flex-col  ">
                <img src="/LightLogo.png" alt="SupraMontem Logo" className="w-[149.4px] h-[32px]" />
                <p className="mt-[32px] text-[14px] font-inter text-grey max-w-[400px] font-normal">
                    Supramontem is a trusted law firm with 20+ years of 
                    experience, offering expert legal services in 
                    criminal defense, family law, and estate 
                    planning.
                </p>
            </div>

            {/* Right Part */}
            <div className="flex justify-between gap-[8px] ">
                {/* Pages Column */}
                <div className="flex flex-col w-[200px]">
                    <h3 className="font-semibold font-inter text-grey">Pages</h3>
                    <div className="mt-[32px] flex flex-col gap-[16px]">
                        <a href="#" className="text-[14px] font-inter text-secondary hover:text-secondary transition">Home</a>
                        <a href="#" className="text-[14px] font-inter text-grey hover:text-secondary transition">Practice Area</a>
                        <a href="#" className="text-[14px] font-inter text-grey hover:text-secondary transition">Legal Automation</a>
                        <a href="#" className="text-[14px] font-inter text-grey hover:text-secondary transition">Blog</a>
                        <a href="#" className="text-[14px] font-inter text-grey hover:text-secondary transition">Contact</a>
                    </div>
                </div>

                {/* Social Column */}
                <div className="flex flex-col w-[200px]">
                    <h3 className="font-semibold font-inter text-grey">Social</h3>
                    <div className="mt-[32px] flex flex-col gap-[16px]">
                        <a href="#" className="flex items-center gap-[8px] text-[14px] font-inter text-grey hover:text-secondary transition">
                            <img src="/instagram.svg" alt="Instagram" className="w-[20px] h-[20px]" />
                            Instagram
                        </a>
                        <a href="#" className="flex items-center gap-[8px] text-[14px] font-inter text-grey hover:text-secondary transition">
                            <img src="/twitter.svg" alt="Twitter" className="w-[20px] h-[20px]" />
                            Twitter (X)
                        </a>
                        <a href="#" className="flex items-center gap-[8px] text-[14px] font-inter text-grey hover:text-secondary transition">
                            <img src="/linkedin.svg" alt="LinkedIn" className="w-[20px] h-[20px]" />
                            LinkedIn
                        </a>
                        <a href="#" className="flex items-center gap-[8px] text-[14px] font-inter text-grey hover:text-secondary transition">
                            <img src="/facebook.svg" alt="Facebook" className="w-[20px] h-[20px]" />
                            Facebook
                        </a>
                    </div>
                </div>

                {/* Contact Us Column */}
                <div className="flex flex-col w-[200px] pr-0">
                    <h3 className="font-semibold font-inter text-grey">Contact Us</h3>
                    <div className="mt-[32px] flex flex-col gap-[10px]">
                        <p className="text-[14px] font-inter text-grey">+234-7035786703</p>
                        <p className="text-[14px] font-inter text-grey">info@supramontem.com</p>
                        <p className="text-[14px] font-inter text-grey">1 Bende Road, Umu Obasi, Umuahia 440234, Abia</p>
                    </div>
                </div>
            </div>
        
        </div>
        <div className="max-w-[1200px] px-[40px] text-white mt-[40px]">
            <hr />
            <div className=" flex items-center justify-between pt-[24px]">
                <div className="inline-flex items-center gap-8">
                    <p className="text-center text-[16px] font-inter text-grey mt-[24px]">
                        Terms & Conditions
                    </p>
                    <p className="text-center text-[16px] font-inter text-grey mt-[24px]">
                        Privacy policy
                    </p>
                </div>
                <div>
                    <p className="text-center text-[16px] font-inter text-grey mt-[24px]">
                        © 2025 Supramontem Attorneys. All rights reserved. Built by Jay-Tech Solutions.
                    </p>
                </div>
            </div>


        </div>

        <div className=" max-w-[1120px] overflow-hidden inline-flex gap-200  absolute pt-[87px] pb-[88.57] mb-[28px]">
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee max-w-[1833px] h-[94px]"/>
            <img src="/FOOTER_MONTEM_ATTORNEYS.png" alt="SUPRAMONTEM" className="animate-marquee max-w-[1833px] h-[94px]"/>

        </div>

      </div>

  );}