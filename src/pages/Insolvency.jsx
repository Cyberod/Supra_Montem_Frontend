// src/pages/Insolvency.jsx
import PracticeAreaPage from "../components/PracticeAreaPage";

export default function Insolvency() {
  const description = [
    "We have been advising on several of the largest, most complex and newsworthy insolvencies in Nigeria, especially in the aviation, banking, upstream oil-and-gas, power, insurance, real-estate and telecommunications sectors. We have worked extensively with both borrowers and lenders and the Asset Management Corporation of Nigeria, a statutory entity for the management and resolution of distressed bank financial assets. Our experience extends to:",
  ];

  const listHeading = ""; // description introduces the list

  const listItems = [
    "the refinancing of debts",
    "the restructuring of equity",
    "reorganizations of debtor entities and groups",
    "sales, leases and other monetizing disposals of assets",
    "workouts",
    "concessions",
    "receiverships",
    "administration and business rescue",
    "administrative hearings",
    "insolvent liquidations",
    "controversial court proceedings",
  ];

  return (
    <PracticeAreaPage
      title="Insolvency"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
