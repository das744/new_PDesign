'use client';
import { FaCode, FaPaintBrush, FaMobileAlt, FaChartLine, FaLock, FaCloud } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Web Development',
    icon: FaCode,
    description: 'Building responsive and robust websites.',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    icon: FaPaintBrush,
    description: 'Designing user-friendly interfaces and experiences.',
  },
  {
    number: '03',
    title: 'Mobile Apps',
    icon: FaMobileAlt,
    description: 'Creating smooth mobile applications.',
  },
  {
    number: '04',
    title: 'SEO Optimization',
    icon: FaChartLine,
    description: 'Improving search engine rankings.',
  },
  {
    number: '05',
    title: 'Security',
    icon: FaLock,
    description: 'Ensuring data privacy and protection.',
  },
  {
    number: '06',
    title: 'Cloud Services',
    icon: FaCloud,
    description: 'Scalable and reliable cloud solutions.',
  },
];

const Services = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('services');
      if (section && window.scrollY + window.innerHeight > section.offsetTop + 100) {
        setAnimate(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="service" className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`p-6 border rounded-xl shadow-lg transition-all duration-700 ease-in-out transform ${
                  animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                } delay-${index * 100}`}
              >
                {/* Icon and Number in one line */}
                <div className="flex items-center justify-between mb-4">
                <div className="btn-primary text-white text-2xl p-3 rounded-full">
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
