// "use client";

// import { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import styles from "./About.module.css";

// const imageData = [
//   {
//     bigImgSrc: "/img/img2.png",
//     imgSrc:  "/img/img2.png",
//     title: "Experienced Instructors",
//     text: "Our team consists of professional guitarists with years of teaching and performance experience, ensuring you get top-notch instruction.",
//   },
//   {
//     bigImgSrc: "/img/img10.jpg",
//     imgSrc: "/img/img10.jpg",
//     title: "Tailored Lessons",
//     text: "We understand that every student is different, so we personalize our lessons to fit your skill level and musical interests.",
//   },
//   {
//     bigImgSrc: "/img/img11.jpg",
//     imgSrc:  "/img/img11.jpg",
//     title: "Flexible Learning Options",
//     text: "Learn at your own pace with in-person or online lessons, designed to fit your schedule.",
//   },
//   {
//     bigImgSrc: "/img/img3.png",
//     imgSrc:  "/img/img3.png",
//     title: "Passionate About Music",
//     text: "We are committed to nurturing a love for music and helping students grow as musicians, no matter their journey.",
//   },
//   {
//     bigImgSrc: "/img/img9.jpg",
//     imgSrc:  "/img/img9.jpg",
//     title: "All Ages & Levels Welcome",
//     text: "Whether you're just starting or looking to perfect your technique, we offer lessons for all ages and levels.",
//   },
// ];

// const About = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     gsap.fromTo(
//       `.${styles.infoBox}`,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );

//     gsap.fromTo(
//       `.${styles.numbers}`,
//       { opacity: 0, x: -50 },
//       { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
//     );

//     // Animate big image transition
//     gsap.fromTo(
//       `.${styles.bigImage}`,
//       { opacity: 0, scale: 1.05 },
//       { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
//     );
//   }, [currentIndex]);

//   return (
//     <section className={styles.aboutSection} id="about">
//       <div className={styles.aboutHeading}>
//         <h2>About</h2>
//       </div>
//       <div className={styles.imageContainer}>
//         {/* Dynamically update big image based on currentIndex */}
//         <img className={styles.bigImage} src={imageData[currentIndex].bigImgSrc} alt="Big Image" />
        
//         <div className={styles.infoBox}>
//           <img src={imageData[currentIndex].imgSrc} alt="Small Image" className={styles.smallImage} />
//           <h3>{imageData[currentIndex].title}</h3>
//           <p>{imageData[currentIndex].text}</p>
//         </div>
//         <div className={styles.numbers}>{`0${currentIndex + 1} / 05`}</div>
//       </div>
//     </section>
//   );
// };

// export default About;


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
              src="/img10.png"
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
              src="/img13.png"
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
          <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
          <p className="text-gray-600 text-lg">
            We create engaging digital experiences that bridge creativity and strategy. Let’s build something impactful together.
          </p>
          <button className="btn-primary text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
