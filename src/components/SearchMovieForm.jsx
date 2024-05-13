
const SearchMovieForm = () => {

    const handleSubmit = async (e) => {
       try {
        e.preventDefault();
        const query = e.target.elements.title.value;

        const searchParams = new URLSearchParams();           
        searchParams.append('query', query);
        searchParams.append('locale', 'en-GB');
        searchParams.append('include_adult', true);

        const response = await fetch(`https://api.themoviedb.org/3/search/multi?${searchParams.toString()}`, {
            headers: {
                Authorization: import.meta.env.VITE_API_KEY
            }
        })

        const body = await response.json();
        console.log(body);


       } catch (error) {
        console.error(error.message);
       }
        
    }

    return (
       <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Search by title" />
        <button>Search</button>
       </form>
    )
}

export default SearchMovieForm;