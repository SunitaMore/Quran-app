

// //import logo from '../assets/logo.png';
// import About from './About';
// import Values from './Values';
// import Services from './Services';
// import Search from './Contact.jsx';
// import Account from './Account.jsx';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import logo from "../assets/logo.png";
// import logo1 from "../assets/logo1.png";
// import slide1 from "../assets/slide1.jpg";
// import slide2 from "../assets/slide2.jpg";
// import slide3 from "../assets/slide3.jpg"; // Add your own images
// import slide4 from "../assets/slide4.png"; // Add your own images
// import slide5 from "../assets/slide5.png"; // Add your own images
// import slide6 from "../assets/slide6.png"; // Add your own images
// import slide7 from "../assets/slide7.png"; // Add your own images
// import { useState } from "react";

// import introVideo from "../assets/introVideo.mp4"; // Your video file
// import { Link } from 'react-router-dom';

// export default function Home() {
//   const [expanded, setExpanded] = useState(false);

//   const text = `Want to honor someone you’ve lost? With our Esal-e-Sawab services, you can send Quran recitation, dua, and charity on behalf of your loved ones — from anywhere in the world. Each act is carried out with care, sincerity, and Islamic principles. Message us today to begin.`;

//   // Heights in px - adjust these to fit your content height exactly!
//   const collapsedHeight = 120; // approximate height for 2 lines of text + button
//   const expandedHeight = 260;  // approximate height for full text + button

//   return (
//     <div className="font-sans">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6 shadow-md">
//         <div
//           className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between"
//           style={{ minHeight: expanded ? expandedHeight : collapsedHeight }}
//         >
//           {/* Left Content */}
//           <div
//             className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
//             style={{ minHeight: expanded ? expandedHeight : collapsedHeight }}
//           >
//             {/* Logo on top */}
//             <Link to="/" className="flex items-center justify-center md:justify-start mb-4 ml-40">
//               <img
//                 src={logo}
//                 alt="Dua Hub Logo"
//                 className="w-34 h-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
//               />
//             </Link>

