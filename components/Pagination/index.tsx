type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const generatePageNumbers = () => {
    const pages = [];
    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    if (startPage > 2) {
      pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push('...');
    }

    return pages;
  };

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-blue-500 text-white px-2 py-1 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      <button
        onClick={() => onPageChange(1)}
        className={`px-2 py-1 rounded ${currentPage === 1 ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
      >
        1
      </button>

      {generatePageNumbers().map((page, index) =>
        typeof page === 'string' ? (
          <span key={index} className="px-2 py-1">
            {page}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-2 py-1 rounded ${currentPage === page ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(totalPages)}
        className={`px-2 py-1 rounded ${currentPage === totalPages ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
      >
        {totalPages}
      </button>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-blue-500 text-white px-2 py-1 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export { Pagination };
