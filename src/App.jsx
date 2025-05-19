import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SurahList from "./components/SurahList";
import AudioPlayer from "./components/AudioPlayer";
import AppPromo from "./components/AppPromo";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <SurahList />
      <AudioPlayer />
      <AppPromo />
    </div>
  );
}
