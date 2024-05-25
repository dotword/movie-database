const getMoviesResultsService = async ({ query, radio, pageNumber }) => {
  const { VITE_API_KEY } = import.meta.env;

  const url = `https://www.omdbapi.com/?s=${query}&type=${radio}&page=${pageNumber}&apikey=${VITE_API_KEY}`;

  window.sessionStorage.setItem("searchUrl",JSON.stringify({query: query, radio: radio}));
  
  const response = await fetch(url);

  if (!response.ok)
    throw new Error("Network response error", response.StatusText);

  const json = await response.json();

  return json;
};

export default getMoviesResultsService;
