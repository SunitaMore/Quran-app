import React from 'react'

const HireforUs = () => {
  return (
    <section className="bg-white text-gray-800 px-6 py-12 md:py-20">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-600 mb-4">Hire From Us</h2>
      <p className="text-lg text-gray-600">
        Looking for job-ready tech talent? Our students are trained in the latest technologies and equipped with real-world experience.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12 text-center">
      <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-blue-500 mb-2">Industry-Ready Skills</h3>
        <p className="text-sm text-gray-700">
          From frontend to backend, cloud to data science — our students build real projects with the latest tools and frameworks.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-blue-500 mb-2">Real-World Experience</h3>
        <p className="text-sm text-gray-700">
          Hands-on projects and collaborative teamwork ensure our graduates are ready to contribute from day one.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-blue-500 mb-2">Flexible Hiring Options</h3>
        <p className="text-sm text-gray-700">
          Hire interns, fresh graduates, or full-time developers. We’ll help match you with the right fit for your team.
        </p>
      </div>
    </div>

    <div className="text-center">
      <h4 className="text-xl font-semibold mb-4">Interested in hiring our graduates?</h4>
      <a
        href="/contact"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition duration-200"
      >
        Get in Touch
      </a>
    </div>
  </section>
  )
}

export default HireforUs