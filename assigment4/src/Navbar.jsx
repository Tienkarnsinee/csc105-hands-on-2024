function Navbar() {
    return (
      <nav className="p-4 bg-white shadow-md flex items-center px-8">
        <h1 className="text-xl font-bold">President Trump</h1>
        <div className="flex-grow flex justify-center gap-6">
          <a href="#home" className="hover:text-green-600">Home</a>
          <a href="#about" className="hover:text-green-600">About Me</a>
          <a href="#gallery" className="hover:text-green-600">Gallery</a>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-4xl">
          Contact
        </button>
      </nav>
    );
  }
  
  export default Navbar;
  