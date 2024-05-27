import { FaSearch } from 'react-icons/fa';

function SearchInput() {
    return (
        <div className="relative">
            <input type="text" placeholder="Search topics, products, certifications" className="p-3 pl-12 border border-gray-200 w-full rounded-lg" />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* Search icon here */}
                <FaSearch className="h-5 w-5 text-blue-500" />
            </div>

            
        </div>
    );
}

export default SearchInput;
