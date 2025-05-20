import paymentlogo from '../assets/paymentlogo.png'; // adjust path based on location
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Contact() {
    return (
      <footer className="bg-gray-900 text-white rounded-t-3xl pt-6">
        <div className="bg-gray-700 bg-opacity-50 rounded-md p-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Subscription */}
          <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-extrabold mb-4 text-white drop-shadow-md">
  Join The Impact Community
</h2>
            <input type="email" placeholder="Email Id" className="p-2 rounded-l-md" />
            <button className="bg-teal-600 px-4 py-2 rounded-r-md text-white font-semibold hover:bg-teal-300 transition">Subscribe</button>
          </div>
          {/* Social Links */}
          <div>
          <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md">
  Follow us
</h3>
  <div className="flex space-x-4 bg-white rounded-md p-3 text-gray-700">
    {/* Social icons with increased size */}
    <a href="#" className="text-2xl hover:text-green-600"><i className="fab fa-whatsapp"></i></a>
    <a href="#" className="text-2xl hover:text-blue-600"><i className="fab fa-facebook"></i></a>
    <a href="#" className="text-2xl hover:text-red-600"><i className="fab fa-youtube"></i></a>
    <a href="#" className="text-2xl hover:text-blue-700"><i className="fab fa-linkedin"></i></a>
    <a href="#" className="text-2xl hover:text-blue-400"><i className="fab fa-twitter"></i></a>
    <a href="#" className="text-2xl hover:text-pink-500"><i className="fab fa-instagram"></i></a>
    <a href="#" className="text-2xl hover:text-orange-600"><i className="fab fa-blogger"></i></a>
  </div>
</div>

        </div>
        
        <div className="bg-yellow-900 p-6 max-w-6xl mx-auto rounded-b-3xl text-sm">
  <div className="mb-4 flex flex-col md:flex-row justify-between gap-6">
    {/* Left: Dua Hub Info */}
    <div className="md:w-2/3">
      <h2 className="font-bold text-white mb-2 text-2xl hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
        Dua Hub
      </h2>
      <p className="text-yellow-100 max-w-xl">
        Dua Hub is an online technology platform connecting donors and donees. We do not provide any financial return in any form whatsoever, including but not limited to financial securities (debt or equity), interest, dividend, profit share, rewards in cash, to individuals who make payments on the Platform.
      </p>
    </div>

    {/* Right: Contact Info */}
    <div className="md:w-1/3 text-yellow-100 space-y-2">
      <p><strong>Email:</strong> support@duahub.com</p>
      <p><strong>Contact:</strong> +91-9876543210</p>
      <p><strong>Address:</strong> 123 Islamic Street, Knowledge City, India</p>
    </div>
  </div>

  {/* Bottom row */}
  <div className="flex justify-between items-center flex-wrap gap-4">
    <div className="text-yellow-300 space-x-4">
      <a href="#">Terms of Use</a> - 
      <a href="#">Privacy Policy</a> - 
      <a href="#">Raise a Concern</a> - 
      <a href="#">Cookie Policy</a>
    </div>
    <img src={paymentlogo} alt="Payment Methods" className="h-17 w-70" />
  </div>
</div>

      </footer>
    );
  }
  