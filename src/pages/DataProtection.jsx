// src/pages/DataProtection.jsx
import PracticeAreaPage from "../components/PracticeAreaPage";

export default function DataProtection() {
  const description = [
    "Data protection has become a major and growing area of practice in the past several years. We are a licensed Data Protection Compliance Organisation (DPCO), duly authorized to conduct comprehensive data protection audits and make filings with the Nigerian Data Protection Commission on behalf of clients. We have advised on:",
  ];

  const listHeading = ""; // description already introduces the list

  const listItems = [
    "the development of company policy and process documents",
    "the development of contract clauses",
    "regulatory filings",
    "privacy regulations and policies",
    "applications for permits and exemptions",
    "advisory work",
    "statutory registrations of officers and actors",
    "investigations",
    "judicial review of administrative action",
    "Legal Entity Identifier (LEI) registration",
    "“due diligence” work",
    "audits",
    "addressing the outcomes of data breaches",
  ];

  return (
    <PracticeAreaPage
      title="Data Protection"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
