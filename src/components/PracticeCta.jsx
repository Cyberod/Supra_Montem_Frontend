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
              { name: "Competition", path: "/practice-areas/competition" },
              { name: "Corporate", path: "/practice-areas/corporate" },
              { name: "Derivatives", path: "/practice-areas/derivatives" },
              { name: "Environmental", path: "/practice-areas/environmental" },
              { name: "Intellectual Property", path: "/practice-areas/intellectual-property" },
              { name: "Investigations", path: "/practice-areas/investigations" },
              { name: "Litigations", path: "/practice-areas/litigations" },
              { name: "Tax", path: "/practice-areas/tax" },
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
              { name: "Capital Markets", path: "/practice-areas/capital-markets" },
              { name: "Compliance ESG", path: "/practice-areas/compliance-esg" },
              { name: "Data Protection", path: "/practice-areas/data-protection" },
              { name: "Employment", path: "/practice-areas/employment" },
              { name: "Foreign Investments", path: "/practice-areas/foreign-investments" },
              { name: "Insolvency", path: "/practice-areas/insolvency" },
              { name: "Lendings", path: "/practice-areas/lendings" },
              { name: "Mergers and Acquisitions", path: "/practice-areas/mergers-and-acquisitions" },
              { name: "White Collar", path: "/practice-areas/white-collar" },
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