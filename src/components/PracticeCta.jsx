import { Link } from "react-router-dom";

export default function PracticeCta() {
  return (
    <div className="bg-midnight">
      <div className="xs:mx-0 lg:mx-[180px] py-[44px] lg:py-[88px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[80px] xl:gap-[112px]" id="practice-cta">
          {/* First Column */}
          <ul className="text-barley-white text-left space-y-6 md:space-y-8">
            {[
              { name: "Arbitration ADR", path: "/practice-areas/arbitration-adr" },
              { name: "Competition", path: "/competition" },
              { name: "Corporate", path: "/corporate" },
              { name: "Derivatives", path: "/corporate" },
              { name: "Environmental", path: "/corporate" },
              { name: "Intellectual Property", path: "/corporate" },
              { name: "Investigations", path: "/corporate" },
              { name: "Litigations", path: "/corporate" },
              { name: "Tax", path: "/corporate" },
            ].map((item, index) => (
              <li key={index} className="font-inter">
                <Link 
                  to={item.path} 
                  className="practice-cta  text-[18px] lg:text-[16px] xl:text-[18px] w-full flex items-center justify-between py-2 md:py-4"
                >
                  <span>{item.name}</span>
                  <img 
                    src="/arrow.svg" 
                    alt="cta arrow" 
                    className="w-[10px] h-[10px]" 
                  />
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Second Column */}
          <ul className="text-barley-white text-left space-y-6 md:space-y-8">
            {[
              { name: "Capital Markets", path: "/employment" },
              { name: "Compliance ESG", path: "/litigation" },
              { name: "Data Protection", path: "/real-estate" },
              { name: "Employment", path: "/litigation" },
              { name: "Foreign Investments", path: "/litigation" },
              { name: "Insolvency", path: "/litigation" },
              { name: "Lendings", path: "/litigation" },
              { name: "Mergers and Acquisitions", path: "/litigation" },
              { name: "White Collar", path: "/litigation" },
            ].map((item, index) => (
              <li key={index} className="font-inter">
                <Link 
                  to={item.path} 
                  className="practice-cta text-[18px] lg:text-[16px] xl:text-[18px]  w-full flex items-center justify-between py-2 md:py-4"
                >
                  <span>{item.name}</span>
                  <img 
                    src="/arrow.svg" 
                    alt="cta arrow" 
                    className="w-[10px] h-[10px]" 
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}