import { NEWS_ITEMS_PER_PAGE } from "../Constants";

const Pagination = ({
  navigatePrevious,
  navigateNext,
  totalNewsResultsCount,
  activeFilters,
}) => (
  <div className="pagination-container">
    <button onClick={navigatePrevious} disabled={activeFilters.page === 1}>
      Previous
    </button>
    <button
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
