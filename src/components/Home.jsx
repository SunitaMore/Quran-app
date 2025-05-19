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
import slide3 from "../assets/slide3.jpg"; // Add your own images
import slide4 from "../assets/slide4.png"; // Add your own images
import introVideo from "../assets/introVideo.mp4"; // Your video file
import { Link } from 'react-router-dom';




export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          
         {/* Left Content */}
<div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
  {/* Logo on top */}
  <Link to="/" className="flex items-center justify-center md:justify-start space-x-2 mb-4">
    <img src={logo} alt="Logo" className="w-50 h-50" />
    
  </Link>

  {/* Welcome Text */}
  <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-4">
    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500">Dua Hub</span>
  </h1>

  <p className="text-lg sm:text-xl text-gray-700 max-w-md mb-6">
    Discover the divine message with Tafsir, Translations, and powerful Search tools.
  </p>

  <a
    href="#about"
    className="inline-block px-6 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300"
  >
    Explore Now
  </a>
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
  {/* Logo Slide */}
  <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-xl">
    <img src={logo1} alt="Logo" className="w-full h-full object-cover" />
  </div>

  {/* Image Slides */}
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

  {/* Video Slide */}
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
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">

        {/* About Section */}
        <Section title="About" id="about">
          <About />
        </Section>

        {/* Values Section */}
        <Section title="How to Works" id="values">
          <Values />
        </Section>

        {/* Tafsir Section */}
        <Section title="Our Services" id="tafsir">
          <Services />
        </Section>

       
        

        {/* Search Section */}
        <Section title="Contact Us" id="search">
          <Search />
        </Section>

        

        {/* Account Section */}
        <Section title="Login" id="account">
          <Account />
        </Section>
      </div>
    </div>
  );
}

// Reusable section wrapper with styled headings
function Section({ title, id, children }) {
  return (
    <section id={id} className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 border-b border-green-200 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
