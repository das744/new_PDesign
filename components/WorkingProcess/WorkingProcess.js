

"use client";

import { useState } from "react";

const steps = [
  {
    heading: "Phase 1",
    title: "Discovery & Strategy",
    text: "We start by understanding your business goals, target audience, and project scope. Through research and competitor analysis, we define a clear strategy, content plan, and site structure to guide the project from the ground up.",
  },
  {
    heading: "Phase 2",
    title: "UX & UI Design",
    text: "We first map out the user journey with wireframes, focusing on functionality and usability. Then, we apply visual design elements—branding, color schemes, typography—to create a clean, intuitive, and engaging user interface.",
  },
  {
    heading: "Phase 3",
    title: "Development & Testing",
    text: "Our team transforms the designs into a fully functional website using clean, responsive code. We rigorously test for performance, browser compatibility, mobile responsiveness, and functionality across all devices.",
  },
  {
    heading: "Phase 4",
    title: " Deployment",
    text: "Once everything is approved and tested, we launch your website on the live server. We handle domain setup, hosting integration, SEO basics, and security measures to ensure a smooth rollout.",
  },
  {
    heading: "Phase 5",
    title: " Maintenance & Support",
    text: "After launch, we offer ongoing support including content updates, bug fixes, performance monitoring, and improvements to keep your website secure, fast, and up to date.",
  },

];

const WorkingProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="feature" className="bg-white px-6 py-30 md:px-20">
      <h1 className="heading-primary text-center mb-20 text-4xl font-bold uppercase"> Our Working Process Steps</h1>

      <div className="flex flex-col md:flex-row gap-8 relative">
        {/* LEFT SIDE – TITLES */}

        <div className="w-full md:w-2/3 transition-all duration-500 ease-in-out">
          <div
            key={activeIndex} // important to trigger animation
            className="opacity-0 animate-fade-in-up"
          >
            <h3 className="text-3xl font-semibold mb-4"
              style={{ color: 'var(--primary)' }}
            >{steps[activeIndex].title}</h3>
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
                className={`relative cursor-pointer transition-colors duration-300 ${activeIndex === index ? "font-bold text-blue-600" : "text-gray-600"
                  }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="w-3 h-3 rounded-full border-2"
                    style={
                      activeIndex === index
                        ? {
                          backgroundColor: 'var(--primary)',
                          borderColor: 'var(--primary)',
                        }
                        : {
                          backgroundColor: 'white',
                          borderColor: '#9CA3AF', // Tailwind's gray-400 hex
                        }
                    }
                  />

                  <span
                    style={{
                      color: activeIndex === index ? 'var(--primary)' : '#4B5563', // gray-600
                      fontWeight: activeIndex === index ? '700' : '400',
                    }}

                  >{step.heading}</span>
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

