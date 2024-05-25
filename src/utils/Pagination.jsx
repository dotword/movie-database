import PropTypes from "prop-types";

const Pagination = ({
  pageNumber,
  setPageNumber,
  searchResult,
  resultsNumber,
}) => {
  const totalPages = parseInt(resultsNumber / 10 + 1);
  if (searchResult === undefined || searchResult.length === 0)
    return <p>Enter a movie title</p>;
  return (
    <div className="pagination">
      {pageNumber === 1 ? (
        ""
      ) : (
        <>
          <button
            onClick={() => {
              setPageNumber((p) => p - 1);
              window.scrollTo(0, 0, "smooth");
            }}
          >
            Previous
          </button>
        </>
      )}
      <p>
        Page: {pageNumber} of {totalPages}
      </p>

      {pageNumber === totalPages ? (
        ""
      ) : (
        <button
          onClick={() => {
            setPageNumber((p) => p + 1);
            window.scrollTo(0, 0);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  pageNumber: PropTypes.number,
  setPageNumber: PropTypes.func,
  searchResult: PropTypes.array,
  resultsNumber: PropTypes.string,
};

export default Pagination;
