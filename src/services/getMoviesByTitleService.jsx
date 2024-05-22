const getMoviesByTitleService = async ({id}) => {
  const { VITE_API_KEY } = import.meta.env;

  const url = `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${VITE_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok)
    throw new Error("Network response error", response.StatusText);

  const json = await response.json();
  return json;
};

export default getMoviesByTitleService;
