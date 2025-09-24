// src/pages/ForeignInvestments.jsx
import PracticeAreaPage from "../components/PracticeAreaPage";

export default function ForeignInvestments() {
  const description = [
    "We advise foreign investors of every size and in every industry on:",
  ];

  const listHeading = ""; // description already introduces the list

  const listItems = [
    "the incorporation and other organizations of vehicles",
    "restrictions on ownership and control",
    "applications for exemptions from restrictions",
    "structuring for corporate, tax and regulatory ends",
    "permits and procedure",
    "investment treaty protection",
    "tax treaty protection",
    "immigration regulation",
  ];

  return (
    <PracticeAreaPage
      title="Foreign Investments"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
