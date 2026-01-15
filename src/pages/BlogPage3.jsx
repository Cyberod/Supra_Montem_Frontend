import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import ReachOut from '../components/ReachOut';


const questions = [
  {
    title: "Initial Legal Advice & Case Review",
    content: "The first step in any dispute is understanding where you stand legally. Law firms provide professional consultations to analyze the facts, review agreements, and outline the best strategies to achieve a resolution while protecting your interests."
  },
  {
    title: "Negotiation and Mediation",
    content: "Courtroom battles aren’t always the answer. Many disagreements can be settled through direct negotiation or mediation. Lawyers assist in these processes by ensuring fair discussions and helping parties reach mutually acceptable solutions without the expense and time of litigation. Mediation, guided by a neutral third party, often leads to quicker and less confrontational outcomes."
  },
  {
    title: "Alternative Dispute Resolution (ADR)",
    content: "When negotiation alone doesn’t work, ADR methods like arbitration can be an effective option. In arbitration, an impartial arbitrator evaluates both sides and makes a binding decision. This approach is typically faster and less expensive than going to trial."
  },
  {
    title: "Drafting, Reviewing & Enforcing Contracts",
    content: "Poorly written contracts are a common source of conflict. Law firms help clients draft and review contracts to ensure clarity, enforceability, and compliance with the law. They also provide strategies to prevent future disagreements through stronger legal documentation."
  },
  {
    title: "Litigation and Courtroom Representation",
    content: "If out-of-court methods fail, litigation may be necessary. Law firms handle all aspects of court proceedings—from filing claims to presenting evidence—while advocating for the best possible outcome on behalf of their clients."
  },
  {
    title: "Workplace & Employment Issues",
    content: "Conflicts between employers and employees, such as wrongful dismissal, harassment, or wage disputes, can be damaging if left unresolved. Legal professionals guide both sides in finding solutions, whether through internal procedures, negotiations, or formal legal action."
  },
  {
    title: "Intellectual Property & Commercial Conflicts",
    content: "Protecting intellectual property is crucial for many businesses. Disputes over trademarks, copyrights, or patents can be complex, but law firms provide the expertise to defend rights, pursue infringement claims, and settle commercial disagreements."
  },
  {
    title: "Debt Recovery & Financial Conflicts",
    content: "Outstanding debts or financial disputes can disrupt business operations. Law firms assist with recovering owed money, negotiating settlements, and enforcing payment agreements."
  },
  {
    title: "Real Estate & Property Disputes",
    content: "Property conflicts—such as landlord-tenant disagreements, boundary issues, or contract breaches—require clear legal intervention. A law firm ensures compliance with real estate laws, supports negotiations, and litigates when needed."
  },
  {
    title: "Family & Personal Disputes",
    content: "Legal conflicts aren’t limited to business. Family-related issues, including divorce, child custody, or inheritance disputes, require sensitive but firm legal support. Law firms help clients reach fair outcomes while safeguarding their rights."
  }
];

export default function BlogPage3() {
  const breadcrumbItems = [
    { label: 'Blog', href: '/' },
    { label: 'How Law Firms Help Resolve Disputes' }
  ];

  

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="hidden lg:block">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section id="practice-area" className="w-full pt-[74px]  lg:pt-0">
      {/* Topic Section */}
        <div className="max-w-full container bg-midnight py-[80px] xl:py-[100px] h-auto">
          <div className="text-center px-5  lg:px-[150px]">
            <h1 className="font-inter text-barley-white font-normal text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-[39.2px] tracking-[1.12px] md:leading-[62.4px] md:tracking-[1.92px]">
              How Law Firms Help Resolve Disputes
            </h1>
          </div>
          <img src="/ADR_LINES.svg" alt="vector line" className='container absolute overflow-hidden top-0 right-5' />

        </div>
        <div>
          <img src="/BlogPage3.png" alt="Blog Page image" className='w-full h-auto' />
        </div>

        {/* Content Section */}
        <div className="max-w-full container py-8 xl:py-[48px]">

          <div className="space-y-6">
            <p className="font-inter text-sm text-blue-bayoux leading-relaxed xl:text-[18px]">
              Choosing the right law firm is crucial for ensuring legal success, whether for personal matters or business needs. A competent law firm can help you navigate legal complexities, protect your rights, and achieve favorable outcomes. Before hiring, asking the right questions can help you determine if the firm is the right fit for you.
            </p>

            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="mt-6 xl:mt-8">
                <h3 className="font-inter text-lg text-midnight font-semibold mb-3 xl:text-[24px] xl:mb-4">
                  {index + 1}. {questions[index].title}
                </h3>
                <p className="font-inter text-sm text-blue-bayoux leading-relaxed xl:text-[18px]">
                  {questions[index].content}
                </p>
              </div>
            ))}

            <div className="mt-6 xl:mt-8">
              <h3 className="font-inter text-lg text-midnight font-semibold mb-3 xl:text-[24px] xl:mb-4">
                Conclusion
              </h3>
              <p className="font-inter text-sm text-blue-bayoux leading-relaxed xl:text-[18px]">
                Hiring the right law firm requires careful consideration. By asking these key questions, you can make an informed decision and choose a firm that aligns with your legal needs, budget, and expectations. Take your time, compare options, and ensure you feel confident in your choice before moving forward.
              </p>
            </div>
          </div>

        </div>


        <ReachOut />
        <Footer />
      </section>

    </div>
  );
}
