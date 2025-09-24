import PracticeAreaPage from '../components/PracticeAreaPage';

export default function CapitalMarkets() {
  const description = [
    "We have built a strong track record in capital markets advisory. Our team has worked on landmark deals including Nigeria’s largest IPO, its biggest debt issuance, the country’s first U.S. Dollar Eurobond, and the first offering to be listed on stock exchanges across three countries. We were also involved in the creation of Nigeria’s first Islamic finance unit trust."
  ];

  const listHeading = "Our lawyers continue to provide counsel on matters such as:";
  const listItems = [
    "Initial public offerings (IPOs)",
    "Corporate and government bond issuances",
    "Eurobond transactions",
    "Convertible securities offerings",
    "Equity offers for sale and rights issues",
    "Fund formations and offerings",
    "Listings on both domestic and international stock exchanges",
    "Prime brokerage and custody agreements",
    "Global depositary receipts",
    "Demutualization of stock exchanges",
    "Securitization structures",
    "Establishment and development of trading platforms",
    "Privatization offerings",
    "Commercial paper issuances",
    "Block trades (single and multi-tranche)"
  ];

  return (
    <PracticeAreaPage
      title="Capital Markets"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
