
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
// import slide3 from "../assets/slide3.jpg";
// import slide4 from "../assets/slide4.png";
// import slide5 from "../assets/slide5.png";
// import slide6 from "../assets/slide6.png";
// import slide7 from "../assets/slide7.png";
// import introVideo from "../assets/introVideo.mp4";
// import { Link } from 'react-router-dom';

// export default function Home() {
//   const text = `Want to honor someone you’ve lost? With our Esal-e-Sawab services, you can send Quran recitation, and dua on behalf of your loved ones — from anywhere in the world. Each act is carried out with care, sincerity, and Islamic principles. Message us today to begin.`;

//   return (
//     <div className="font-sans">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6 shadow-md mt-0 pt-12">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between mt-0">
//           {/* Left Content */}
//           <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
//             {/* Logo on top */}
//             {/* <Link to="/" className="flex items-center justify-center md:justify-start mb-4 ml-40">
//               <img
//                 src={logo}
//                 alt="Dua Hub Logo"
//                 className="w-34 h-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
//               />
//             </Link> */}

//             {/* Welcome Text */}
//           {/* Welcome Text */}
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-[#02588F] mb-4">
//               Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02588F] to-[#068479]">Dua Hub</span>
//             </h1>
// <div className="text-gray-800 text-lg leading-relaxed">
//   <p className="text-gray-800 text-lg leading-relaxed">
//     {text}
//   </p>

//   {/* Mobile-only Login Button */}
//   <Link
//     to="/account"
//     className="sm:hidden bg-[#02588F] text-white px-4 py-2 rounded-full text-center mt-4 block w-full"
//   >
//     Login
//   </Link>

//   {/* Explore Now Button */}
//   <a
//     href="#about"
//     className="inline-block mt-4 px-6 py-2 bg-[#068479] text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-full sm:w-auto text-center"
//   >
//     Explore Now
//   </a>
// </div>


//           </div>
//           {/* Right Side Image Carousel */}
//           <div className="md:w-1/2 text-center">
//             <Carousel
//               autoPlay
//               infiniteLoop
//               showThumbs={false}
//               showStatus={false}
//               interval={4000}
//               transitionTime={800}
//               className="rounded-xl shadow-lg w-full max-w-5xl mx-auto "
//             >
//               <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
//                 <img src={logo1} alt="Logo" className="w-full h-full object-cover" />
//               </div>

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
     
// <div className="w-full space-y-24 text-center">
//   {/* About Section */}
//   <Section title="About" id="about" titleClassName="text-teal-600" className="px-6 md:px-20 py-12">
//     <About />
//   </Section>

//   <Section title="How to Works" id="values" titleClassName="text-teal-600" className="px-6 md:px-20 py-12">
//     <Values />
//   </Section>

//   <Section title="Our Services" id="tafsir" titleClassName="text-teal-600" className="px-6 md:px-20 py-12">
//     <Services />
//   </Section>

//   <Section title="Contact Us" id="search" titleClassName="text-teal-600" className="px-6 md:px-20 py-12">
//     <Search />
//   </Section>

//   {/* <Section title="Login" id="account" titleClassName="text-teal-600" className="px-6 md:px-20 py-12">
//     <Account />
//   </Section> */}
// </div>

//     </div>
//   );
// }

// // Reusable section wrapper
// function Section({ title, id, children, titleClassName = "", titleStyle = {} }) {
//   return (
//     <section id={id} className="bg-white shadow-md rounded-xl p-6">
//       <h2 className={`text-3xl font-bold ${titleClassName}`} style={titleStyle}>{title}</h2>
        
//       {children}
//     </section>
//   );
// }


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";
import slide6 from "../assets/slide6.png";
import slide7 from "../assets/slide7.png";
import slide8 from "../assets/slide8.png";
import s1 from "../assets/s1.png";


import introVideo from "../assets/introVideo.mp4";
import About from "./About";
import Values from "./Values";
import Services from "./Services";
import Search from "./Contact.jsx";
import { Link } from "react-scroll";

export default function Home() {
  const text = `Want to honor someone you’ve lost? With our Esal-e-Sawab services, you can send Quran recitation and dua on behalf of your loved ones — from anywhere in the world. Each act is carried out with care, sincerity, and Islamic principles. Message us today to begin.`;

  return (
    <div className="font-sans overflow-x-hidden w-full">

      {/* Hero Section */}
      <section className="relative h-[100vh] w-full overflow-x-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
            transitionTime={800}
            showArrows={false}
            swipeable
            emulateTouch
            className="w-full h-full"
          >
            {[s1,slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8].map((img, i) => (
              <div key={i} className="h-[100vh] w-full">
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
           <div className="h-[100vh]">
  <video
    className="w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  >
    <source src={introVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

          </Carousel>
        </div>

        {/* Centered Text + Button */}
        <div className="absolute inset-0 z-10 flex items-start justify-start px-6 py-10 text-left ">
  <div className="bg-black/80 p-6 rounded-md max-w-xl text-white backdrop-blur-sm mt-40">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#02588F] mb-4">
      Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02588F] to-[#068479]">Dua Hub</span>
    </h1>
    <p className="text-lg mb-6 leading-relaxed">{text}</p>

    <Link
      to="/account"
      className="sm:hidden bg-[#02588F] text-white px-4 py-2 rounded-full text-center mt-4 block w-full"
    >
      Login
    </Link>

    <a
      href="#about"
      className="inline-block mt-4 px-6 py-2 bg-[#068479] text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-full sm:w-auto text-center"
    >
      Explore Now
    </a>
  </div>
</div>


      </section>

      {/* Other Sections */}
      <div className="w-full space-y-10 text-center bg-white">
        <Section title="" id="about" titleClassName="text-teal-600" className=" px-4 md:px-20 py-12">
          <About />
        </Section>

        <Section title="" id="values" titleClassName="text-teal-600" className=" md:px-20 py-12">
          <Values />
        </Section>

        <Section title="" id="tafsir" titleClassName="text-teal-600" className="px-6 md:px-20 py-12">
          <Services />
        </Section>

        <Section title="" id="search" titleClassName="text-teal-600" className=" py-12 ">
          <Search />
        </Section>
      </div>
    </div>
  );
}

function Section({ title, id, children, titleClassName = "", titleStyle = {} }) {
  return (
    <section id={id} className="bg-white shadow-md rounded-xl p-6 overflow-x-hidden">
      <h2 className={`text-3xl font-bold mb-6 ${titleClassName}`} style={titleStyle}>
        {title}
      </h2>
      {children}
    </section>
  );
}
