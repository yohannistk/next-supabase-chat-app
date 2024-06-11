import React, { useEffect, useState } from "react";

const useDebounce = (text: string, delay = 500) => {
  const [debounced, setDebounded] = useState(text);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounded(text);
    }, delay);
    return () => {
      clearTimeout(id);
    };
  }, [text]);

  return { debounced };
};

export default useDebounce;
