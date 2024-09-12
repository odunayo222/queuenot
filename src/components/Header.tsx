
const Header = () => {
  return (
    <div className="bg-[#fdf6ed] flex flex-col items-center min-h-screen">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">QueueNot</h1>
        <nav className="space-x-6 text-right">
          <a href="#" className="text-gray-600">Team</a>
          <a href="#" className="text-gray-600">Service</a>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row justify-between items-center md:items-start w-full px-8 md:px-20 py-12 md:py-20">
        {/* Left content */}
        <div className="space-y-6  md:pr-10" id="pr">
          <h2 className="text-5xl font-bold" id="good"> Say Goodbye to <br /> Long Queues!</h2>
          <p className="text-gray-600">Experience the freedom of no waiting, ever again.</p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-300">
            Get Started
          </button>

        </div>

        {/* Right content (image and details) */}
        <div className="relative mt-10 md:mt-0 max-w-lg">
          <img src="/queue.png" alt="queue" className=" h-80 object-cover header-img" />
        </div>
      </main>
    </div>
  );
};

export default Header;
