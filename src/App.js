import React, { useState, useEffect } from "react";
import List from "./component/List";
import useFetch from "./component/UseFetch";

const App = () => {
  const { content, isLoaded } = useFetch(
    "https://api.github.com/users?since=0&per_page=2"
  );

  return (
    <div>
      {!isLoaded ? (
        <div>lodaing...</div>
      ) : (
        <div className="App">
          <List content={content} />
        </div>
      )}
    </div>
  );
};

export default App;
