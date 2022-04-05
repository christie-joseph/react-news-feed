const NEWSAPI_URL = "https://newsapi.org/v2/top-headlines";
// const APIKEY = "d3a68d3a93a54948a016a1553bc4d20c";
const APIKEY = "2605daa9f8574d97bfa47802c17e5d33";
const NEWS_ITEMS_PER_PAGE = 10;

const INITIAL_FILTERS = {
  q: "",
  country: null,
  category: null,
  page: 1,
};
const COUNTRIES = [
  {
    name: "United Arab Emirates",
    code: "ae",
  },
  {
    name: "Argentina",
    code: "ar",
  },
  {
    name: "Austria",
    code: "at",
  },
  {
    name: "Australia",
    code: "au",
  },
  {
    name: "Belgium",
    code: "be",
  },
  {
    name: "Bulgaria",
    code: "bg",
  },
  {
    name: "Brazil",
    code: "br",
  },
  {
    name: "Canada",
    code: "ca",
  },
  {
    name: "Switzerland",
    code: "ch",
  },
  {
    name: "China",
    code: "cn",
  },
  {
    name: "Colombia",
    code: "co",
  },
  {
    name: "Cuba",
    code: "cu",
  },
  {
    name: "Czechia",
    code: "cz",
  },
  {
    name: "Germany",
    code: "de",
  },
  {
    name: "Egypt",
    code: "eg",
  },
  {
    name: "France",
    code: "fr",
  },
  {
    name: "United Kingdom",
    code: "gb",
  },
  {
    name: "Greece",
    code: "gr",
  },
  {
    name: "Hong Kong",
    code: "hk",
  },
  {
    name: "Hungary",
    code: "hu",
  },
  {
    name: "Indonesia",
    code: "id",
  },
  {
    name: "Ireland",
    code: "ie",
  },
  {
    name: "Israel",
    code: "il",
  },
  {
    name: "India",
    code: "in",
  },
  {
    name: "Italy",
    code: "it",
  },
  {
    name: "Japan",
    code: "jp",
  },
  {
    name: "Korea",
    code: "kr",
  },
  {
    name: "Lithuania",
    code: "lt",
  },
  {
    name: "Latvia",
    code: "lv",
  },
  {
    name: "Morocco",
    code: "ma",
  },
  {
    name: "Mexico",
    code: "mx",
  },
  {
    name: "Malaysia",
    code: "my",
  },
  {
    name: "Nigeria",
    code: "ng",
  },
  {
    name: "Netherlands",
    code: "nl",
  },
  {
    name: "Norway",
    code: "no",
  },
  {
    name: "New Zealand",
    code: "nz",
  },
  {
    name: "Philippines",
    code: "ph",
  },
  {
    name: "Poland",
    code: "pl",
  },
  {
    name: "Portugal",
    code: "pt",
  },
  {
    name: "Romania",
    code: "ro",
  },
  {
    name: "Serbia",
    code: "rs",
  },
  {
    name: "Russia",
    code: "ru",
  },
  {
    name: "Saudi Arabia",
    code: "sa",
  },
  {
    name: "Sweden",
    code: "se",
  },
  {
    name: "Singapore",
    code: "sg",
  },
  {
    name: "Slovenia",
    code: "si",
  },
  {
    name: "Slovakia",
    code: "sk",
  },
  {
    name: "Thailand",
    code: "th",
  },
  {
    name: "Turkey",
    code: "tr",
  },
  {
    name: "Taiwan",
    code: "tw",
  },
  {
    name: "Ukraine",
    code: "ua",
  },
  {
    name: "United States of America",
    code: "us",
  },
  {
    name: "Venezuela",
    code: "ve",
  },
  {
    name: "South Africa",
    code: "za",
  },
];
const CATEGORY = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

export {
  NEWSAPI_URL,
  APIKEY,
  COUNTRIES,
  CATEGORY,
  INITIAL_FILTERS,
  NEWS_ITEMS_PER_PAGE,
};
