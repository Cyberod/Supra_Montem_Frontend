
import PracticeAreaPage from "../components/PracticeAreaPage";

export default function Lendings() {
  const description = [
    "We have been advising on many of Nigeria’s largest, most complex and most creative banking transactions for more than two decades. We work regularly with leading banks (global, pan-African and Nigerian) on their most significant transactions in our market. We also advise borrowers, multilateral and hybrid lenders, development finance institutions and other public and private lenders on their most significant banking transactions."
  ];

  const listHeading = ""; // description already introduces the list

  const listItems = [
 "syndicated lendings",
    "Tier 2 capital loans",
    "participations, assignments and other “sell down” transactions",
    "project financings",
    "trade finance",
    "working capital and receivables financings",
    "exchange control regulation",
    "acquisition financings",
    "structured and leveraged lending",
    "bank-to-bank lines of credit",
    "finance leases",
    "sector-support credit schemes sponsored by governmental institutions",
  ];

  return (
    <PracticeAreaPage
      title="Lendings"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
