import React, { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [content, setContent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
        setIsLoaded(true);
      });
  }, []);

  return { content, isLoaded };
};

export default UseFetch;
