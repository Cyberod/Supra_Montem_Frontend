
import PracticeAreaPage from "../components/PracticeAreaPage";

export default function Investigations() {
  const description = [
    "We handle large, complex and critical consumer protection, data protection, tax, competition law, banking regulation, securities regulation and other investigations of leading global multinational and other clients."
  ];

  const listHeading = ""; // description already introduces the list

  const listItems = [
    "“dawn raids”",
    "public investigations",
    "confidential investigations",
    "administrative tribunals trials",
    "administrative tribunals appeals",
    "Court litigation in aid of administrative proceedings",
    "amicable settlement negotiations and documentation",
    "defence representation in proceedings before supranational sanctions tribunals",
    "representation in proceedings before committees of legislatures",
  ];

  return (
    <PracticeAreaPage
      title="Investigations"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
