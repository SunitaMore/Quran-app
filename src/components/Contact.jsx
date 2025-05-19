import paymentlogo from '../assets/paymentlogo.png'; // adjust path based on location


export default function Contact() {
    return (
      <footer className="bg-gray-900 text-white rounded-t-3xl pt-6">
        <div className="bg-gray-700 bg-opacity-50 rounded-md p-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Subscription */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Join The Impact Community</h3>
            <input type="email" placeholder="Email Id" className="p-2 rounded-l-md" />
            <button className="bg-green-600 px-4 py-2 rounded-r-md text-white font-semibold hover:bg-green-700 transition">Subscribe</button>
          </div>
          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-2">Follow us</h3>
            <div className="flex space-x-3 bg-white rounded-md p-2 text-gray-700">
              {/* Insert your social icons here */}
              {/* Example using react-icons */}
              <a href="#"><i className="fab fa-whatsapp"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-blogger"></i></a>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-900 p-6 max-w-6xl mx-auto rounded-b-3xl text-sm">
          <div className="mb-4">
            <h2 className="font-bold text-white mb-2">Quran </h2>
            <p className="text-yellow-100 max-w-xl">
              Impactguru is an online technology platform connecting donors and donees. We do not provide any financial return in any form whatsoever, including but not limited to financial securities (debt or equity), interest, dividend, profit share, rewards in cash, to individuals who make payments on the Platform.
            </p>
          </div>
          <div className="flex justify-between items-center">
            {/* Payment logos can be inserted here */}
            <img src={paymentlogo} alt="Payment Methods" className="h-10 w-30" />

            <div className="text-yellow-300 space-x-4">
              <a href="#">Terms of Use</a> - 
              <a href="#">Privacy Policy</a> - 
              <a href="#">Raise a Concern</a> - 
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  