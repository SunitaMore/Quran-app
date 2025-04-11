import React,{useState} from 'react'
import Contactbg from '../assets/images/ContactUsimg4.jpg'
import emailjs from '@emailjs/browser'
  //  the sending mail functionality is working by emailJS 
const ContactUs = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [subject, setSubject] = useState("");
  const [popupMessage, setPopupMessage] = useState("");


  const templateParams ={
    from_name : name,
    from_email : email,
    message : message,
    mobile: mobile,
    location: location,
    subject: subject,
    to_email : "shreyas5400m@gmail.com",
    to_name : "Vertex Institute Of Technology Team",
  }

  //  key and ID's
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

  const sendEmail = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(mobile)) {
      setPopupMessage("Please enter a valid 10-digit mobile number.");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setPopupMessage("");
      }, 3000);
      return;
    }

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setPopupMessage("Message sent successfully!");
        setShowPopup(true);

        setName("");
        setEmail("");
        setMessage("");
        setMobile("");
        setLocation("");
        setSubject("");

        
        setTimeout(() => {
        setShowPopup(false);
        setPopupMessage("")
      },3000);
      },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage('Something went wrong. Please try again.');
          setShowPopup(true);

          setTimeout(() =>{ 
            setShowPopup(false);
           setPopupMessage("");
          },3000);
        },
      );
  };

  return (
    <section id="contactus" className="bg-white text-gray-800 px-6 py-12 md:py-20 mb-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row shadow-xl  overflow-hidden">
        
         {/* Left Half - Image with text */}
         <div className="md:w-1/2 relative flex items-center p-8 text-white">
          
          {/* Background image and slant applied here */}
          <div
            className="absolute inset-0 "
            style={{
              backgroundImage: `url(${Contactbg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)',
              zIndex: 0,
              opacity:0.5,
            }}
          ></div>
          
          {/* Content on top */}
          <div className="relative z-10  text-black">
            <h2 className="text-4xl font-bold mb-4 ">Contact Us</h2>
            <p className="text-lg mb-4">
              Have questions or need help? Fill out the form and our team will get back to you shortly.
            </p>
            <div className="space-y-4">
              <p><strong>Email:</strong> inqury@vertexinstitute.co.in</p>
              <p><strong>Phone:</strong>+91 97673527243</p>
              <p><strong>Location:</strong> 123 Tech Street, Silicon Valley, Pune</p>
            </div>
          </div>

        </div>

        {/* Right Half - Contact Form */}
        <div className="md:w-1/2 bg-white p-8">
        <form onSubmit={sendEmail} className="space-y-6">
  {/* Name + Email */}
  <div className="flex flex-col md:flex-row gap-4">
    <div className="w-full md:w-1/2">
      <label className="block text-sm font-medium mb-1">Name</label>
      <input
        type="text"
        placeholder="Your name"
        name="from_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         required     
      />
    </div>
    <div className="w-full md:w-1/2">
      <label className="block text-sm font-medium mb-1">Email</label>
      <input
        type="email"
        placeholder="you@example.com"
        name="from_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required 
     />
    </div>
  </div>

  {/* Mobile + Location */}
  <div className="flex flex-col md:flex-row gap-4">
  <div className="w-full md:w-1/2">
        <label className="block text-sm font-medium mb-1">Mobile Number</label>
        <input
          type="tel"
          placeholder="Your mobile number"
          name="mobile"
          value={mobile}
          onChange={(e) => {
            const onlyNums = e.target.value.replace(/\D/g, ''); // removes non-numeric characters
            setMobile(onlyNums);
          }}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          maxLength={10}
        />
      </div>
    <div className="w-full md:w-1/2">
      <label className="block text-sm font-medium mb-1">Location</label>
      <input
        type="text"
        placeholder="Your location"
        name='location'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required 
      />
    </div>
  </div>

  {/* Subject */}
  <div>
    <label className="block text-sm font-medium mb-1">Subject</label>
    <input
      type="text"
      placeholder="Subject"
      name='subject'
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      required 
       />
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm font-medium mb-1">Message</label>
    <textarea
      rows="5"
      placeholder="Your message"
      name="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
  >
    Send Message
  </button>
</form>

        </div>
      </div>
       {/* Popup Message */}
       {showPopup && (
        <div className="fixed top-5 right-5 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50">
            {popupMessage}
        </div>
      )}
    </section>
  );
};

export default ContactUs;
