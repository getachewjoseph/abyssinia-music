export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header - thin section at the top */}
      <div className="h-16 bg-black-800 text-white flex items-center justify-between px-6 border-2 border-white-300">
        <h1 className="text-xl font-bold">Abyssinia Music</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Home
          </button>
          <button className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">
            Music
          </button>
          <button className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700">
            About
          </button>
        </div>
      </div>

      {/* Main content - takes up the rest of the screen */}
      <div className="flex-1 bg-black-100 flex items-center justify-center border-2 border-white-300">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Abyssinia Music
          </h2>
          <p className="text-lg text-gray-600">
            Music
          </p>
        </div>
      </div>
    </div>
  )
} 