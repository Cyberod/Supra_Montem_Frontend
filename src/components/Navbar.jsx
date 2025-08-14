import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full bg-white z-50">
      {() => (
        <div className="max-w-[1440px] mx-auto px-[120px] py-[24px] h-[80px] flex items-center justify-between">
          {/* Left: Logo & Company Name */}
          <div className="flex items-center space-x-3">
            <img src="src/assets/Logo+Menu.png" alt="Company Logo"/>
          </div>

          {/* Center: Navbar Links */}
          <div className="flex space-x-8">
            <a
              href="#home"
              className="font-inter text-secondary hover:text-secondary transition-colors font-medium"
            >
              Home
            </a>
                        <a
              href="#home"
              className="font-inter text-primary hover:text-secondary transition-colors"
            >
              Practice Areas
            </a>

                        <a
              href="#home"
              className="font-inter text-primary hover:text-secondary transition-colors"
            >
              Legal Automation
            </a>

                        <a
              href="#home"
              className="font-inter text-primary hover:text-secondary transition-colors"
            >
              Blog
            </a>

                        <a
              href="#home"
              className="font-inter text-primary hover:text-secondary transition-colors"
            >
              Contact
            </a>

          </div>

          {/* Right: WhatsApp Contact */}
          <div>
            <a
              href="https://wa.me/+234-7035786703"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[#E19132] flex items-center space-x-2"
            >
              <img src="/src/assets/whatsapp-icon.png" alt="WhatsApp"/>
              <span>+234-7035786703</span>
            </a>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
