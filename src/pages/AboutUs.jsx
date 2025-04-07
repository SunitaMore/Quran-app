import React from 'react'



const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">About Us</h2>
          <p className="text-lg mb-4">
            Welcome to <span className="font-semibold">NextGen IT Courses</span> — your gateway to mastering in-demand tech skills! We provide high-quality, hands-on training in software development, data science, cloud computing, and more.
          </p>
          <p className="text-md text-gray-600 mb-4">
            Our mission is to bridge the gap between learning and practical application. Whether you're a beginner or looking to upskill, our expert-led courses and real-world projects will help you reach your goals.
          </p>
          <p className="text-md text-gray-600">
            Join our vibrant community of learners and start building your future today!
          </p>
        </div>

        {/* Image or Illustration */}
        <div className="md:w-1/2">
          <img
            src="https://source.unsplash.com/600x400/?technology,coding"
            alt="Team working on computers"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
