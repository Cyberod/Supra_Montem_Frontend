// src/pages/Derivatives.jsx
import PracticeAreaPage from "../components/PracticeAreaPage";

export default function Derivatives() {
  const description = [
    "We were the first Nigerian law firm to join the International Swaps and Derivatives Association (ISDA) and have been at the forefront of adapting international standard form documentation on derivatives and “repos” to Nigerian law and practice. We advise on exchange-traded and complex OTC derivative deals, and routinely provide capacity and authority, collateral enforceability and netting opinions to our clients using ISDA and other forms.",
    "We have been active in advocacy to get the Nigerian law on derivatives to be reformed to reflect best global practice. Our derivatives lawyers regularly advise leading global and pan-African banks, non-bank corporates, broker-dealers, and multilateral financial institutions on: derivatives transactions involving currencies, interest rates, credit, and commodities, documented using ISDA and other standard form documentation structured as:",
  ];

  const listHeading = ""; // description introduces the list

  const listItems = [
    "securities repurchases",
    "commodity, currency and interest rate swaps, options, futures and forwards",
    "securities lendings",
    "the establishment of trading platforms",
    "the development and refinement of rules for the operations of trading platforms",
  ];

  return (
    <PracticeAreaPage
      title="Derivatives"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
