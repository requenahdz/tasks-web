import { useEffect } from "react";

const useSearchFilter = (filters, callback) => {
  useEffect(() => {
    let timeoutId;
    timeoutId = setTimeout(() => {
      callback();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [filters]);

  return true;
};

export default useSearchFilter;
