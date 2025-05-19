const surahs = [
    { id: 1, name: "Al-Fatiha", verses: 7 },
    { id: 2, name: "Al-Baqarah", verses: 286 },
    { id: 3, name: "Al-Imran", verses: 200 },
    // ...more surahs
  ];
  
  export default function SurahList() {
    return (
      <section className="p-6 bg-white">
        <h3 className="text-2xl font-semibold mb-4 text-center">All Surahs</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {surahs.map((surah) => (
            <div key={surah.id} className="border p-4 rounded shadow hover:shadow-lg">
              <h4 className="font-bold text-green-700">{surah.name}</h4>
              <p className="text-gray-500">{surah.verses} Verses</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  