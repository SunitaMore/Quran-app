
// import { Link } from 'react-router-dom';
// import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'; // Tailwind Heroicons


// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">

//   {/* Left: Contact Info */}
//   <div className="hidden md:flex items-center space-x-6 text-gray-600 text-sm">
//     <div className="flex items-center space-x-1">
//       <EnvelopeIcon className="w-5 h-5 text-teal-600" />
//       <span>info@example.com</span>
//     </div>
//     <div className="flex items-center space-x-1">
//       <PhoneIcon className="w-5 h-5 text-teal-600" />
//       <span>+91-9876543210</span>
//     </div>
//     <div className="flex items-center space-x-1">
//       <MapPinIcon className="w-5 h-5 text-teal-600" />
//       <span>New Delhi, India</span>
//     </div>
//   </div>

//   {/* Right: Navigation Links */}
//   <ul className="hidden md:flex space-x-4 text-gray-700 font-medium">
//     <li>
//       <Link
//         to="/"
//         className="text-teal-600 hover:text-teal-700 px-3 py-2 rounded transition duration-300"
//       >
//         Home
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/about"
//         className="text-teal-600 hover:text-teal-700 px-3 py-2 rounded transition duration-300"
//       >
//         About
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/values"
//         className="text-teal-600 hover:text-teal-700 px-3 py-2 rounded transition duration-300"
//       >
//         How To Works
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/services"
//         className="text-teal-600 hover:text-teal-700 px-3 py-2 rounded transition duration-300"
//       >
//         Our Services
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/search"
//         className="text-teal-600 hover:text-teal-700 px-3 py-2 rounded transition duration-300"
//       >
//         Contact Us
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/account"
//         className="text-teal-600 hover:text-teal-700 px-3 py-2 rounded transition duration-300"
//       >
//         Login
//       </Link>
//     </li>
//   </ul>
// </nav>
//   );
// }

import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Navbar() {
  const navButtonClass =
    "bg-[#02588F] text-white px-4 py-2 rounded-md border-2 border-gray-400 " +
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_6px_rgba(0,0,0,0.3)] " +
    "hover:bg-[#068479] active:translate-y-[2px] transition duration-200";

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50">
      
      {/* Left: Contact Info */}
      <div className="flex items-center space-x-6 text-black-600 text-sm mb-2 md:mb-0">
        <div className="flex items-center space-x-1">
          <FaEnvelope />
          <span>info@example.com</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaPhoneAlt />
          <span>+91 98765 43210</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaMapMarkerAlt />
          <span>New Delhi, India</span>
        </div>
      </div>

      {/* Right: Navigation Buttons */}
      <ul className="flex flex-wrap justify-center md:justify-end space-x-2 text-sm font-medium">
        <li><Link to="/" className={navButtonClass}>Home</Link></li>
        <li><Link to="/about" className={navButtonClass}>About Us</Link></li>
        <li><Link to="/values" className={navButtonClass}>How It Works</Link></li>
        <li><Link to="/services" className={navButtonClass}>Our Services</Link></li>
        <li><Link to="/search" className={navButtonClass}>Contact Us</Link></li>
        <li><Link to="/account" className={navButtonClass}>Login</Link></li>
      </ul>
    </nav>
  );
}
