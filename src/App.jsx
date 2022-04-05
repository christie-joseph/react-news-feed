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

  const navigateNext = () => {
    setActiveFilters({ ...activeFilters, page: activeFilters.page + 1 });
  };

  const navigatePrevious = () => {
    setActiveFilters({ ...activeFilters, page: activeFilters.page - 1 });
  };

  const clearFilters = () => {
    setActiveFilters(INITIAL_FILTERS);
  };

  return (
    <div className="grid-container">
      <div className="nav">
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
            value={
              activeFilters.category === null ? "" : activeFilters.category
            }
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
      {newsData.length === 0 && <div>No Results Found</div>}
      {isDataLoading ? (
        <div>Loading..</div>
      ) : (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {newsData.map((newsItem) => {
            return (
              <div className="article" key={newsItem.url}>
                <a href={newsItem.url}>
                  <img
                    className="w-full"
                    src={newsItem.urlToImage}
                    alt={newsItem.title}
                  />
                </a>
                <div className="px-6 py-4">
                  <a href={newsItem.url} className="font-bold text-xl mb-2">
                    {newsItem.title}
                  </a>
                </div>
                <span className="text-gray-400 text-base">
                  {newsItem.author}
                </span>
                <br />
                <p className="text-gray-700 text-base">
                  {newsItem.description}
                </p>
                <div className="px-6 pt-4 pb-2">
                  <a href={newsItem.url}>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      readmore
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

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
    </div>
  );
};

const buildUrl = (endpointUrl, parameters) => {
  let url = endpointUrl + "?";
  Object.keys(parameters).forEach(
    (key) => (url += key + "=" + parameters[key] + "&")
  );
  return url.slice(0, -1);
};
export default App;
