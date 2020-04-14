import React, { useState, useEffect } from 'react';

const App = () => {

  const [items, setItems] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://api.github.com/users?since=0&per_page=20')
      .then(res => res.json())
      .then(json => {
        setItems(json);
        setIsLoaded(true);
      });
  }


  if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    console.log(items);
    return (
      <div className="App">
        <ol>
          {items.map(item => (
            <li key={item.id}>
              <ul>
                <li>Avatar Url : <a href={item.avatar_url}>{item.avatar_url}</a></li>
                <li>Login : {item.login}</li>
                <li>Site Admin : {item.site_admin.toString()}</li>
                <li>Number of Items : {Object.keys(item).length}</li>
              </ul>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}


export default App;
