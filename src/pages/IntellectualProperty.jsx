// src/pages/IntellectualProperty.jsx
import PracticeAreaPage from "../components/PracticeAreaPage";

export default function IntellectualProperty() {
  const description = [
    "Our intellectual property (“IP”) practice is perhaps our most international and pan-African practice. Our lawyers are recognized intellectual property experts and we work frequently to protect intellectual property rights in multiple jurisdictions where intellectual property rights are key, and on:",
  ];

  const listHeading = ""; // description introduces the list

  const listItems = [
    "the filing, registration and renewals of trademarks, patents, designs, copyright and domain names",
    "IP portfolio management",
    "searching and clearance",
    "privacy",
    "counterfeiting",
    "disputes and enforcement, both in the courts and in administrative proceedings",
    "commercialization of IP rights (including franchising and other licensing)",
    "“due diligence” and IP audits",
    "drafting and negotiating of IP agreements",
    "currency remittances to foreign licensors",
  ];

  return (
    <PracticeAreaPage
      title="Intellectual Property"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
