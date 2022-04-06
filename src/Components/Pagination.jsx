import { NEWS_ITEMS_PER_PAGE } from "../Constants";

const Pagination = ({
  navigatePrevious,
  navigateNext,
  totalNewsResultsCount,
  activeFilters,
}) => (
  <div className="pagination-container">
    <button
      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      onClick={navigatePrevious}
      disabled={activeFilters.page === 1}
    >
      Previous
    </button>
    <button
      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      onClick={navigateNext}
      disabled={
        activeFilters.page + 1 > totalNewsResultsCount / NEWS_ITEMS_PER_PAGE
      }
    >
      Next
    </button>
  </div>
);

export default Pagination;
