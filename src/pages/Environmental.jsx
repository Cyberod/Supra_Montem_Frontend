// src/pages/Environmental.jsx
import PracticeAreaPage from "../components/PracticeAreaPage";

export default function Environmental() {
  const description = [
    "Our team in this area of practice has advised on environmental law issues in respect of transactions, operations, filings, compliance and disputes in sectors such as:",
  ];

  const listHeading = ""; // description already introduces the list

  const listItems = [
    "oil-and-gas",
    "manufacturing",
    "agribusiness and forestry",
    "mining",
    "naturally - occurring bodies of water",
  ];

  return (
    <PracticeAreaPage
      title="Environmental"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
