import React from "react";
const List = ({ content }) => {
  return (
    <ol>
      {content.map((item) => (
        <li key={item.id}>
          <ul>
            <li>
              Avatar Url : <a href={item.avatar_url}>{item.avatar_url}</a>
            </li>
            <li>Login : {item.login}</li>
            <li>Site Admin : {item.site_admin.toString()}</li>
            <li>Number of Items : {Object.keys(item).length}</li>
          </ul>
        </li>
      ))}
    </ol>
  );
};

export default List;
