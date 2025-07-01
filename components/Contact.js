
'use client';

import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ message: "", type: "" });
  const [userIP, setUserIP] = useState("");

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        setUserIP(data.ip);
      } catch (err) {
        console.error("IP fetch error:", err);
      }
    };
    fetchIP();
  }, []);

  const validateEmail = (email) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse({ message: "", type: "" });

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setResponse({ message: "All fields are required.", type: "error" });
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setResponse({ message: "Please enter a valid email.", type: "error" });
      setLoading(false);
      return;
    }

    try {
      // Save to Firestore
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        ip: userIP,
        timestamp: new Date(),
      });

      // Send email via API
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          ip: userIP,
          type: "contact",
        }),
      });

      setResponse({ message: "Message sent successfully!", type: "success" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Firestore error:", error);
      setResponse({ message: "Something went wrong. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center md:flex-row gap-10 px-6 md:px-20 py-16 bg-gray-50">
      {/* Contact Info */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl text-gray font-semibold mb-4">Contact Information</h2>
        <h2 className=" text-xl flex items-center gap-2 mb-2">
          <FaMapMarkerAlt /> Callaway Crescent, Mernda - Victoria
        </h2>
        <h2 className="text-xl flex items-center gap-2 mb-2">
          <FaPhoneAlt /> +61 0430224546
        </h2>
        <h2 className="text-xl flex items-center gap-2 mb-6">
          <FaEnvelope /> info@primedesign.com.au
        </h2>
        <div className="flex space-x-4 text-gray-600">
          <a href="https://www.facebook.com/PrimeDesign/" className="hover:bg-[var(--primary)] text-white text-2xl">
            <FaFacebookF />
          </a>
        
          <a href="https://www.instagram.com/primedesign.aus/" className="hover:bg-[var(--primary)] text-white text-2xl">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
        <h2 className=" heading-primary  text-2xl font-semibold mb-2">Get in Touch</h2>
        <p className="mb-6 text-gray-600">
          Have questions? Reach out, and we’ll be happy to assist you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
              style={{
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
        }}
            type="submit"
            disabled={loading}
            className=" text-white px-6 py-2 rounded hover:bg-[var(--primary)] text-white disabled:bg-blue-400 transition-colors"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {response.message && (
          <p
            className={`mt-4 text-sm font-medium ${
              response.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {response.message}
          </p>
        )}
      </div>
    </div>
  );
}




// "use client";

// import { useEffect, useState } from "react";
// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
// } from "react-icons/fa";

// import { db } from "@/lib/firebase";
// import { collection, addDoc } from "firebase/firestore";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState({ message: "", type: "" });
//   const [userIP, setUserIP] = useState("");

//   useEffect(() => {
//     const fetchIP = async () => {
//       try {
//         const res = await fetch("https://api.ipify.org?format=json");
//         const data = await res.json();
//         setUserIP(data.ip);
//       } catch (err) {
//         console.error("IP fetch error:", err);
//       }
//     };
//     fetchIP();
//   }, []);

//   const validateEmail = (email) => {
//     return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponse({ message: "", type: "" });

//     const { name, email, message } = formData;

//     if (!name || !email || !message) {
//       setResponse({ message: "All fields are required.", type: "error" });
//       setLoading(false);
//       return;
//     }

//     if (!validateEmail(email)) {
//       setResponse({ message: "Please enter a valid email.", type: "error" });
//       setLoading(false);
//       return;
//     }

//     try {
//       await addDoc(collection(db, "messages"), {
//         name,
//         email,
//         message,
//         ip: userIP,
//         timestamp: new Date(),
//       });

//       setResponse({ message: "Message sent successfully!", type: "success" });
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Firestore error:", error);
//       setResponse({ message: "Something went wrong. Please try again.", type: "error" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div id="contact" className="flex flex-col md:flex-row gap-10 px-6 md:px-20 py-16 bg-gray-50">
//       {/* Contact Info */}
      
//       <div className="w-full md:w-1/2">
//         <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
//         <p className="flex items-center gap-2 mb-2">
//           <FaMapMarkerAlt /> 12 Nicolson Road, Mill Park - Victoria
//         </p>
//         <p className="flex items-center gap-2 mb-2">
//           <FaPhoneAlt /> +61 0421 3265
//         </p>
//         <p className="flex items-center gap-2 mb-6">
//           <FaEnvelope /> info.northernmelbourneguitarlesson.com
//         </p>
//         <div className="flex space-x-4 text-gray-600">
//           <a href="#" className="hover:text-blue-500">
//             <FaFacebookF />
//           </a>
//           <a href="#" className="hover:text-blue-400">
//             <FaTwitter />
//           </a>
//           <a href="#" className="hover:text-blue-700">
//             <FaLinkedinIn />
//           </a>
//         </div>
//       </div>

//       {/* Contact Form */}
//       <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
//         <p className="mb-6 text-gray-600">
//           Have questions? Reach out, and we’ll be happy to assist you.
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//           <button
//             type="submit"
//             disabled={loading}
//             className=" text-blue px-6 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>

//         {response.message && (
//           <p
//             className={`mt-4 text-sm font-medium ${
//               response.type === "success" ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             {response.message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
