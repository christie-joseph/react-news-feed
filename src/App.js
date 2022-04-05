import "./App.css";
import { useEffect, useState } from "react";
import { NEWSAPI_URL, APIKEY, COUNTRIES, CATEGORY } from "./Constants";

const App = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const newsUrl = buildUrl(NEWSAPI_URL, {
      language: "en",
      pageSize: 10,
      apiKey: APIKEY,
    });
    fetch(newsUrl)
      .then((response) => response.json())
      .then((json) => setNewsData(json.articles));
  }, []);

  return (
    <>
      <div className="grid-container">
        <div className="nav">
          <input placeholder="Enter Keyword" />
          <div>
            {CATEGORY.forEach((cat) => {
              console.log(cat);
            })}
          </div>
          <div>
            <select>
              {COUNTRIES.map((country) => {
                <option>{country.name}</option>;
              })}
            </select>
          </div>
          <button type="Submit">Search</button>
        </div>
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
                </span>{" "}
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
      </div>
    </>
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
