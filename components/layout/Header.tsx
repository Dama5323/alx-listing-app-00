const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            <span className="text-xl font-bold text-gray-800">LuxuryStays</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search destinations, properties, or amenities..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 font-medium">Sign in</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition font-medium">
              Sign up
            </button>
          </div>
        </div>

        {/* Accommodation Types */}
        <div className="mt-4 overflow-x-auto">
          <div className="flex space-x-6 pb-2">
            {["Rooms", "Mansion", "Countryside", "Beachfront", "Mountain View", "City Center", "Luxury Villa", "Cabin"].map((type) => (
              <button
                key={type}
                className="whitespace-nowrap text-gray-600 hover:text-blue-600 font-medium transition"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;