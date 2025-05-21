

// export default function About() {
//   return (
//     <div className="bg-white text-gray-800 p-6 md:p-12 max-w-4xl mx-auto">
     

//       <p className="mb-6 text-lg leading-relaxed">
//         <strong>Welcome to <span className="text-green-600">Quran</span>, your companion in the journey of understanding and connecting with the Holy Qur’an.</strong>
//       </p>

//       <p className="mb-6 text-base leading-relaxed">
//         At <strong>Quran.co</strong>, our mission is to make the Qur'an accessible, understandable, and engaging for Muslims around the world. Whether you're a daily reader, a student of Tafsir, or someone exploring the beauty of the Qur'an for the first time, our app is designed to support your spiritual growth and learning.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-700">What We Offer</h2>
//       <ul className="list-disc pl-6 mb-6 space-y-2">
//         <li><strong>Authentic Qur'anic Text:</strong> Read the Qur'an in its original Arabic with clear, Uthmani script.</li>
//         <li><strong>Translations:</strong> Access reliable translations in multiple languages.</li>
//         <li><strong>Tafsir & Commentary:</strong> Understand deeper meanings through trusted scholars' interpretations.</li>
//         <li><strong>Audio Recitation:</strong> Listen to renowned Qaris with synchronized text.</li>
//         <li><strong>Bookmark & Notes:</strong> Save your favorite verses and write personal reflections.</li>
//       </ul>

//       <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-700">Our Vision</h2>
//       <p className="mb-6 text-base leading-relaxed">
//         We believe that the Qur’an is a timeless guide for humanity. Our goal is to harness modern technology to bring this divine guidance closer to your heart and fingertips—anytime, anywhere.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-700">Our Values</h2>
//       <ul className="list-disc pl-6 mb-6 space-y-2">
//         <li><strong>Authenticity:</strong> All content is based on authentic and verified sources.</li>
//         <li><strong>Accessibility:</strong> Making the Qur'an easy to read, listen to, and understand for everyone.</li>
//         <li><strong>Simplicity:</strong> Clean and intuitive design so you can focus on the message.</li>
//       </ul>

//       <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-700">Join Us</h2>
//       <p className="mb-6 text-base leading-relaxed">
//         We’re continually working to improve the app with new features and updates. If you have feedback, suggestions, or questions, we’d love to hear from you.
//       </p>

//       <p className="text-base font-medium">
//         Thank you for choosing <span className="text-green-600">Quran.co</span> — may your journey with the Qur'an be filled with peace, knowledge, and blessings.
//       </p>
//     </div>
//   );
// }



import { BookOpen, HeartHandshake, Globe, ShieldCheck } from "lucide-react";

export default function About() {
  return (
   
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100  shadow-md mt-0 pt-6 ">
      <h1 className="text-3xl font-bold mb-6 text-[#02588F] text-center ">About Us</h1>
  <div className="max-w-4xl mx-auto ">
  
    <div className="text-lg font-medium leading-loose tracking-wide space-y-8 animate-fadeIn">
      
      <div className="flex items-start gap-x-4">
        <div className="w-6 mt-1 flex-shrink-0">
          <ShieldCheck size={25} style={{ color: "#068479" }} />
        </div>
        <p className="flex-1 text-left">
          We understand the emotional and spiritual value of esal-e-sawab, which is why we treat every task as a sacred trust, performed with utmost respect and devotion.
        </p>
      </div>

      <div className="flex items-start gap-x-4">
        <div className="w-6 mt-1 flex-shrink-0">
          <BookOpen size={25} style={{ color: "#068479" }} />
        </div>
        <p className="flex-1 text-left">
          Whether it’s arranging Quran khwani, sadaqah, or feeding the needy, we carry out each act with the intention of maximizing the reward for your loved ones.
        </p>
      </div>

      <div className="flex items-start gap-x-4">
        <div className="w-6 mt-1 flex-shrink-0">
          <Globe size={25} style={{ color: "#068479" }} />
        </div>
        <p className="flex-1 text-left">
          Our service allows you to fulfill your religious obligations from anywhere in the world, ensuring your duas and good deeds reach those who need them most.
        </p>
      </div>

      <div className="flex items-start gap-x-4">
        <div className="w-6 mt-1 flex-shrink-0">
          <HeartHandshake size={25} style={{ color: "#068479" }} />
        </div>
        <p className="flex-1 text-left">
          With us, you can rest assured that your esal-e-sawab efforts are managed responsibly, ethically, and in accordance with Islamic principles.
        </p>
      </div>

    </div>
  </div>
</section>

  );
}

// import { useEffect } from "react";
// import { BookOpen, HeartHandshake, Globe, ShieldCheck } from "lucide-react";

// export default function About() {
//   useEffect(() => {
//     // Disable scroll on mount
//     document.body.style.overflow = "hidden";

//     // Re-enable scroll on unmount
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   return (
//     <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6 shadow-md mt-0 pt-6">
//       <h1 className="text-3xl font-bold mb-6 text-[#02588F] text-center ">About Us</h1>
//       <div className="max-w-4xl mx-auto">
//         <div className="text-lg font-medium leading-loose tracking-wide space-y-8 animate-fadeIn">
//           {/* Your icon + text sections */}
//           <div className="flex items-start gap-x-4">
//             <div className="w-6 mt-1 flex-shrink-0">
//               <ShieldCheck size={25} style={{ color: "#068479" }} />
//             </div>
//             <p className="flex-1 text-left">
//               We understand the emotional and spiritual value of esal-e-sawab, which is why we treat every task as a sacred trust, performed with utmost respect and devotion.
//             </p>
//           </div>

//           <div className="flex items-start gap-x-4">
//             <div className="w-6 mt-1 flex-shrink-0">
//               <BookOpen size={25} style={{ color: "#068479" }} />
//             </div>
//             <p className="flex-1 text-left">
//               Whether it’s arranging Quran khwani, sadaqah, or feeding the needy, we carry out each act with the intention of maximizing the reward for your loved ones.
//             </p>
//           </div>

//           <div className="flex items-start gap-x-4">
//             <div className="w-6 mt-1 flex-shrink-0">
//               <Globe size={25} style={{ color: "#068479" }} />
//             </div>
//             <p className="flex-1 text-left">
//               Our service allows you to fulfill your religious obligations from anywhere in the world, ensuring your duas and good deeds reach those who need them most.
//             </p>
//           </div>

//           <div className="flex items-start gap-x-4">
//             <div className="w-6 mt-1 flex-shrink-0">
//               <HeartHandshake size={25} style={{ color: "#068479" }} />
//             </div>
//             <p className="flex-1 text-left">
//               With us, you can rest assured that your esal-e-sawab efforts are managed responsibly, ethically, and in accordance with Islamic principles.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
