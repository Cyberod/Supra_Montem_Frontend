import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure as="nav" className="fixed top-0 w-full bg-white z-50 shadow-sm">
      {() => (
        <>
          {/* Main Navbar Container */}
          <div className=" max-w-[375px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px] mx-auto px-[20px] sm:px-6 md:px-8 lg:px-16 xl:px-[120px] py-[24px] xl:py-[24px] h-[74px] sm:h-[68px] md:h-[72px] lg:h-[76px] xl:h-[80px]">
            <div className="flex items-center justify-between h-full ">
              
              {/* Logo */}
              <div className="flex items-center flex-shrink-0">
                <Link to="/">
                  <img 
                    src="/Logo+Menu.png" 
                    alt="Company Logo" 
                    className="h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 w-auto"
                  /> 
                </Link>
              </div>

              {/* Desktop Navigation Links - Hidden on mobile/tablet */}
              <div className="hidden lg:flex lg:space-x-6 xl:space-x-8">
                <Link
                  to="/"
                  className="font-inter text-secondary hover:text-secondary transition-colors font-medium text-sm lg:text-base"
                >
                  Home
                </Link>
                <Link
                  to="/practice-areas"
                  className="font-inter text-primary hover:text-secondary transition-colors text-sm lg:text-base"
                >
                  Practice Areas
                </Link>
                <a
                  href="#legal-automation"
                  className="font-inter text-primary hover:text-secondary transition-colors text-sm lg:text-base"
                >
                  Legal Automation
                </a>
                <Link
                  to="/Blog"
                  className="font-inter text-primary hover:text-secondary transition-colors text-sm lg:text-base"
                >
                  Blog
                </Link>
                <Link
                  to="/Contact"
                  className="font-inter text-primary hover:text-secondary transition-colors text-sm lg:text-base"
                >
                  Contact
                </Link>
              </div>

              {/* WhatsApp Contact - Hidden on mobile, shown on tablet+ */}
              <div className="hidden md:flex">
                <a
                  href="https://wa.me/+234-7035786703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary flex items-center space-x-2 transition-colors"
                >
                  <img 
                    src="/whatsapp-Icon.png" 
                    alt="WhatsApp"
                    className="h-4 w-4 md:h-5 md:w-5"
                  />
                  <span className="font-inter text-xs md:text-sm lg:text-base hidden lg:block">+234-7035786703</span>
                </a>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary transition-colors"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <img src="/HamNav.png" alt="menu" className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t border-grey">
              <div className="px-4 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 font-inter text-secondary hover:text-secondary transition-colors font-medium text-base"
                >
                  Home
                </Link>
                <Link
                  to="/practice-areas"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 font-inter text-primary hover:text-secondary transition-colors text-base"
                >
                  Practice Areas
                </Link>
                <a
                  href="#legal-automation"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 font-inter text-primary hover:text-secondary transition-colors text-base"
                >
                  Legal Automation
                </a>
                <Link
                  to="/Blog"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 font-inter text-primary hover:text-secondary transition-colors text-base"
                >
                  Blog
                </Link>
                <Link
                  to="/Contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 font-inter text-primary hover:text-secondary transition-colors text-base"
                >
                  Contact
                </Link>
                
                {/* Mobile WhatsApp Contact */}
                <div className="border-t border-grey pt-3 mt-3">
                  <a
                    href="https://wa.me/+234-7035786703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 text-primary hover:text-secondary transition-colors"
                  >
                    <img src="/whatsapp-Icon.png" alt="WhatsApp" className="h-5 w-5 mr-3"/>
                    <span className="font-inter text-base">+234-7035786703</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Disclosure>
  );
}
