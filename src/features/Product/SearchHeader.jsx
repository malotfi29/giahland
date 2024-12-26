import { IoSearchSharp } from "react-icons/io5"


function SearchHeader({query,setQuery}) {
  return (
    <form className="relative  row-start-2 col-span-8 md:col-span-2 md:row-span-1 md:row-start-1 md:col-start-7">
        <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="bg-primary-100 textField__input"
          placeholder="جستجو..."
        />
        <button className="absolute left-0 top-0 flex items-center h-full ml-3">
          <IoSearchSharp className="text-primary-900" />
        </button>
      </form>
  )
}

export default SearchHeader
