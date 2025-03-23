const FutureSection: React.FC = () => {
  return (
    <div className="px-4 md:px-12 py-12 flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-1/2">
        <div className="relative rounded-lg overflow-hidden">
          <img 
            src="https://www.shutterstock.com/image-photo/business-team-group-portrait-happy-260nw-2412728569.jpg" 
            alt="Future video thumbnail" 
            className="w-full" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="bg-blue-500 text-white px-4 py-2 rounded font-medium">
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Now is your moment to build a better tomorrow</h2>
        <p className="text-gray-600 mb-8">
          We've seen what the future can be. Now it's time to decide what it will be.
        </p>
        <a href="#" className="inline-block border border-purple-800 text-purple-800 hover:bg-purple-50 font-medium px-6 py-3 rounded">
          WATCH VIDEO
        </a>
      </div>
    </div>
  );
};

export default FutureSection;
