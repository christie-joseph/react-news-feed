import { COUNTRIES, CATEGORY } from "../Constants";

const Sidebar = ({ activeFilters, setActiveFilters, clearFilters }) => (
  <div className="sidebar">
    <input
      className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none bg-blue-600 text-white font-medium text-xs w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
      ariaLabel="Filter projects"
      value={activeFilters.q}
      onChange={(e) =>
        setActiveFilters({ ...activeFilters, q: e.target.value })
      }
      placeholder="Enter Keyword"
    />
    <div
      onChange={(e) => {
        setActiveFilters({ ...activeFilters, category: e.target.value });
      }}
    >
      <select
        className="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
        value={activeFilters.category === null ? "" : activeFilters.category}
        onChange={(e) => {
          setActiveFilters({
            ...activeFilters,
            category: e.target.value === "" ? null : e.target.value,
          });
        }}
      >
        <option value="">Select Category</option>
        {CATEGORY.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
    <div>
      <select
        className="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
        value={activeFilters.country === null ? "" : activeFilters.country}
        onChange={(e) => {
          setActiveFilters({
            ...activeFilters,
            country: e.target.value === "" ? null : e.target.value,
          });
        }}
      >
        <option value="">Select Country</option>
        {COUNTRIES.map((country) => (
          <option value={country.code} key={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
    <button
      className="bg-red-500 text-white font-bold py-2 px-4 border border-red-500 rounded-full"
      onClick={clearFilters}
    >
      Clear Filter
    </button>
  </div>
);

export default Sidebar;
