import { Link } from "react-router-dom";

export default function PracticeCta() {
  return (
    <div className="  bg-midnight">
        <div className="flex flex-col gap-8 xl:flex-row xl:justify-between py-5 xl:gap-20 xl:px-[180px] xl:max-w-[1200px]" id="practice-cta">
            <ul className="text-barley-white text-left">
            <li className="pt-8 xl:pt-[48px]">
                <Link to="/practice-areas/arbitration-adr" className="practice-cta">
                <span>Arbitration ADR</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </Link>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/competition" className="practice-cta">
                <span>Competition</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/corporate" className="practice-cta">
                <span>Corporate</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/corporate" className="practice-cta">
                <span>Derivatives</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/corporate" className="practice-cta">
                <span>Environmental</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/corporate" className="practice-cta">
                <span>Intellectual Property</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/corporate" className="practice-cta">
                <span>Investigations</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/corporate" className="practice-cta">
                <span>Litigations</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/corporate" className="practice-cta">
                <span>Tax</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            </ul>
            <ul className="text-barley-white text-left">
            <li className="pt-8 xl:pt-[48px]">
                <a href="/employment" className="practice-cta">
                <span>Capital Markets</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/litigation" className="practice-cta">
                <span>Compliance ESG</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/real-estate" className="practice-cta">
                <span>Data Protection</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/litigation" className="practice-cta">
                <span>Employment</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/litigation" className="practice-cta">
                <span>Foreign Investments</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/litigation" className="practice-cta">
                <span>Insolvency</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/litigation" className="practice-cta">
                <span>Lendings</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/litigation" className="practice-cta">
                <span>Mergers and Acquisitions</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            <li className="pt-8 xl:pt-[48px]">
                <a href="/litigation" className="practice-cta">
                <span>White Collar</span>
                <img src="/arrow.png" alt="cta arrow" className="w-4 h-4" />
                </a>
            </li>
            </ul>
        </div>
    </div>
  );
}
