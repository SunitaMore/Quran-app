import React from 'react'



const projects = [
  {
    title: "E-Commerce Website",
    image: "https://source.unsplash.com/400x250/?ecommerce,store",
    description:
      "Build a fully functional e-commerce platform with cart, checkout, and admin dashboard using React, Node.js, and MongoDB.",
  },
  {
    title: "Real-Time Chat App",
    image: "https://source.unsplash.com/400x250/?chat,app",
    description:
      "Create a real-time messaging app using React, Socket.io, and Express with user authentication and private messaging.",
  },
  {
    title: "Data Dashboard",
    image: "https://source.unsplash.com/400x250/?dashboard,data",
    description:
      "Design a dynamic analytics dashboard using React, Chart.js, and REST APIs to visualize real-time business data.",
  },
  {
    title: "Weather Forecast App",
    image: "https://source.unsplash.com/400x250/?weather,forecast",
    description:
      "Use external APIs to build a modern weather app showing temperature, humidity, and forecasts based on geolocation.",
  },
  {
    title: "Portfolio Website",
    image: "https://source.unsplash.com/400x250/?portfolio,developer",
    description:
      "Design a personal portfolio with responsive design, animations, and dark/light mode using React and Tailwind CSS.",
  },
];


const HandProject = () => {
  return (
    <section className="bg-gray-100 px-6 py-12 md:py-20 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Training Projects</h2>
        <p className="text-lg text-gray-600">
          Practical projects to reinforce your skills and build a job-ready portfolio.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HandProject