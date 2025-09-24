import PracticeAreaPage from '../components/PracticeAreaPage';

export default function Competition() {
  const description = [
    "Our competition law practice is expanding rapidly, with a focus on Nigeria’s evolving competition statutes and regulatory framework. We provide guidance on transactions and commercial arrangements that may raise competition concerns, helping clients navigate compliance, enforcement risks, and disputes."
  ];

  const listHeading = "We advise clients on issues including:";
  const listItems = [
    "Merger control and approval processes",
    "Exclusive dealing contracts",
    "Price regulation and maintenance",
    "Abuse of market dominance",
    "Appeals against regulatory or administrative decisions",
    "Market definition and identification",
    "Product tying and bundling practices",
    "Regulatory investigations and “dawn raids”",
    "Boycotts and market division",
    "Gun-jumping violations",
    "Negative clearance applications",
    "Requests for waivers and exemptions",
    "Formal inquiries and investigations"
  ];

  return (
    <PracticeAreaPage
      title="Competition"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
