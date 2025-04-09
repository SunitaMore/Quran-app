import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./pages/AboutUs"
import Faculty from "./pages/Faculty";
import HandProject from "./pages/HandProject"
import ProjectDetails from './pages/ProjectDetails';
import HireforUs from "./pages/HireforUs"
import ApplyNow from "./model/ApplyNow";
import Blog from "./pages/Blog";
import HireForm from "./model/HireForm";
import CourseDetails from "./pages/CourseDetails";
import FeaturedCourse from "./components/FeaturedCourse"; // or wherever it is


function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/faculty" element={<Faculty/>}/>
        <Route path="/handproject" element={<HandProject/>}/>
        <Route path="/hirefromus" element={<HireforUs/>}/>
        <Route path="/applynow" element={<ApplyNow/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/hireform" element={<HireForm/>}/>
         {/* Detailed course information page */}
         <Route path="/course/:courseId" element={<CourseDetails />} />
         <Route path="/courses" element={<FeaturedCourse />} />
         <Route path="/project/:title" element={<ProjectDetails />} />
  

      
      </Routes>

    </>
  );
}

export default App;
// App.jsx
