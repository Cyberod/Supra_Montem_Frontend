import PracticeAreaPage from '../components/PracticeAreaPage';

export default function Corporate() {
  const description = [
    "Our corporate practice covers a wide range of matters that fall outside traditional mergers and acquisitions, focusing on transactions and arrangements that do not involve a transfer of control. We assist businesses with structuring, governance, and strategic corporate actions to ensure legal and operational efficiency."
  ];

  const listHeading = "We advise on:";
  const listItems = [
    "Spin-offs, split-offs, de-mergers, and divestitures",
    "Foreign direct investment (FDI)",
    "Establishing and setting up businesses",
    "Strategic minority investments",
    "Privatizations and related transactions",
    "Corporate reconstructions",
    "Group reorganizations, including holding company structures",
    "Corporate governance frameworks",
    "Regulatory and compliance obligations",
    "Solvent liquidations"
  ];

  return (
    <PracticeAreaPage
      title="Corporate"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
