


'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { FaTimes } from 'react-icons/fa';

const QuoteForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirement: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, requirement, message } = formData;

    if (!name || !email || !requirement || !message) {
      alert('All fields are required.');
      return;
    }

    try {
      // Save to Firestore
      await addDoc(collection(db, 'quotes'), {
        ...formData,
        timestamp: new Date(),
      });

      // Send email via API
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'quote',
        }),
      });

      setSuccessMessage('Your quote request was submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Submit error', error);
      setSuccessMessage('Submission failed. Please try again.');
    }
  };

  return (
    <div className="fixed top-10 left-20 right-20 bottom-50 h-[60vh] bg-white shadow-lg z-50 p-6 flex flex-col items-center justify-center rounded">
      <button onClick={onClose} className="absolute top-3 right-3 text-xl text-black">
        <FaTimes />
      </button>
      <h2 className="text-2xl font-bold mb-4">Get a Quote</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Requirement</option>
          <option value="Web Design">Web Design</option>
          <option value="App Development">App Development</option>
        </select>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full btn-primary text-white py-2 rounded">
          Submit
        </button>
        {successMessage && (
          <p className="mt-4 text-sm text-green-600">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default QuoteForm;




// 'use client';

// import { useState } from 'react';
// import { db } from '@/lib/firebase';
// import { collection, addDoc } from 'firebase/firestore';
// import { FaTimes } from 'react-icons/fa';

// const QuoteForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     requirement: '',
//     message: '',
//   });
//   const [successMessage, setSuccessMessage] = useState('');



//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, requirement, message } = formData;

//     if (!name || !email || !requirement || !message) {
//       alert('All fields are required.');
//       return;
//     }

//     try {
//       await addDoc(collection(db, 'quotes'), {
//         ...formData,
//         timestamp: new Date(),
//       });
//       setSuccessMessage('Your quote request was submitted successfully!');
//       // alert('Submitted!');
//       onClose();
//     } catch (error) {
//       console.error('Submit error', error);
//       setSuccessMessage('Submission failed. Please try again.');
//       // alert('Submission failed.');
//     }
//   };

//   return (
//     <div className="fixed top-10 left-20 right-20 bottom-50 h-[60vh] bg-white shadow-lg z-50 p-6 flex flex-col items-center justify-center rounded">
//       <button onClick={onClose} className="absolute top-3 right-3 text-xl text-black">
//         <FaTimes />
//       </button>
//       <h2 className="text-2xl font-bold mb-4">Get a Quote</h2>
//       <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
//         <input
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//         <input
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//         <select
//           name="requirement"
//           value={formData.requirement}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select Requirement</option>
//           <option value="Web Design">Web Design</option>
//           <option value="App Development">App Development</option>
//         </select>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//         <button type="submit" className="w-full btn-primary text-white py-2 rounded">
//           Submit
//         </button>
//         {successMessage && (
//           <p className="mt-4 text-sm text-green-600">{successMessage}</p>
//         )}
//         {/* <p className={`mt-4 text-sm ${successMessage.includes('failed') ? 'text-red-600' : 'text-green-600'}`}>
//           {successMessage}
//         </p> */}

//       </form>
//     </div>
//   );
// };

// export default QuoteForm;
