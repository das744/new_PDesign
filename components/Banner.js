'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaWordpress, FaReact } from 'react-icons/fa';
import { MdCloudQueue } from 'react-icons/md';
import { SiFirebase, SiNextdotjs, SiMongodb } from 'react-icons/si';

const Banner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (

    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-30 bg-gray-100">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        {/* Animated Heading */}


        <h1
          className={`text-4xl font-bold transition-all duration-700 ${animate ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
        >
          Welcome to{' '}
          <span
            className="text-transparent bg-clip-text px-2"
            style={{
              backgroundImage: 'linear-gradient(to right, var(--primary), var(--secondary))',
            }}
          >

            PrimeDesign
          </span>
          for your online existence for

          <span
            className="text-transparent bg-clip-text px-2"
            style={{
              backgroundImage: 'linear-gradient(to right, var(--primary), var(--secondary))',
            }}
          >
            your business
          </span>
        </h1>

        {/* Animated Paragraph */}
        <p
          className={`text-lg text-gray-600 transition-all duration-700 delay-150 ${animate ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
        >
          This is your supporting text explaining the main point of the banner.
        </p>

        {/* Animated Button */}
        <button
          className={`btn-primary px-6 py-3 rounded ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
        >
          Call to Action
        </button>
        <div className="flex items-center gap-4 py-5">
          <a href="#" title="WordPress">
            <FaWordpress className="text-xl text-primary hover:text-blue-600 transition" />
          </a>
          <a href="#" title="React">
            <FaReact className="text-2xl text-primary hover:opacity-75 transition" />
          </a>
          <a href="#" title="Next.js">
            <SiNextdotjs className="text-xl text-primary  hover:text-black transition" />
          </a>
          <a href="#" title="CDN">
            <MdCloudQueue className="text-xl text-primary  hover:text-blue-600 transition" />
          </a>
          <a href="#" title="Firebase">
            <SiFirebase className="text-xl text-primary  hover:text-yellow-500 transition" />
          </a>

          <a href="#" title="MongoDB">
            <SiMongodb className="text-xl text-primary  hover:text-green-600 transition" />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col space-y-6">
        {/* Top section */}
        <div className="flex items-end space-x-4">
          {/* Image 1 - From Bottom */}
          <Image
            src="/img1.png"
            alt="Small"
            width={100}
            height={150}
            className={`transition-all duration-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          />

          {/* Image 2 - From Right */}
          <Image
            src="/small-image.jpg"
            alt="Tall Rectangle"
            width={300}
            height={400}
            className={`rounded-lg transition-all duration-700 delay-100 ${animate ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
          />
        </div>

        {/* Bottom section */}
        <div className="flex items-center space-x-4">
          {/* Image 3 - From Left */}
          <Image
            src="/img4.jpg"
            alt="Right Side Tall"
            width={200}
            height={400}
            className={`rounded-lg transition-all duration-700 delay-200 ${animate ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
          />

          {/* Image 4 - From Top */}
          <Image
            src="/img9.png"
            alt="Right Side Tall"
            width={200}
            height={400}
            className={`rounded-lg transition-all duration-700 delay-300 ${animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
              }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
