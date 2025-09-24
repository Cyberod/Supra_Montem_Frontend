import PracticeAreaPage from '../components/PracticeAreaPage';

export default function ArbitrationADR() {
  const description = [
    "We handle arbitration matters, whether in Nigeria or abroad, whether between commercial adversaries or by investors against states. We also conduct court proceedings relating to arbitration, including court applications to uphold arbitration agreements or to set awards aside. Most of our arbitration matters have an international dimension. We also handle mediations.",
    "We have worked as lead counsel, as co-counsel in support of foreign law firms, as arbitrators, as expert witnesses and as registrars to arbitrators. In arbitration and mediation, our approach is the same approach that we take with litigation: speed, thoroughness, imagination, empathy, tenacity, diligence, clarity from the start as to goals and strategy, and realism."
  ];

  const listHeading = "Our most significant work here has included advising and representing clients in the following areas:";

  const listItems = [
    "foreign investors in an investment treaty arbitration",
    "private equity firms in London-seated arbitration against their financial services sector investees",
    "Paris-seated arbitration against the Federal Government re-awarding a USD6bn power sector project",
    "banks in mediating claims filed against them by large creditor customers",
    "an international logistics company in arbitration claims filed by it against a pan-African business group",
    "a tanker charterer recovering from a sub-charterer over USD300mm in damages for breach in an arbitration",
    "a leading 'GSM' telephone operator in more than one discrete arbitration filed against it by its suppliers",
    "an arbitration dispute among the shareholders of a large telecommunications operator",
    "a foreign 'IT' contractor in an adjudication",
    "an LSE-listed energy company in a quest for expert determination"
  ];

  return (
    <PracticeAreaPage
      title="Arbitration ADR"
      description={description}
      listHeading={listHeading}
      listItems={listItems}
    />
  );
}
