import React from "react";

const AskQuestions = () => {
  const faqData = [
    {
      id: 1,
      question: "How do I find the best freelancers for my project?",
      answer:
        "Our platform employs advanced matching algorithms to connect you with the most qualified freelancers based on your specific project requirements. You can browse vetted profiles, read reviews, and directly engage with top talents.",
    },
    {
      id: 2,
      question: "What types of services do freelancers on this portal offer?",
      answer:
        "Our freelance community covers a wide range of expertise, including graphic design, web development, content creation, digital marketing, data analysis, and much more. Explore our curated service categories to find the perfect fit for your needs.",
    },
    {
      id: 3,
      question: "How do I ensure the quality of work from freelancers?",
      answer:
        "We prioritize quality by thoroughly vetting all freelancers on our platform. Each professional undergoes a rigorous screening process and must maintain high client satisfaction ratings to remain active. You can also review portfolios and feedback before making a hiring decision.",
    },
    {
      id: 4,
      question: "What is the pricing structure for hiring freelancers?",
      answer:
        "Freelancer rates on our portal are transparent and vary based on the individual's experience, skillset, and project scope. You can compare competitive quotes, negotiate terms, and agree on a fixed or hourly rate that suits your budget.",
    },
  ];

  return (
    <div className="mt-5">
      <div className="join join-vertical w-full">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="collapse collapse-arrow join-item border-[#e8e8e8] border rounded"
          >
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg font-bold text-left">
              {faq.question}
            </div>
            <div className="collapse-content text-justify">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AskQuestions;