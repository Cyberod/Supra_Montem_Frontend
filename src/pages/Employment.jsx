// src/pages/Employment.jsx
import PracticeAreaPage from "../components/PracticeAreaPage";

export default function Employment() {
  const description = [
    "The matters on which we work regularly include the following:",
  ];

  const listHeading = ""; // description already introduces the list

  const listItems = [
    "executive employment agreements",
    "secondment (and intragroup “shared services”) arrangements",
    "developing and refining staff handbooks",
    "director engagement agreements",
    "“whistleblowing”",
    "liability insurance",
    "employee incentive schemes",
    "pension scheme structures, documentation and regulation",
    "expatriate employee renumeration remittances and taxes",
    "immigration regulation",
    "drafting, enforcing and resisting “non-compete” clauses",
    "litigation and arbitration",
  ];

  return (
    <PracticeAreaPage
      title="Employment"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
