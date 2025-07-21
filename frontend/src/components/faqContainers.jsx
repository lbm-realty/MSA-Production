// import { useState } from "react";
// import "../css/faqContainer.css";

// function FaqContainer() {
//   const [isOpen, setIsOpen] = useState(false);
//   const handleClick = (index) => {
//     setIsOpen(isOpen === index ? null : index);
//   };
//   const questions = [
//     "I have an urgent question that needs to be solved",
//     "Can non-Muslim students also join the MSA?",
//     "What kind of events does MSA organize?",
//     "Is the MSA only focused on religious activities?",
//     "How does the MSA contribute to campus life?",
//     "How can I learn more about the MSA",
//   ];
//   const answers = [
//     "You can join our Discord server and post a message mentioning the admin (@admin) and get it sorted. ",
//     "Absolutely! MSA welcomes students of all backgrounds to join and participate in its events and activities. The organization’s goal is to promote mutual understanding and unity among students, regardless of their faith. ",
//     "MSA organizes various events, including educational workshops, community service projects, cultural celebrations, and more. These events are designed to provide a comprehensive understanding of Islam, its values, and its contributions to society. ",
//     "While MSA does promote religious awareness, it also emphasizes cultural celebrations, community service, and building connections among students. It’s a well-rounded organization that encourages personal development, community engagement, and cross-cultural understanding.",
//     "MSA contributes by promoting diversity, fostering understanding, and creating a sense of belonging for Muslim students. It also plays a role in interfaith initiatives, spreading awareness about Islam, and participating in community service projects that benefit the campus and local community",
//     "We have more information on our Discord and social media pages at the bottom. The link for the Discord is on the main page. ",
//   ];

//   return (
//     <>
//       <div class="container">
//         <div class="wrapper">
//           <div class="wrapper-holder">
//             <h3 className="main-header">FAQS</h3>
//             <div  className="line-and-general">
//             <div className="line-l"></div>
//               <h4 className="general">General Information</h4>
//             <div className="line-r"></div>
//             </div>
//             <div className="question-answer">
//             {questions.map((question, index) => (
//               <div className="qa-inner">
//                 <div className="question">
//                   <div className="text">{question}</div>
//                   <button className="open-close-btn" onClick={() => handleClick(index)}>
//                     {isOpen === index ? "-" : "+"}
//                   </button>
//                 </div>
//                 <div
//                   className={`answer ${
//                     isOpen === index ? "answer-open" : "answer-close"
//                   }`}
//                 >
//                   {answers[index]}
//                   </div>
//                 <div className={`line-${isOpen === index ? 'show' : 'hide'}`}></div>
//                 </div>
//             ))}
//               </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default FaqContainer;



import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare, Users, Calendar, Heart, School, Info } from 'lucide-react';

const FaqContainer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "I have an urgent question that needs to be solved",
      answer: "You can join our Discord server and post a message mentioning the admin (@admin) and get it sorted.",
      icon: MessageSquare,
      color: "red"
    },
    {
      id: 2,
      question: "Can non-Muslim students also join the MSA?",
      answer: "Absolutely! MSA welcomes students of all backgrounds to join and participate in its events and activities. The organization's goal is to promote mutual understanding and unity among students, regardless of their faith.",
      icon: Users,
      color: "black"
    },
    {
      id: 3,
      question: "What kind of events does MSA organize?",
      answer: "MSA organizes various events, including educational workshops, community service projects, cultural celebrations, and more. These events are designed to provide a comprehensive understanding of Islam, its values, and its contributions to society.",
      icon: Calendar,
      color: "red"
    },
    {
      id: 4,
      question: "Is the MSA only focused on religious activities?",
      answer: "While MSA does promote religious awareness, it also emphasizes cultural celebrations, community service, and building connections among students. It's a well-rounded organization that encourages personal development, community engagement, and cross-cultural understanding.",
      icon: Heart,
      color: "black"
    },
    {
      id: 5,
      question: "How does the MSA contribute to campus life?",
      answer: "MSA contributes by promoting diversity, fostering understanding, and creating a sense of belonging for Muslim students. It also plays a role in interfaith initiatives, spreading awareness about Islam, and participating in community service projects that benefit the campus and local community.",
      icon: School,
      color: "red"
    },
    {
      id: 6,
      question: "How can I learn more about the MSA?",
      answer: "We have more information on our Discord and social media pages at the bottom. The link for the Discord is on the main page.",
      icon: Info,
      color: "black"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-32 bg-black">
      {/* Header Section */}
      <div style={{ "background": "rgb(99, 10, 0, 0.95)" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black p-4 rounded-full inline-block mb-6 shadow-2xl border-4 border-white">
            <MessageSquare className="text-red-600" size={48} />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to common questions about the Texas Tech Muslim Students Association
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              const isOpen = openIndex === index;
              const isRed = faq.color === "red";
              
              return (
                <div
                  key={faq.id}
                  style={ {"background" : `${ isRed ? "rgb(99, 10, 0, 0.95)" : "" }`} }
                  className={`rounded-xl shadow-lg transition-all duration-300 border-2 ${
                    isRed 
                      ? 'border-red-900 hover:shadow-red-800/30' 
                      : 'bg-black border-red-800 hover:shadow-xl'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full p-6 mt-0 hover:bg-red-900/80 text-left transition-all duration-300 rounded-xl ${
                      isOpen ? 'pb-4' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full ${
                          isRed ? 'bg-black' : 'bg-red-900'
                        }`}>
                          <IconComponent 
                            size={24} 
                            className={isRed ? 'text-red-600' : 'text-white'} 
                          />
                        </div>
                        <h3 className={`text-xl font-semibold ${
                          isRed ? 'text-white' : 'text-white'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`p-2 rounded-full transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      } ${isRed ? 'bg-black' : 'bg-red-800/90'}`}>
                        {isOpen ? (
                          <ChevronUp 
                            size={20} 
                            className={isRed ? 'text-red-600' : 'text-white'} 
                          />
                        ) : (
                          <ChevronDown 
                            size={20} 
                            className={isRed ? 'text-red-600' : 'text-white'} 
                          />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className={`px-6 pb-6 ${
                      isRed ? 'border-t-2 border-black/20' : 'border-t-2 border-red-600/20'
                    }`}>
                      <div className={`mt-4 p-4 rounded-lg ${
                        isRed ? 'bg-black/20' : 'bg-red-600/10'
                      }`}>
                        <p className={`text-lg leading-relaxed ${
                          isRed ? 'text-white' : 'text-white'
                        }`}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div style={{ "background" : "rgb(99, 10, 0, 0.95)" }} className="py-16 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join our Discord community or reach out to us on social media
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.com/channels/1002380266339307600/1002380266792300635"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-gray-950 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 border-2 border-gray-200"
            >
              Join Discord
            </a>
            <a
              href="#"
              className="inline-block bg-gray-200/95 hover:bg-gray-200 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 border-2 border-black"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqContainer;