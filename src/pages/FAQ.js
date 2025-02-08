import React, {useState} from 'react'
import Footer from '../components/Footer';

function FAQ() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "Why should I work with Bridgewell Insurance Agency?",
            answer: "At Bridgewell, we take the time to truly understand your unique needs and provide personalized support throughout your health insurance journey. Our team specializes in Medicaid applications and renewals, offering hands-on guidance to ensure you don’t face gaps in your coverage. Unlike many agencies, we’re committed to building lasting relationships, not just offering a one-time solution. With us, you're not just another client—you’re a valued partner on the path to securing a healthier, more stable future."
        },
        {
            id: 2,
            question: "Do I have to pay for your services?",
            answer: "No, our services are completely free to you. Our goal is to ensure that you have the support you need, at no cost to you."
        },
        {
            id: 3,
            question: "How can Bridgewell help me with Medicaid?",
            answer: "At Bridgewell, we assist with the entire Medicaid application and renewal process. We help you determine eligibility, gather necessary documentation, and ensure that your application is completed correctly to avoid delays."
        },
        {
            id: 4,
            question: "Can you help me with health insurance outside of Medicaid",
            answer: "Yes! In addition to Medicaid assistance, we offer a variety of health insurance options, including individual plans, family plans, and marketplace options. We’ll work with you to explore your choices and find the best plan for your needs."
        },
        {
            id: 5,
            question: "Do I have to pay for your services?",
            answer: "No, our Medicaid assistance services are completely free. Our goal is to ensure that you have the support you need, at no cost to you."
        },
        {
            id: 6,
            question: "I thought I could not enroll in another health plan after Open Enrollment Period (OEP). Can you still help?",
            answer: "If you missed the Open Enrollment Period, don’t worry—you may still qualify for a Special Enrollment Period (SEP) depending on your situation. Major life changes like moving, getting married, having a baby, or losing other health coverage can open new opportunities for you to enroll or make changes to your health plan. Our team is here to help you explore your options and guide you through the enrollment process, even outside of OEP."
        },
        {
            id: 7,
            question: "Do I need to pay for in-home services such as Personal Care Assistance (PCA) or Adult Foster Care (AFC)?",
            answer: "The cost for in-home services like Personal Care Assistance (PCA) or Adult Foster Care (AFC) can vary depending on your eligibility for Medicaid or other assistance programs. In many cases, if you qualify for Medicaid, these services may be covered or partially covered. However, the specific coverage depends on the state and the program’s guidelines. Our team can help refer you to trusted providers who will assess your eligibility and guide you through the process of accessing these services. We’re here to make sure you understand your options and get connected to the right support."
        },
      
    ];

  return (
   <>
     <div className='about-container'>
            <div className='about-header'>

             

            </div>
            <div className='inner-about-container'>
              
            <p className='about-p'>As a locally owned and operated agency in Massachusetts</p>
            <p className='about-h5'>We’re committed to providing personalized support for your health insurance needs</p>
            </div>

        </div>
     <div className="faq-section_0 animate fadeIn">
            <div className="faq-header_0">
          
                <h2 className='faq-services'>Have any Questions?</h2>
            </div>

            <div className="faq-content_0">
                <div className="questions-list_0">
                    {faqData.map((faq) => (
                        <div key={faq.id} className="question-container_0">
                            <button
                                className={`question-button_0 ${openQuestion === faq.id ? 'active' : ''}`}
                                onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                            >
                                <span>{faq.question}</span>
                                <span className="plus-icon_0">+</span>
                            </button>
                            {openQuestion === faq.id && (
                                <div className="answer_0">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="still-questions_0">
                    <div>
                    <img className='still-questions-image_0' src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Still Have Questions?" />
                    </div>
                    <h3>Still Have Questions?</h3>
                    <p>Can't find the answer you're looking for? Please contact with our customer service.</p>
                    <a href="/contact" className="contact-link_0">
                        Contact us →
                    </a>
                </div>
            </div>
        </div>
        <Footer />
   </>
  )
}

export default FAQ