//             {/* Welcome Text */}
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-[#02588F] mb-4">
//               Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02588F] to-[#068479]">Dua Hub</span>
//             </h1>

//             <div className="text-gray-800 text-lg leading-relaxed">
//               <p
//                 className={`text-gray-800 text-lg leading-relaxed transition-all duration-300 overflow-hidden ${
//                   !expanded ? "line-clamp-2" : ""
//                 }`}
//               >
//                 {text}
//               </p>

//               <button
//                 onClick={() => setExpanded(!expanded)}
//                 className="inline-block mt-4 px-6 py-2 bg-[#068479] text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300"
//               >
//                 {expanded ? "Show Less" : "Explore Now"}
//               </button>
//             </div>
//           </div>

//           {/* Right Side Image Carousel */}
//           <div
//             className="md:w-1/2 text-center"
//             style={{ minHeight: expanded ? expandedHeight : collapsedHeight }}
//           >
//             <Carousel
//               autoPlay
//               infiniteLoop
//               showThumbs={false}
//               showStatus={false}
//               interval={4000}
//               transitionTime={800}
//               className="rounded-xl shadow-lg w-full max-w-5xl mx-auto"
//             >
//               {/* Logo Slide */}
//               <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
//                 <img src={logo1} alt="Logo" className="w-full h-full object-cover" />
//               </div>

//               {/* Image Slides */}
//               <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
//                 <img src={slide1} alt="Slide 1" className="w-full h-full object-cover" />
//               </div>
//               <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
//                 <img src={slide2} alt="Slide 2" className="w-full h-full object-cover" />
//               </div>
//               <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
//                 <img src={slide3} alt="Slide 3" className="w-full h-full object-cover" />
//               </div>
//               <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
//                 <img src={slide4} alt="Slide 4" className="w-full h-full object-cover" />
//               </div>
//               <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
//                 <img src={slide5} alt="Slide 5" className="w-full h-full object-cover" />
//               </div>
//               <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
//                 <img src={slide6} alt="Slide 6" className="w-full h-full object-cover" />
//               </div>
//               <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
//                 <img src={slide7} alt="Slide 7" className="w-full h-full object-cover" />
//               </div>

//               {/* Video Slide */}
//               <div className="aspect-video bg-black flex items-center justify-center overflow-hidden rounded-xl">
//                 <video
//                   className="w-full h-full object-cover"
//                   controls
//                   muted
//                   preload="metadata"
//                 >
//                   <source src={introVideo} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </Carousel>
//           </div>
//         </div>
//       </section>

//       {/* Content Sections */}
//       <div className="max-w-6xl mx-auto px-4 py-16 space-y-24 text-center">
//         {/* About Section */}
//         <Section title="About" id="about" titleClassName="text-teal-600">
//           <About />
//         </Section>

//         <Section title="How to Works" id="values" titleClassName="text-teal-600">
//           <Values />
//         </Section>

//         <Section title="Our Services" id="tafsir" titleClassName="text-teal-600">
//           <Services />
//         </Section>

//         <Section title="Contact Us" id="search" titleClassName="text-teal-600">
//           <Search />
//         </Section>

//         <Section title="Login" id="account" titleClassName="text-teal-600">
//           <Account />
//         </Section>
//       </div>
//     </div>
//   );
// }

// // Reusable section wrapper with styled headings
// function Section({ title, id, children }) {
//   return (
//     <section id={id} className="bg-white shadow-md rounded-xl p-6">
//       <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 border-b border-green-200 pb-2">
//         {title}
//       </h2>
//       {children}
//     </section>
//   );
// }
//import logo from '../assets/logo.png';
import About from './About';
import Values from './Values';
import Services from './Services';
import Search from './Contact.jsx';
import Account from './Account.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";
import slide6 from "../assets/slide6.png";
import slide7 from "../assets/slide7.png";
import introVideo from "../assets/introVideo.mp4";
import { Link } from 'react-router-dom';

export default function Home() {
  const text = `Want to honor someone you’ve lost? With our Esal-e-Sawab services, you can send Quran recitation, and dua on behalf of your loved ones — from anywhere in the world. Each act is carried out with care, sincerity, and Islamic principles. Message us today to begin.`;

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6 shadow-md mt-0 pt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between mt-0">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            {/* Logo on top */}
            <Link to="/" className="flex items-center justify-center md:justify-start mb-4 ml-40">
              <img
                src={logo}
                alt="Dua Hub Logo"
                className="w-34 h-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Welcome Text */}
          {/* Welcome Text */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#02588F] mb-4">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02588F] to-[#068479]">Dua Hub</span>
            </h1>
<div className="text-gray-800 text-lg leading-relaxed">
  <p className="text-gray-800 text-lg leading-relaxed">
    {text}
  </p>

  {/* Mobile-only Login Button */}
  <Link
    to="/account"
    className="sm:hidden bg-[#02588F] text-white px-4 py-2 rounded-full text-center mt-4 block w-full"
  >
    Login
  </Link>

  {/* Explore Now Button */}
  <a
    href="#about"
    className="inline-block mt-4 px-6 py-2 bg-[#068479] text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-full sm:w-auto text-center"
  >
    Explore Now
  </a>
</div>


          </div>
          {/* Right Side Image Carousel */}
          <div className="md:w-1/2 text-center">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={4000}
              transitionTime={800}
              className="rounded-xl shadow-lg w-full max-w-5xl mx-auto"
            >
              <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
                <img src={logo1} alt="Logo" className="w-full h-full object-cover" />
              </div>

              <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
                <img src={slide1} alt="Slide 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
                <img src={slide2} alt="Slide 2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
                <img src={slide3} alt="Slide 3" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
                <img src={slide4} alt="Slide 4" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
                <img src={slide5} alt="Slide 5" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
                <img src={slide6} alt="Slide 6" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
                <img src={slide7} alt="Slide 7" className="w-full h-full object-cover" />
              </div>

              <div className="aspect-video bg-black flex items-center justify-center overflow-hidden rounded-xl">
                <video
                  className="w-full h-full object-cover"
                  controls
                  muted
                  preload="metadata"
                >
                  <source src={introVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Content Sections */}
     
<div className="w-full space-y-24 text-center">
  {/* About Section */}
  <Section title="About" id="about" titleClassName="text-teal-600" className="px-6 md:px-20 py-12">
    <About />
  </Section>

  <Section title="How to Works" id="values" titleClassName="text-teal-600" className="px-6 md:px-20 py-12">
    <Values />
  </Section>

  <Section title="Our Services" id="tafsir" titleClassName="text-teal-600" className="px-6 md:px-20 py-12">
    <Services />
  </Section>

  <Section title="Contact Us" id="search" titleClassName="text-teal-600" className="px-6 md:px-20 py-12">
    <Search />
  </Section>

  {/* <Section title="Login" id="account" titleClassName="text-teal-600" className="px-6 md:px-20 py-12">
    <Account />
  </Section> */}
</div>

    </div>
  );
}

// Reusable section wrapper
function Section({ title, id, children, titleClassName = "", titleStyle = {} }) {
  return (
    <section id={id} className="bg-white shadow-md rounded-xl p-6">
      <h2 className={`text-3xl font-bold ${titleClassName}`} style={titleStyle}>{title}</h2>
        
      {children}
    </section>
  );
}
