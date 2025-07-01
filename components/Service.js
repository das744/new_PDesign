'use client';
import { useEffect, useRef, useState } from 'react';
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaChartLine,
  FaLock,
  FaCloud,
} from 'react-icons/fa';

const services = [
  {
    number: '01',
    title: 'Web Development',
    icon: FaCode,
    description:
      'We build fast, secure, and scalable websites tailored to your business needs. From static pages to dynamic web apps, our development ensures clean code, responsive design, and optimal performance across all devices.',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    icon: FaPaintBrush,
    description:
      'Our design process focuses on delivering intuitive and visually appealing interfaces. We craft seamless user experiences by combining modern aesthetics with strategic design thinking that keeps users engaged and informed.',
  },
  {
    number: '03',
    title: 'Mobile Apps',
    icon: FaMobileAlt,
    description:
      'We develop smooth, responsive mobile applications for iOS and Android using the latest technologies. Whether it’s a native app or cross-platform, we focus on performance, functionality, and user-friendly design.',
  },
  {
    number: '04',
    title: 'SEO Optimization',
    icon: FaChartLine,
    description:
      'Our SEO strategies are designed to improve your website’s visibility on search engines. We handle on-page and off-page SEO, technical audits, and keyword optimization to drive organic traffic and boost rankings.',
  },
  {
    number: '05',
    title: 'Security',
    icon: FaLock,
    description:
      'We implement best-in-class security practices to protect your website and user data. From SSL certificates to secure coding and threat detection, we ensure your online presence is safe and trustworthy.',
  },
  {
    number: '06',
    title: 'Cloud Services',
    icon: FaCloud,
    description:
      'We help you scale efficiently with cloud-based solutions. Our services include cloud hosting, backups, database integration, and deployment using platforms like AWS, Google Cloud, and others.',
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="service" ref={sectionRef} className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="heading-primary text-4xl uppercase font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`p-6 border rounded-xl shadow-lg transition-all duration-700 ease-in-out transform ${
                  animate
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon and Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-500 text-white text-2xl p-3 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
  }}
                  >
                    <IconComponent />
                  </div>
                  <div className="text-sm font-bold text-gray-400">#{service.number}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
