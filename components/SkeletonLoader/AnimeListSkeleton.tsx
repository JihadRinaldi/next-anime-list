const AnimeListSkeleton = () => {
  return (
    <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="p-4 border rounded shadow-sm">
          <div className="h-48 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export { AnimeListSkeleton };
