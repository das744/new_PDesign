// "use client";

// import { useEffect, useState } from "react";

// const processSteps = [
//   {
//     title: "Personalized Guitar Lessons",
//     text: "Receive lessons tailored to your goals...",
//   },
//   {
//     title: "Learn at Your Own Pace",
//     text: "Take lessons that fit your pace...",
//   },
//   {
//     title: "Online & In-Person Options",
//     text: "Access lessons from anywhere...",
//   },
//   {
//     title: "Affordable Pricing Plans",
//     text: "Choose from a variety of pricing plans...",
//   },
// ];

// const WorkingProcess = () => {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       const top = document.getElementById("feature")?.getBoundingClientRect().top || 0;
//       if (top < window.innerHeight - 100) {
//         setAnimate(true);
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     onScroll(); // run on load

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <section id="feature" className="bg-white py-16">
//       <h1 className="text-center mb-12 text-4xl font-bold uppercase">Feature</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16">
//         {processSteps.map((step, index) => (
//           <div
//             key={index}
//             className={`p-6 border rounded-xl shadow-lg transition-all duration-700 ease-in-out transform ${
//               animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//             }`}
//             style={{ transitionDelay: `${index * 100}ms` }}
//           >
//             <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//             <p className="text-gray-600">{step.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WorkingProcess;

"use client";

import { useState } from "react";

const steps = [
  {
    heading:"heading1",
    title: "Personalized Guitar Lessons",
    text: "Receive lessons tailored to your goals, skills, and musical interests.",
  },
  {
    heading:"heading1",
    title: "Learn at Your Own Pace",
    text: "Whether you're a beginner or experienced, progress at a comfortable pace.",
  },
  {
    heading:"heading1",
    title: "Online & In-Person Options",
    text: "Choose between convenient online lessons or face-to-face guidance.",
  },
  {
    heading:"heading1",
    title: "Affordable Pricing Plans",
    text: "Select from flexible plans that match your budget and schedule.",
  },
];

const WorkingProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="feature" className="bg-white px-6 py-30 md:px-20">
      <h1 className="text-center mb-12 text-4xl font-bold uppercase"> Our Working Process Steps</h1>

      <div className="flex flex-col md:flex-row gap-8 relative">
        {/* LEFT SIDE – TITLES */}

        <div className="w-full md:w-2/3 transition-all duration-500 ease-in-out">
          <div
            key={activeIndex} // important to trigger animation
            className="opacity-0 animate-fade-in-up"
          >
            <h3 className="text-2xl font-semibold mb-4">{steps[activeIndex].title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">{steps[activeIndex].text}</p>
          </div>
        </div>

        {/* RIGHT SIDE – TEXT */}
        <div className="relative w-full md:w-1/3">
          <div className="absolute top-0 left-3 w-1 h-full bg-gray-300" />

          <ul className="space-y-6 pl-8">
            {steps.map((step, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative cursor-pointer transition-colors duration-300 ${
                  activeIndex === index ? "font-bold text-blue-600" : "text-gray-600"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      activeIndex === index ? "bg-blue-600 border-blue-600" : "bg-white border-gray-400"
                    }`}
                  />
                  <span>{step.heading}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
     
      </div>
      {/* Divider Section */}
      {/* <div className="relative mt-20 bg-gray-100 w-full">
        <svg viewBox="0 0 1440 220" className="w-full h-24 md:h-32">
          <path
            fill="#fff"
            d="M0,160 C120,120 240,200 360,160 C480,120 600,200 720,160 C840,120 960,200 1080,160 C1200,120 1320,200 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
        <div className="text-center py-8">
          <h2 className="text-2xl font-light mb-4">Join Our Community</h2>
          <button className="btn-primary hover:bg-blue-700 text-white py-3 px-6 text-lg rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>
      </div> */}
      {/* Divider Section ends*/} 
    </section>
  );
};

export default WorkingProcess;

