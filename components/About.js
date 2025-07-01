

'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <section id="about" className="px-10 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Images */}
        <div className="relative w-full h-[400px] flex items-center">
          {/* Big Image */}
          <div
            className={`relative w-104 h-86 transition-transform duration-700 ${
              animate ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <Image
              src="/img10.webp"
              alt="Big Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Small Image - Overlapping from left */}
          <div
            className={`absolute top-10 -left-10 w-35 h-60 transition-all duration-700 delay-300 ${
              animate ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
            }`}
            style={{ zIndex: 10 }}
          >
            <Image
              src="/img13.webp"
              alt="Small Overlapping Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-md border-4 border-white"
            />
          </div>
        </div>

        {/* Right - Text and CTA */}
        <div
          className={`space-y-6 transition-all duration-700 ${
            animate ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          <h2 className=" heading-primary text-4xl font-bold uppercase text-gray-900">About Us</h2>
          <p className="text-gray-600 text-lg">
            We create engaging digital experiences that bridge creativity and strategy. Let’s build something impactful together.
          </p>
          <button className="btn-primary text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            <a href="#contact" title="contact">
            Learn More </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
