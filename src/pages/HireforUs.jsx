import React from 'react';
import ItCourse from '../assets/images/it_course.jpg';
import DigitalMarketing from '../assets/images/digital_marketing.jpg';
import CloudEngineer from '../assets/images/cloud_engineer.jpg';
import DataScience from '../assets/images/data_science.jpg';
import UiUx from '../assets/images/uiux.jpg';
import Personality from '../assets/images/personality.jpg';
import { NavLink } from 'react-router-dom';

const jobRoles = [
  {
    title: "Web Development",
    category: "Development",
    experience: "2–5 years",
    candidates: "28 Candidates",
    description:
      "Deliver engaging, hands-on lessons in web development, data science, cloud computing, or cybersecurity. Foster student growth with real-world projects, timely feedback, and a passion for teaching.",
    image: ItCourse,
  },
  {
    title: "Digital Marketing Specialist",
    category: "Marketing",
    experience: "1–3 years",
    candidates: "16 Candidates",
    description:
      "Drive online growth through SEO, paid ads, email marketing, and content strategies tailored for tech education. Analyze metrics to optimize campaigns and improve learner engagement.",
    image: DigitalMarketing,
  },
  {
    title: "Cloud Engineer",
    category: "Development",
    experience: "0–2 years",
    candidates: "34 Candidates",
    description:
      "Build and maintain scalable cloud infrastructure. Support students in understanding cloud technologies through real-time application and troubleshooting.",
    image: CloudEngineer,
  },
  {
    title: "Data Science",
    category: "Tech",
    experience: "1–4 years",
    candidates: "21 Candidates",
    description:
      "Analyze complex data sets and build predictive models. Mentor learners in statistics, machine learning, and data visualization using real-world data.",
    image: DataScience,
  },
  {
    title: "UI/UX Designer",
    category: "Design",
    experience: "2–5 years",
    candidates: "12 Candidates",
    description:
      "Craft intuitive and delightful user experiences for our learning platform. Work with developers and content teams to design seamless journeys and clean, modern interfaces.",
    image: UiUx,
  },
  {
    title: "Personality Development",
    category: "Trainer",
    experience: "1–3 years",
    candidates: "10 Candidates",
    description:
      "Enhance students' soft skills, communication, and confidence through practical training. Prepare them for real-world interviews and workplace culture.",
    image: Personality,
  },
];

const HireforUs = () => {
  return (
    <section className="text-gray-800 px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-black-600 mb-4 uppercase">Hire From Us</h2>
        <p className="text-lg text-gray-600">
          Hire top IT talent trained by us—skilled, job-ready, and future-focused.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6">
        {jobRoles.map((role, index) => (
          <NavLink to="/hireform">
          <div
            key={index}
            className="group w-full flex flex-col md:flex-row bg-gray-100 cursor-pointer rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-[1.02] overflow-hidden h-64"
          >
            {/* Image Section */}
            <div className="md:w-2/4 w-full h-64 overflow-hidden">
           
            
              <img
                src={role.image}
                alt={role.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
               
            </div>

            {/* Text Section */}
            <div className="md:w-3/4 w-full p-6 flex flex-col justify-center text-left h-64 transition-all duration-500 ease-in-out group-hover:translate-x-1">
              <h3 className="text-2xl font-semibold text-black-600 mb-1">
                {role.title}
              </h3>
              <p className="text-sm text-blue-500 font-medium uppercase tracking-wide">
                {role.category}
              </p>
              <p className="text-sm text-gray-500 font-medium">
                Experience: {role.experience}
              </p>
              <p className="text-sm text-gray-500 font-medium mb-2">
                Candidates Available: {role.candidates}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {role.description}
              </p>
              
            </div>
          </div>
          </NavLink>
        ))}
        
      </div>

      <div className="text-center mt-12">
        <h4 className="text-xl font-semibold mb-4">
          Think you're a fit? We'd love to hear from you.
        </h4>
        <a
          href="/hireform"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition duration-200"
        >
          Hire Now
        </a>
      </div>
    </section>
  );
};

export default HireforUs;
