const NewsItem = ({ newsItem }) => {
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
      <span className="text-gray-400 text-base">{newsItem.author}</span>
      <br />
      <p className="text-gray-700 text-base">{newsItem.description}</p>
      <div className="px-6 pt-4 pb-2">
        <a href={newsItem.url}>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            readmore
          </span>
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
