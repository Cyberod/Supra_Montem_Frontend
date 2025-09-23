import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import ReachOut from '../components/ReachOut';


const questions = [
  {
    title: "What Areas of Law Do You Specialize In?",
    content: "Law firms often specialize in specific areas such as corporate law, real estate, family law, or intellectual property. Ensure the firm has expertise in the legal issue you need help with."
  },
  {
    title: "How Much Experience Do You Have in Similar Cases?",
    content: "Experience matters when handling legal matters. Ask about their past cases, success rates, and how long they have been practicing in the relevant field."
  },
  {
    title: "What Will Be the Strategy for My Case?",
    content: "Understanding the law firm's approach can give you insight into how they plan to handle your case. Ask about their strategy, potential challenges, and the possible timeline for resolution."
  },
  {
    title: "Who Will Be Handling My Case?",
    content: "At larger law firms, different attorneys may work on your case. Clarify whether a senior lawyer, junior associate, or paralegal will be handling the majority of the work."
  },
  {
    title: "What Are Your Fees and Billing Structure?",
    content: "Legal fees can vary widely. Ask about hourly rates, flat fees, contingency fees, and any additional costs. Transparency about billing can help you avoid unexpected expenses."
  },
  {
    title: "How Do You Communicate with Clients?",
    content: "Legal matters often require regular updates. Ask how often you can expect updates, whether they communicate via email, phone, or in-person meetings, and how responsive they are to inquiries."
  },
  {
    title: "Do You Have Client Testimonials or References?",
    content: "Client reviews and references provide insight into the firm's reputation and quality of service. Ask if they can provide testimonials or references from previous clients."
  },
  {
    title: "What Are the Possible Outcomes of My Case?",
    content: "While no lawyer can guarantee a specific result, an experienced firm should be able to outline possible outcomes, risks, and the best-case scenario for your legal matter."
  },
  {
    title: "How Do You Handle Conflicts of Interest?",
    content: "A law firm should disclose any potential conflicts of interest that could impact your case. Ensure they are committed to representing your best interests without bias."
  },
  {
    title: "What Sets Your Law Firm Apart from Others?",
    content: "Every law firm has a unique approach to legal representation. Ask what differentiates them—whether it's their track record, client service, innovative solutions, or industry expertise."
  }
];

export default function BlogPage() {
  const breadcrumbItems = [
    { label: 'Blog', href: '/' },
    { label: '10 Key Questions to Ask Before Hiring a Law Firm' }
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
              10 Key Questions to Ask Before Hiring a Law Firm
            </h1>
          </div>
          <img src="/ADR_LINES.svg" alt="vector line" className='container absolute overflow-hidden top-0 right-10' />

        </div>
        <div>
          <img src="/BlogPage1.png" alt="Blog Page image" className='w-full h-auto' />
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
                Final Thoughts
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
