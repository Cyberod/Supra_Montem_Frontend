
import PracticeAreaPage from "../components/PracticeAreaPage";

export default function Tax() {
  const description = [
    "We have partners who are Fellows of the Chartered Institute of Taxation, giving our tax team a unique depth of expertise. We have represented major global clients in landmark tax disputes and regularly advise on the tax implications of significant corporate, financial, and commercial transactions. Our work spans federal taxes (including income, capital gains, customs duties, VAT, and stamp duties), as well as state and local government levies.",

    "We collaborate with non-lawyer tax consultants where necessary, while also handling areas that typically go beyond the scope of accountants — such as litigation, constitutional tax questions, drafting agreements with specific tax objectives, and navigating registry-related tax rules. Importantly, our lawyer-client communications enjoy legal privilege, providing an extra layer of protection."
];

  const listHeading = ""; // description already introduces the list

  const listItems = [
        "Constitutional authority to levy, assess, and collect taxes",
        "Tax litigation and administrative proceedings",
        "Legal opinions and advisory work on tax law",
        "Tax investigations and audits",
        "Applications for tax exemptions and relief",
        "Engagement in tax law reform",
        "Structuring tax aspects of mergers, acquisitions, and reorganizations",
        "Advising on tax issues for foreign investors and investments",
        "Tax treatment of debt security perfection",
        "Transfer pricing compliance and re-characterization issues",
        "Tax planning for petroleum and real estate asset acquisitions",
        "Taxation of commercial contracts for goods and services",
        "Guidance on expatriate compensation tax obligations",
        "Taxation of trust arrangements",
        "Taxation of collective investment schemes",
        "Tax structuring for securitizations and debt offerings",
        "Withholding tax and other deductions at source regulations",

  ];

  return (
    <PracticeAreaPage
      title="Tax"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
