'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/img5.webp',
    smallImage: '/small1.webp',
    heading: 'Innovative Solutions',
    text: 'We bring your ideas to life with cutting-edge technology and design.',
    button: 'Discover More',
  },
  {
    image: '/img8.webp',
    smallImage: '/small4.webp',
    heading: 'Creative Strategies',
    text: 'Tailored strategies that drive results and boost your brand visibility.',
    button: 'View Services',
  },
  {
    image: '/proj1.webp',
    smallImage: '/small3.webp',
    heading: 'Smart Experiences',
    text: 'Creating intuitive digital experiences that engage and inspire.',
    button: 'Get Started',
  },
];

const Features = () => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 300); // duration of exit animation
    }, 5000); // change every 5s

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="px-6 py-16 " id="feature">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 h-[500px] relative flex items-center justify-center">
  {/* Small overlapping image */}
  <div
    className={`absolute -left-[10px] top-[100px] z-10 transition-all duration-700 ease-in-out ${
      animate ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-5'
    }`}
  >
    <Image
      src={slide.smallImage}
      alt="Small Banner"
      width={300}
      height={70}
      className="rounded shadow-md"
    />
  </div>

  {/* Main big image */}
  <div
    className= {`w-[90%] h-[90%] transition-all duration-700 ease-in-out ${
      animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
    }`}
    style={{ marginLeft: '20px' }}
  >
    <Image
      src={slide.image}
      alt={slide.heading}
      layout="fill"
      objectFit="cover"
      className=""
    />
  </div>
</div>




        {/* Right: Text */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          {/* Heading Animation */}
          <h2
            className={`text-4xl font-bold uppercase text-gray-900 transition-all duration-700 ${
              animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          heading-primary
          
          >
            {slide.heading}
          </h2>

          {/* Text Animation */}
          <p
            className={`text-lg text-gray-600 transition-all duration-700 delay-100 ${
              animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {slide.text}
          </p>

          {/* Button Animation */}
          <button
            className={`btn-primary text-white px-6 py-3 rounded hover:bg-blue-700 transition-all duration-700 delay-200 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
              <a href="#contact" title="contact">
            {slide.button}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
