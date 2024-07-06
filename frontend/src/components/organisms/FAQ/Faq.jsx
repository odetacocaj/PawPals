import "./Faq.scss";
import faqLogo from "../../../assets/images/faqLogo.jpeg";

const Faq = () => {
  const handleToggle = (e) => {
    const question = e.target;
    const answer = e.target.nextSibling;

    if (question.classList.contains("faq-accordion-question-button-active")) {
      question.classList.remove("faq-accordion-question-button-active");
      answer.classList.remove("faq-accordion-answer-active");
    } else {
      const openQuestions = document.querySelectorAll(".faq-accordion-answer-active");
      const openBtn = document.querySelectorAll(".faq-accordion-question-button-active");
      openQuestions?.forEach((item) => item.classList.remove("faq-accordion-answer-active"));
      openBtn?.forEach((btn) => btn.classList.remove("faq-accordion-question-button-active"));

      question.classList.add("faq-accordion-question-button-active");
      answer.classList.toggle("faq-accordion-answer-active");
    }
  };

  const data = [
    {
      id: 1,
      question: "Are all pets at your center spayed or neutered before adoption?",
      answer:
        "Yes, all pets available for adoption are spayed or neutered to promote responsible pet ownership and prevent overpopulation.",
    },
    {
      id: 2,
      question: "What if I can no longer care for a pet I adopted from your center?",
      answer:
        "We understand that circumstances may change. If you can no longer care for your adopted pet, please contact us. We can assist in finding a new loving home or provide guidance on rehoming options.",
    },
    {
      id: 3,
      question: "Do you accept donations?",
      answer:
        "Yes, donations are crucial to supporting our mission. We accept monetary donations, as well as supplies such as pet food, bedding, and toys. Visit our donation page to learn more about how you can contribute.",
    },
    {
      id: 4,
      question: "Can I volunteer at your adoption center?",
      answer:
        "Absolutely! We welcome volunteers who are passionate about animals. Visit our volunteer page on the website to learn more about opportunities and how to get involved.",
    },
    {
      id: 5,
      question: "How can I adopt a pet from your center?",
      answer:
        "Begin by browsing our available pets online or visiting us in person. Once you've found a furry friend you'd like to adopt, fill out an adoption application. Our team will review your application to ensure the best match for both you and the pet.",
    },
  ];

  return (
    <div className="faq-accordion df">
      <div className="card-container-text">
        <h1 className="card-container-title">FAQ</h1>
        <p className="card-container-info text-base p-3">
          Explore answers to common questions about our services and adoption process. If you have
          more inquiries, feel free to contact us directly.
        </p>
      </div>
      <div className="faq-accordion-container text-base">
        <div className="faq-image-container">
          <img className="faq-logo" src={faqLogo} />
        </div>
        <div className="faq-accordion-content">
          {data.map((item) => (
            <div className="faq-accordion-question" key={item.id}>
              <button className="faq-accordion-question-button" onClick={handleToggle}>
                {" "}
                {item.question}
              </button>
              <div className="faq-accordion-answer">
                <p> {item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
