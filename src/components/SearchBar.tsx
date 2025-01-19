interface SearchBarProps {
    searchQuery: string;
    locationQuery: string;
    setSearchQuery: (query: string) => void;
    setLocationQuery: (query: string) => void;
  }
  
  export default function SearchBar({
    searchQuery,
    locationQuery,
    setSearchQuery,
    setLocationQuery,
  }: SearchBarProps) {
    return (
      <div className="flex gap-4 mb-8">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search job title or keyword"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Location"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
          />
        </div>
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          Find Jobs
        </button>
      </div>
    );
  }
  