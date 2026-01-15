import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import ReachOut from '../components/ReachOut';


const questions = [
  {
    title: "Marriage & Prenuptial Agreements",
    content: "Before marriage, couples may choose to establish prenuptial agreements to clarify financial responsibilities and property ownership. Law firms draft and review these agreements to ensure fairness and enforceability."
  },
  {
    title: "Divorce & Separation",
    content: "When relationships break down, divorce or separation can be overwhelming. Lawyers assist in filing for divorce, negotiating settlements, and ensuring compliance with family laws to achieve a fair outcome for both parties."
  },
  {
    title: "Child Custody & Visitation Rights",
    content: "Disputes involving children require careful handling. Law firms advocate for custody and visitation arrangements that prioritize the child’s best interests while protecting parental rights."
  },
  {
    title: "International Family Law Issues",
    content: "Global mobility sometimes leads to cross-border family disputes involving custody, marriage, or inheritance. Law firms assist in navigating international family laws and treaties to resolve such complex cases."
  },
  {
    title: "Child & Spousal Support",
    content: "Financial support is often a major concern during separation. Law firms help establish, enforce, or modify child support and spousal maintenance agreements to ensure financial stability."
  },
  {
    title: "Adoption & Guardianship",
    content: "Expanding a family through adoption or guardianship requires navigating detailed legal procedures. Law firms guide clients through the process, ensuring compliance with all regulations and safeguarding the child’s welfare."
  },
  {
    title: "Domestic Violence & Protection Orders",
    content: "In cases of abuse, immediate legal intervention is necessary. Law firms assist victims in obtaining restraining orders, ensuring safety, and pursuing legal action against perpetrators."
  },
  {
    title: "Property Division in Divorce",
    content: "Dividing assets during a divorce can be complicated, particularly with shared businesses, properties, or investments. Law firms work to secure equitable distribution and protect their clients’ financial interests."
  },
  {
    title: "Inheritance & Estate Disputes",
    content: "Family conflicts over inheritance or wills can cause lasting rifts. Law firms provide legal clarity by resolving estate disputes, contesting wills, and guiding families through probate processes."
  },
  {
    title: "Mediation & Alternative Dispute Resolution",
    content: "Not every family matter needs to go to court. Law firms often encourage mediation or arbitration to help families reach amicable agreements without lengthy litigation."
  }
];

export default function BlogPage2() {
  const breadcrumbItems = [
    { label: 'Blog', href: '/' },
    { label: 'Guiding Families Through Legal Matters: The Role of a Law Firm' }
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
          Guiding Families Through Legal Matters: The Role of a Law Firm </h1>
          </div>
          <img src="/ADR_LINES.svg" alt="vector line" className='container absolute overflow-hidden top-0 right-5' />

        </div>
        <div>
          <img src="/BlogPage2.png" alt="Blog Page image" className='w-full h-auto' />
        </div>

        {/* Content Section */}
        <div className="max-w-full container py-8 xl:py-[48px]">

          <div className="space-y-6">
            <p className="font-inter text-sm text-blue-bayoux leading-relaxed xl:text-[18px]">
                Family-related legal issues are often sensitive and emotionally charged. From marriage and divorce to child custody and inheritance, these matters require both compassion and legal precision. A law firm provides the necessary guidance, advocacy, and representation to help families navigate complex situations while protecting their rights and interests. 
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
               Family law matters affect people at deeply personal levels. A law firm’s role is not just about legal representation but also about providing support, clarity, and protection during life’s most challenging transitions. By seeking professional legal assistance, families can find solutions that are fair, balanced, and respectful of everyone involved.              </p>
            </div>
          </div>

        </div>


        <ReachOut />
        <Footer />
      </section>

    </div>
  );
}
