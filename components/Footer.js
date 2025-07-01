'use client';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We are a leading web solutions company dedicated to providing exceptional digital services that help your business thrive online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#feature">Process</a></li>
             <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
           
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Web Design</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        {/* Subscribe & Social */}
        <div className="md:col-span-1">
          {/* <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-4">
            Get the latest updates and offers directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3 mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded text-gray-800"
            />
            <button className=" px-4 py-2 rounded hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form> */}

          <div className="flex items-center gap-4 text-white">
            <a href="#" className="hover:bg-[var(--primary)] text-white"><FaFacebookF /></a>
            {/* <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a> */}
            <a href="#" className="hover:bg-[var(--primary)] text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PrimeDesign. All rights reserved.
      </div>
    </footer>
  );
}
