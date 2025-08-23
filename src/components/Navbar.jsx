import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full bg-white z-50">
      {() => (
        <div className="max-w-[1440px] mx-auto px-[120px] py-[24px] h-[80px] flex items-center justify-between">
          {/* Left: Logo & Company Name */}
          <div className="flex items-center space-x-3">
            <img src="/Logo+Menu.png" alt="Company Logo"/>
          </div>

          {/* Center: Navbar Links */}
          <div className="flex space-x-8">
            <Link
              to="/"
              className="font-inter text-secondary hover:text-secondary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/practice-areas"
              className="font-inter text-primary hover:text-secondary transition-colors"
            >
              Practice Areas
            </Link>
            <a
              href="#legal-automation"
              className="font-inter text-primary hover:text-secondary transition-colors"
            >
              Legal Automation
            </a>
            <Link
              to="/Blog"
              className="font-inter text-primary hover:text-secondary transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/Contact"
              className="font-inter text-primary hover:text-secondary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right: WhatsApp Contact */}
          <div>
            <a
              href="https://wa.me/+234-7035786703"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[#E19132] flex items-center space-x-2"
            >
              <img src="/whatsapp-Icon.png" alt="WhatsApp"/>
              <span>+234-7035786703</span>
            </a>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
