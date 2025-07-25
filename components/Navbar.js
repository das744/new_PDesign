


'use client';

import { useState } from 'react';
import Image from 'next/image';
import QuoteForm from './QuoteForm';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram
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
            <FaMapMarkerAlt className="text-black-600" 
              style={{ color: 'var(--primary)' }}/>
            <span>Mernda, Melbourne</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-black-600" 
              style={{ color: 'var(--primary)' }}/>
            <span>+61 430224546</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-black-600" 
              style={{ color: 'var(--primary)' }}/>
            <span>info@primedesign.com.au</span>
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <a href="https://www.facebook.com/PrimeDesign/ "   style={{ color: 'var(--primary)' }}><FaFacebookF className="hover:text-blue-600 " /></a>
          <a href="https://www.instagram.com/primedesign.aus/ "  style={{ color: 'var(--primary)' }}><FaInstagram className="hover:text-blue-600 " /></a>
          {/* <a href="https://www.linkedin.com/in/4546/  " style={{ color: 'var(--primary)' }}><FaLinkedinIn className="hover:text-blue-600  " /></a> */}
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow px-5 ">
        <div className="flex justify-between items-center">
          <a href="">
          <Image
            src="/logo.webp"
            alt="logo"
            width={120}
            height={80}
            className="rounded-full"
          />
           </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            <li className=" cursor-pointer hover:text-grey-700 text-2xl" onClick={() => handleScroll('about')}> <h2>About</h2></li>
            <li className="cursor-pointer hover:text-grey-700 text-2xl" onClick={() => handleScroll('service')}><h2>Service </h2> </li>
            <li className="cursor-pointer hover:text-grey-700 text-2xl" onClick={() => handleScroll('contact')}><h2>Contact </h2></li>
            <li>
              <button
                onClick={openForm}
                className="btn-primary text-white px-4 py-2 rounded hover:bg-grey-700 text-xl transition"
              >
                <h2 className='text-xl'>
               Get Quote </h2>
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
            <li className="cursor-pointer hover:text-grey-700 text-2xl" onClick={() => handleScroll('about')}>About</li>
            <li className="cursor-pointer hover:text-grey-700 text-2xl" onClick={() => handleScroll('service')}>Service</li>
            <li className="cursor-pointer hover:text-grey-700 text-2xl" onClick={() => handleScroll('contact')}>Contact</li>
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
