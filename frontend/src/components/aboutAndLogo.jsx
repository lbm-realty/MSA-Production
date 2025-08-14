// import "../css/aboutAndLogo.css";
// import logo from "../images/msa-logo.png";

// const AboutContainer = () => {
//   const openAboutPage = () => {
//     window.open("/about");
//   };

//   return (
//     <div className="about-outer">
//       <div className="about-inner">
//         <img src={logo} className="about-logo" alt="MSA-logo" />
//         <div className="about-container">
//           <div className="about-header">About</div>
//           <div className="about-text">
//             Salam Alaikum! Welcome to the Muslim Students Association (MSA) at
//             Texas Tech University! Our main goal is to bring people
//             together—whether through fun social events, thought-provoking
//             discussions, or community service projects.
//             <br />
//             <button
//               onClick={() => {
//                 openAboutPage();
//               }}
//               className="read-more-btn"
//             >
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutContainer;


import logo from "../images/msa-logo.png";

const AboutContainer = () => {

  return (
    <section className="py-20 bg-black border-t px-4">
        <div
          style={{ background: "rgb(99, 10, 0, 0.95)" }}
          className="max-w-6xl mx-auto px-8 border border-gray-100 rounded-3xl sm:px-6 lg:p-8"
        >
          <div className="flex flex-col lg:flex-row items-center sm:gap-12 gap-2 py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="TTU MSA Logo"
                className="h-32 w-32 bg-gray-100 rounded-full object-contain"
              />
            </div>

            {/* About Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-100 mb-6">About</h2>
              <p className="text-lg text-gray-100 leading-relaxed mb-8">
                Salam Alaikum! Welcome to the Muslim Students Association (MSA)
                at Texas Tech University! Our main goal is to bring people
                together—whether through fun social events, thought-provoking
                discussions, or community service projects.
              </p>
              <a
                onClick={() => window.location.href('/about')}
                href="/about"
                className="inline-block bg-transparent hover:bg-red-900 text-white border-white border font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
    </section>

  );
};

export default AboutContainer;
