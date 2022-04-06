import Pagination from "./Pagination";
import { COUNTRIES, CATEGORY } from "../Constants";

const Sidebar = ({
  activeFilters,
  setActiveFilters,
  clearFilters,
  totalNewsResultsCount,
}) => {
  const navigateNext = () => {
    setActiveFilters({ ...activeFilters, page: activeFilters.page + 1 });
  };

  const navigatePrevious = () => {
    setActiveFilters({ ...activeFilters, page: activeFilters.page - 1 });
  };

  return (
    <aside className="h-full min-w-max">
      <h4 className="font-semibold text-xl mb-2">Filters</h4>
      <input
        className="border-4 py-2 px-4 rounded-md w-full"
        value={activeFilters.q}
        onChange={(e) =>
          setActiveFilters({ ...activeFilters, q: e.target.value })
        }
        placeholder="Search Keyword"
      />
      <div>
        <select
          className="border-4 py-2 px-4 rounded-md w-full mt-6"
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
          className="border-4 py-2 px-4 rounded-md w-full mt-6"
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
        className="bg-red-500 text-white font-bold py-2 px-4 border border-red-500 rounded-full mt-6"
        onClick={clearFilters}
      >
        Clear Filter
      </button>
      <h4 className="font-semibold text-xl mt-8 mb-2">Navigate</h4>

      <Pagination
        navigatePrevious={navigatePrevious}
        navigateNext={navigateNext}
        totalNewsResultsCount={totalNewsResultsCount}
        activeFilters={activeFilters}
      />
    </aside>
  );
};

export default Sidebar;
