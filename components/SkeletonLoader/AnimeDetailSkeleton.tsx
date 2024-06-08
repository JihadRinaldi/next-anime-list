const AnimeDetailSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 items-center mx-auto p-4 animate-pulse">
      <div className="p-4 flex gap-2 w-full bg-eerie-black rounded-md">
        <div className="relative aspect-[184/289] w-48 h-full bg-gray-300 rounded"></div>
        <div className="p-4 flex flex-col gap-4 w-full">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex gap-6 items-start">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <div className="w-full h-4 bg-gray-300 rounded mb-1"></div>
                  <div className="h-6 bg-gray-300 rounded w-12 mb-1"></div>
                  <div className="h-4 bg-gray-300 rounded w-16"></div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 w-1/2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                {Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                  </div>
                ))}
                <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {['Synopsis', 'Background', 'Trailer'].map((section, index) => (
          <div key={index}>
            <div className="text-white font-semibold py-2 border-b-2 border-charcoal-gray mb-2">
              <div className="h-6 bg-gray-300 rounded w-32"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
            {section === 'Trailer' && (
              <div className="w-full flex items-center justify-center">
                <div className="w-96 h-56 bg-gray-300 rounded"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { AnimeDetailSkeleton };
