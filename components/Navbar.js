// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import Link from "next/link";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// const Navbar = () => {
//   const [dropdown, setDropdown] = useState(null);

//   const toggleDropdown = (menu) => {
//     setDropdown(dropdown === menu ? null : menu);
//   };

//   return (
//     <>
//       {/* Top Bar */}
//       <div className="bg-gray-100 text-gray-700 text-sm px-6 py-4 flex justify-between items-center">
//         <div className="flex items-center gap-6">
//           <div className="flex items-center gap-2">
//             <FaMapMarkerAlt className="text-black-600" />
//             <span>123 Main St, City</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaPhoneAlt className="text-black-600" />
//             <span>+123 456 7890</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaEnvelope className="text-black-600" />
//             <span>info@example.com</span>
//           </div>
//         </div>
//         <div className="flex items-center gap-4">
//           <a href="#"><FaFacebookF className="hover:text-blue-600" /></a>
//           <a href="#"><FaTwitter className="hover:text-blue-600" /></a>
//           <a href="#"><FaLinkedinIn className="hover:text-blue-600" /></a>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="bg-white text-gray-800 px-5 py-1 shadow">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center ">
//             <Image
//               src="/logo.jpg"
//               alt="logo"
//               width={100}
//               height={70}
//               className="rounded-full"
//             />
//           </div>
//           <ul className="flex gap-6 items-center">
//             {['About', 'Service', 'Contact'].map((menu) => (
//               <li
//                 key={menu}
//                 className="relative group cursor-pointer"
//                 onClick={() => toggleDropdown(menu)}
//               >
//                 <span className="hover:text-blue-600 transition">{menu}</span>
//                 {dropdown === menu && (
//                   <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md z-10">
//                     <li className="px-4 py-2 hover:bg-gray-200">{menu} 1</li>
//                     <li className="px-4 py-2 hover:bg-gray-200">{menu} 2</li>
//                     <li className="px-4 py-2 hover:bg-gray-200">{menu} 3</li>
//                   </ul>
//                 )}
//               </li>
//             ))}
//             <li>
//               <Link href="/quote">
//                 <button className="btn-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                   Get Quote
//                 </button>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


'use client';

import { useState } from 'react';
import Image from 'next/image';
import QuoteForm from './QuoteForm';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger icons

const Navbar = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openForm = () => setShowQuoteForm(true);
  const closeForm = () => setShowQuoteForm(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-700 text-sm px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-black-600" />
            <span>123 Main St, City</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-black-600" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-black-600" />
            <span>info@example.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#"><FaFacebookF className="hover:text-blue-600" /></a>
          <a href="#"><FaTwitter className="hover:text-blue-600" /></a>
          <a href="#"><FaLinkedinIn className="hover:text-blue-600" /></a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow px-5 py-3">
        <div className="flex justify-between items-center">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={100}
            height={70}
            className="rounded-full"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            <li className="cursor-pointer hover:text-blue-600" onClick={() => handleScroll('about')}>About</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => handleScroll('service')}>Service</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => handleScroll('contact')}>Contact</li>
            <li>
              <button
                onClick={openForm}
                className="btn-primary text-white px-4 py-2 rounded hover:bg-grey-700 transition"
              >
                Get Quote
              </button>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="flex flex-col md:hidden bg-white mt-4 rounded shadow p-4 gap-4 z-50">
            <li className="cursor-pointer hover:text-blue-600" onClick={() => handleScroll('about')}>About</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => handleScroll('service')}>Service</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => handleScroll('contact')}>Contact</li>
            <li>
              <button
                onClick={openForm}
                className="btn-primary text-white w-full px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Get Quote
              </button>
            </li>
          </ul>
        )}
      </nav>

      {/* Quote Form */}
      {showQuoteForm && <QuoteForm onClose={closeForm} />}
    </>
  );
};

export default Navbar;
