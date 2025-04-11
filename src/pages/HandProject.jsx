// import React from 'react'



// const projects = [
//   {
//     title: "E-Commerce Website",
//     image: "https://source.unsplash.com/400x250/?ecommerce,store",
//     description:
//       "Build a fully functional e-commerce platform with cart, checkout, and admin dashboard using React, Node.js, and MongoDB.",
//   },
//   {
//     title: "Real-Time Chat App",
//     image: "https://source.unsplash.com/400x250/?chat,app",
//     description:
//       "Create a real-time messaging app using React, Socket.io, and Express with user authentication and private messaging.",
//   },
//   {
//     title: "Data Dashboard",
//     image: "https://source.unsplash.com/400x250/?dashboard,data",
//     description:
//       "Design a dynamic analytics dashboard using React, Chart.js, and REST APIs to visualize real-time business data.",
//   },
//   {
//     title: "Weather Forecast App",
//     image: "https://source.unsplash.com/400x250/?weather,forecast",
//     description:
//       "Use external APIs to build a modern weather app showing temperature, humidity, and forecasts based on geolocation.",
//   },
//   {
//     title: "Portfolio Website",
//     image: "https://source.unsplash.com/400x250/?portfolio,developer",
//     description:
//       "Design a personal portfolio with responsive design, animations, and dark/light mode using React and Tailwind CSS.",
//   },
// ];


// const HandProject = () => {
//   return (
//     <section className="bg-gray-100 px-6 py-12 md:py-20 text-gray-800">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-4xl font-bold text-blue-600 mb-4">Training Projects</h2>
//         <p className="text-lg text-gray-600">
//           Practical projects to reinforce your skills and build a job-ready portfolio.
//         </p>
//       </div>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="rounded-t-xl w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-600 text-sm">{project.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default HandProject


import React from 'react';
import { useNavigate } from 'react-router-dom';

import Ecommerce from '../assets/images/Ecommerce.png';
import Realchat from '../assets/images/Realchat.png';
import Dashboard from '../assets/images/Dashboard.png';
import Weather from '../assets/images/Weather.png';
import Profit from '../assets/images/Profit.png';

const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    image: Ecommerce,
    description:
      "Build a fully functional e-commerce platform with cart, checkout, and admin dashboard using React, Node.js, and MongoDB.",
    details: {
      duration: "1 Month",
      technology: "React, Node.js, Express, MongoDB",
      language: "JavaScript",
      instructor: "Mr. Arjun Patel",
    },
  },
  {
    id: "chat",
    title: "Real-Time Chat App",
    image: Realchat,
    description:
      "Create a real-time messaging app using React, Socket.io, and Express with user authentication and private messaging.",
    details: {
      duration: "2 Weeks",
      technology: "React, Socket.io, Express, MongoDB",
      language: "JavaScript",
      instructor: "Ms. Sneha Sharma",
    },
  },
  {
    id: "dashboard",
    title: "Data Dashboard",
    image: Dashboard,
    description:
      "Design a dynamic analytics dashboard using React, Chart.js, and REST APIs to visualize real-time business data.",
    details: {
      duration: "3 Weeks",
      technology: "React, Chart.js, REST APIs",
      language: "JavaScript",
      instructor: "Mr. Ravi Mehta",
    },
  },
  {
    id: "weather",
    title: "Weather Forecast App",
    image: Weather,
    description:
      "Use external APIs to build a modern weather app showing temperature, humidity, and forecasts based on geolocation.",
    details: {
      duration: "10 Days",
      technology: "React, OpenWeatherMap API, Tailwind",
      language: "JavaScript",
      instructor: "Mrs. Kavita Joshi",
    },
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    image: Profit,
    description:
      "Design a personal portfolio with responsive design, animations, and dark/light mode using React and Tailwind CSS.",
    details: {
      duration: "2 Weeks",
      technology: "React, Tailwind CSS, Framer Motion",
      language: "JavaScript",
      instructor: "Self-guided",
    },
  },
];

const HandProject = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 px-6 py-12 md:py-20 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-black-900 mb-4">Training Projects</h2>
        <p className="text-lg text-gray-600">
          Practical projects to reinforce your skills and build a job-ready portfolio.
        </p>
      </div>

      <div className="space-y-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 hover:bg-gray-50 transition-transform duration-300 p-6 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-700 text-[17px] leading-relaxed mb-4">{project.description}</p>
                <ul className="text-[16px] text-gray-800 mb-4 list-disc pl-5 space-y-1">
                  <li><strong>Duration:</strong> {project.details.duration}</li>
                  <li><strong>Technology:</strong> {project.details.technology}</li>
                  <li><strong>Language:</strong> {project.details.language}</li>
                  <li><strong>Instructor:</strong> {project.details.instructor}</li>
                </ul>
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                >
                  Details..
                </button>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-[300px] h-[200px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HandProject;
