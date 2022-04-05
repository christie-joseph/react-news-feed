import "./App.css";
import { useEffect, useState } from "react";
import { APIKEY, NEWSAPI_URL } from "./Constants";

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
      {newsData.map((newsItem) => {
        return (
          <a href={newsItem.url} key={newsItem.url}>
            {newsItem.title}
          </a>
        );
      })}
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
