
import React from "react";
export default function Hero() {
  return (
    <section className="text-center py-16 px-4 bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Read Quran Everyday. Add On Your Daily Routine.</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        The Quran is the book of divine guidance and direction for mankind.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-green-600 text-white px-6 py-2 rounded">Read Quran</button>
        <button className="border border-gray-400 px-6 py-2 rounded">Quran Audio</button>
      </div>
    </section>
  );
}
