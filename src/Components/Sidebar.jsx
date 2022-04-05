import { COUNTRIES, CATEGORY } from "../Constants";

const Sidebar = ({ activeFilters, setActiveFilters, clearFilters }) => (
  <div className="sidebar">
    <input
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
    <button onClick={clearFilters}>Clear Filter</button>
  </div>
);

export default Sidebar;
