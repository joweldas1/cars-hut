
const SearchBar = () => {
    return (
        <div>
            <div>
            <div className="text-center md:text-left mt-5 ">
            <input type="text" placeholder="Type here" className="py-3 border-none rounded-2xl pl-5 w-full max-w-xs shadow-m" />
           
            <button className='button-common md:ml-4 mt-2 md:mt-0'>Search</button>
            </div>
            </div>
        </div>
    );
};

export default SearchBar;