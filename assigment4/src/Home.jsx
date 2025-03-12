import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="text-center p-8 flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Profile information */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-2xl font-bold">Hello, It's me</h2>
        <h1 className="text-5xl font-bold">Donald Trump</h1>
        <p className="text-gray-600 mt-2">I'm an Politicians & Presidents</p>
        <p className="text-gray-500 mt-2">
          Please hold your breath as we dive into a world full of creativity with Donald Trump.
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl text-blue-600 hover:text-green-800 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-pink-500 hover:text-green-800 transition" />
          </a>
          <a href="mailto:artistjohn@email.com">
            <FaEnvelope className="text-3xl text-amber-300 hover:text-green-800 transition" />
          </a>
        </div>

        {/* ปุ่ม Portfolio */}
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-4xl shadow-md hover:bg-green-700 transition">
          My Portfolio
        </button>
      </div>

      {/* Profile */}
      <img
        src="https://i.pinimg.com/736x/f9/6b/78/f96b78fc47887ad44ed76969ff3d6d3d.jpg"
        alt="Artist John"
        className="md:w-1/3 w-2/3 rounded-3xl shadow-lg"
      />
    </section>
  );
}

export default Home;