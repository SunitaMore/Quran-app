import React from 'react'



const ContactUs = () => {
  return (
    <section className="bg-gray-50 text-gray-800 px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h2>
          <p className="text-lg mb-6">
            Have questions or need help? Fill out the form and our team will get back to you shortly.
          </p>
          <div className="space-y-4 text-gray-700">
            <p><strong>Email:</strong> support@nextgenitcourses.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Location:</strong> 123 Tech Street, Silicon Valley, CA</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-white shadow-xl rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
