//import logo from '../assets/logo.png';
import About from './About';
import Values from './Values';
import Tafsir from './Tafsir';
import Translation from './Translation';
import Donate from './Donate';
import Search from './Search';
import Account from './Account';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo from "../assets/logo.png";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg"; // Add your own images
import introVideo from "../assets/introVideo.mp4"; // Your video file



export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-4">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500">Quran.co</span>
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
    className="rounded-xl shadow-lg"
  >
    {/* Logo Slide */}
    <div className="w-full h-64 md:h-72 flex items-center justify-center bg-white">
      <img src={logo} alt="Logo" className="w-full h-full object-contain rounded-xl" />
    </div>

    {/* Image Slides */}
    <div className="w-full h-64 md:h-72 flex items-center justify-center bg-white">
      <img src={slide1} alt="Slide 1" className="w-full h-full object-contain rounded-xl" />
    </div>
    <div className="w-full h-64 md:h-72 flex items-center justify-center bg-white">
      <img src={slide2} alt="Slide 2" className="w-full h-full object-contain rounded-xl" />
    </div>
    <div className="w-full h-64 md:h-72 flex items-center justify-center bg-white">
      <img src={slide3} alt="Slide 3" className="w-full h-full object-contain rounded-xl" />
    </div>

    {/* Video Slide */}
    <div className="w-full h-64 md:h-72 flex items-center justify-center bg-black">
      <video
        className="w-full h-full object-contain rounded-xl"
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
        <Section title="Our Values" id="values">
          <Values />
        </Section>

        {/* Tafsir Section */}
        <Section title="Tafsir" id="tafsir">
          <Tafsir />
        </Section>

        {/* Translation Section */}
        <Section title="Translation" id="translation">
          <Translation />
        </Section>

        {/* Search Section */}
        <Section title="Search" id="search">
          <Search />
        </Section>

        {/* Donate Section */}
        <Section title="Support Our Work" id="donate">
          <Donate />
        </Section>

        {/* Account Section */}
        <Section title="Your Account" id="account">
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
