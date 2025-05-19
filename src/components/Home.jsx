import logo from '../assets/logo.png';
import About from './About';
import Values from './Values';
import Tafsir from './Tafsir';
import Translation from './Translation';
import Donate from './Donate';
import Search from './Search';
import Account from './Account';

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 text-center py-20 px-6 shadow-md">
        <img src={logo} alt="Quran.co Logo" className="mx-auto mb-6 w-24 sm:w-32 h-auto" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-4">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500">Quran.co</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Discover the divine message with Tafsir, Translations, and powerful Search tools.
        </p>
        <a
          href="#about"
          className="inline-block mt-6 px-6 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300"
        >
          Explore Now
        </a>
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
