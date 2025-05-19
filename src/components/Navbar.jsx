export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-600">Quran.co</h1>
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li>Home</li>
        <li>About</li>
        <li>Values</li>
        <li>Tafsir</li>
        <li>Translation</li>
        <li>Donate</li>
        <li>Search</li>
        <li>My Account</li>
      </ul>
    </nav>
  );
}
