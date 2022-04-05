import "./App.css";
import { useEffect, useState } from "react";
import {
  NEWSAPI_URL,
  APIKEY,
  COUNTRIES,
  CATEGORY,
  INITIAL_FILTERS,
  NEWS_ITEMS_PER_PAGE,
} from "./Constants";

import NewsItem from "./Components/NewsItem";
import Pagination from "./Components/Pagination";
import { buildUrl } from "./utils";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const [newsData, setNewsData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [activeFilters, setActiveFilters] = useState(INITIAL_FILTERS);
  const [totalNewsResultsCount, setTotalNewsResultsCount] = useState(0);

  useEffect(() => {
    const newsUrl = buildUrl(NEWSAPI_URL, {
      language: "en",
      pageSize: NEWS_ITEMS_PER_PAGE,
      apiKey: APIKEY,
      page: 1,
    });
    fetchNewsData(newsUrl);
  }, []);

  useEffect(() => {
    const requstParams = {
      language: "en",
      pageSize: NEWS_ITEMS_PER_PAGE,
      apiKey: APIKEY,
      page: activeFilters.page,
    };
    if (activeFilters.category !== null)
      requstParams.category = activeFilters.category;

    if (activeFilters.country !== null)
      requstParams.country = activeFilters.country;

    if (activeFilters.q !== "") requstParams.q = activeFilters.q;

    const newsUrl = buildUrl(NEWSAPI_URL, requstParams);
    fetchNewsData(newsUrl);
  }, [activeFilters]);

  const navigateNext = () => {
    setActiveFilters({ ...activeFilters, page: activeFilters.page + 1 });
  };

  const navigatePrevious = () => {
    setActiveFilters({ ...activeFilters, page: activeFilters.page - 1 });
  };

  const clearFilters = () => {
    setActiveFilters(INITIAL_FILTERS);
  };

  const fetchNewsData = (newsUrl) => {
    setIsDataLoading(true);
    fetch(newsUrl)
      .then((response) => response.json())
      .then((json) => {
        setNewsData(json.articles);
        setTotalNewsResultsCount(json.totalResults);
        setIsDataLoading(false);
      });
  };

  return (
    <div className="grid-container">
      <Sidebar
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        clearFilters={clearFilters}
      />

      {newsData.length === 0 && <div>No Results Found</div>}

      {isDataLoading ? (
        <div>Loading..</div>
      ) : (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {newsData.map((newsItem) => (
            <NewsItem newsItem={newsItem} />
          ))}
        </div>
      )}

      <Pagination
        navigatePrevious={navigatePrevious}
        navigateNext={navigateNext}
        totalNewsResultsCount={totalNewsResultsCount}
        activeFilters={activeFilters}
      />
    </div>
  );
};

export default App;
