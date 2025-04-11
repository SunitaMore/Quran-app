import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import AboutUs from "./pages/AboutUs";
import Faculty from "./pages/Faculty";
import HandProject from "./pages/HandProject";
import HireforUs from "./pages/HireforUs";
import ApplyNow from "./model/ApplyNow";
import Blog from "./pages/Blog";
import HireForm from "./model/HireForm";
import BlogDetail from "./pages/BlogDetail"; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/handproject" element={<HandProject />} />
        <Route path="/hirefromus" element={<HireforUs />} />
        <Route path="/applynow" element={<ApplyNow />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} /> 
        <Route path="/hireform" element={<HireForm />} />
      </Routes>
    </>
  );
}

export default App;
