
import PracticeAreaPage from "../components/PracticeAreaPage";

export default function Litigations() {
  const description = [
    "We approach disputes with speed, precision, and creativity, always keeping in mind clear objectives, expectations, and strategies from the earliest stage possible. Our reputation is built on empathy, resilience, diligence, and responsiveness. We prioritize achieving our clients’ commercial goals while remaining realistic and practical. In addition, we review, manage, and provide strategic recommendations for improving large portfolios of litigation matters."
];

  const listHeading = ""; // description already introduces the list

  const listItems = [
    "defending multinational corporations in product liability cases",

    "securing judicial confirmation of the immunity of multilateral development financial institutions",

    "representing government agencies in complex disputes involving asset recovery",

    "challenging unlawful attempts to impose excessive fines on global companies",

    "successfully resisting unconstitutional tax demands on businesses",

    "registering and enforcing foreign court judgments and orders within Nigeria",

    "preventing last-minute attempts to halt capital markets transactions and shareholder meetings",

    "defending acquisition deals against attempts to block them through litigation",

    "representing inventors in groundbreaking telecommunications software patent validity disputes",

    "defending employers in employee-led class actions and representative suits",

    "acting for financial institutions in major debt-related disputes with bank debtors",

    "providing pro bono defence in criminal proceedings"
  ];

  return (
    <PracticeAreaPage
      title="Litigations"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
