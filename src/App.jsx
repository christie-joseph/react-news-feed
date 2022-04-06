import "./App.css";
import { useEffect, useState } from "react";
import {
  NEWSAPI_URL,
  APIKEY,
  INITIAL_FILTERS,
  NEWS_ITEMS_PER_PAGE,
} from "./Constants";

import NewsItem from "./Components/NewsItem";
import { buildUrl } from "./utils";
import Sidebar from "./Components/Sidebar";

const App = () => {
  //Initialise states
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
    <>
      <nav className="px-16 py-5 font-semibold text-2xl mb-12 shadow-lg">
        News Feed App
      </nav>

      <div className="container flex justify-center mx-auto gap-8">
        <Sidebar
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          clearFilters={clearFilters}
          totalNewsResultsCount={totalNewsResultsCount}
        />
        <div className="grid-container flex-1">
          {newsData.length === 0 && !isDataLoading && (
            <div className="w-full text-center self-center text-2xl">
              No Results Found
            </div>
          )}

          {isDataLoading ? (
            <div className="w-full text-center self-center text-2xl">
              Loading..
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {newsData.map((newsItem) => (
                <NewsItem key={newsItem.url} newsItem={newsItem} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
