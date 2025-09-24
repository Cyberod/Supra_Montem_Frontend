
import PracticeAreaPage from "../components/PracticeAreaPage";

export default function WhiteCollar() {
  const description = [
    "Our team has built strong expertise in handling sensitive white-collar matters. We regularly represent clients in criminal defense cases, civil rights protection, and other proceedings where both liberty and reputation are at stake. We also provide strategic guidance to organizations and individuals navigating investigations, enforcement actions, and crisis situations."
];

  const listHeading = "We have supported clients in areas such as:"; 
  const listItems = [
    "Defense representation in criminal trials",
    "Applications seeking compensation for breaches of civil rights",
    "Advising and representing clients summoned by law enforcement agencies",
    "Applications for the release of detained persons and seized assets",
    "Tracing and recovery of assets overseas",
    "Advisory services across all related matters",
    "Legal strategy for managing reputational crises"

  ];

  return (
    <PracticeAreaPage
      title="White Collar"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
