import PracticeAreaPage from '../components/PracticeAreaPage';

export default function ComplianceEsg() {
  const description = [
    "Compliance and ESG requirements are becoming increasingly central to business operations. Our team provides extensive experience in helping organizations navigate complex legal and regulatory frameworks while ensuring alignment with global standards in environmental, social, and governance matters."
  ];

  const listHeading = "We regularly advise on areas such as:";
  const listItems = [
    "Environmental compliance obligations",
    "Social responsibility and labor compliance",
    "Governance and corporate compliance structures",
    "Data protection and privacy requirements",
    "Regulations concerning Persons with Significant Control (PSCs)",
    "Policies related to Politically Exposed Persons (PEPs)",
    "Anti-bribery and corruption measures",
    "Anti-terrorism and counter-financing of terrorism regulations",
    "Anti-money laundering frameworks",
    "Health and safety compliance",
    "Internal and external investigations and audits",
    "Legal Entity Identifier (LEI) registration",
    "Legal strategies for reputational crisis management",
    "Issues relating to politically exposed persons"
  ];

  return (
    <PracticeAreaPage
      title="Compliance ESG"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
