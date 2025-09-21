import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure as="nav" className="fixed top-0 w-full xs:px-5 sm:px-10 md:px-15 lg:px-20 xl:px-25 2xl:px-30 bg-white z-50 xs:shadow-md md:shadow-none">
      {() => (
        <>
          {/* Main Navbar Container */}
          <div className="mx-auto py-[24px] xl:py-[24px] h-[74px]">
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
              <div className="hidden md:flex md:space-x-4 lg:space-x-6 xl:space-x-8">
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
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
                  {isOpen ? (
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <img src="/HamNav.png" alt="menu" className="h-5 w-5 sm:h-6 sm:w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          {isOpen && (
            <div className="md:hidden bg-white border-t border-grey">
              <div className="px-4 pt-1 pb-1 space-y-1">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-1 font-inter text-secondary hover:text-secondary transition-colors font-medium text-base"
                >
                  Home
                </Link>
                <Link
                  to="/practice-areas"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-1 font-inter text-primary hover:text-secondary transition-colors text-base"
                >
                  Practice Areas
                </Link>
                <a
                  href="#legal-automation"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-1 font-inter text-primary hover:text-secondary transition-colors text-base"
                >
                  Legal Automation
                </a>
                <Link
                  to="/Blog"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-1 font-inter text-primary hover:text-secondary transition-colors text-base"
                >
                  Blog
                </Link>
                <Link
                  to="/Contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-1 font-inter text-primary hover:text-secondary transition-colors text-base"
                >
                  Contact
                </Link>
                
                {/* Mobile WhatsApp Contact */}
                <div className=" border-t border-grey pt-2 mt-2">
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
