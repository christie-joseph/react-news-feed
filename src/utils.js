const buildUrl = (endpointUrl, parameters) => {
  let url = endpointUrl + "?";
  Object.keys(parameters).forEach(
    (key) => (url += key + "=" + parameters[key] + "&")
  );
  return url.slice(0, -1);
};

export { buildUrl };
