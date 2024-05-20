const Pagination = ({ pageNumber, setPageNumber, searchResult }) => {

  return (
    <>
      {searchResult.length > 0 ? (
        <div className="pagination">
          {pageNumber > 0 ? (
            <button
              onClick={() => {
                setPageNumber((p) => p - 1);
              }}
            >
              Previous
            </button>
          ) : (
            ""
          )}

          <button
            onClick={() => {
              setPageNumber((p) => p + 1);
            }}
          >
            Next
          </button>

          <p>Página: {pageNumber}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Pagination;
