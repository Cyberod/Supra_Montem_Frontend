
import PracticeAreaPage from "../components/PracticeAreaPage";

export default function MergersAndAcquisitions() {
  const description = [
    "Our very first assignment as a firm was advising on the acquisition of an insurance company. Since then, we have represented both buyers and sellers in over a hundred merger and acquisition deals. Today, we continue to guide top business entities — global, pan-African, Nigerian, and even non-profit and trade associations — through high-profile, complex, and impactful transactions across nearly every industry."
];

  const listHeading = ""; // description already introduces the list

  const listItems = [
         "Mergers and amalgamations",
        "Asset purchases and disposals",
        "Share acquisitions and sales",
        "Share buybacks",
        "Takeovers",
        "Management and leveraged buyouts",
        "Corporatizations",
        "Privatizations",

  ];

  return (
    <PracticeAreaPage
      title="Mergers and Acquisitions"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
