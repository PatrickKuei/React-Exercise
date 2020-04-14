import React from 'react';

 class App extends React.Component{
   
   constructor(props){
     super(props);
     this.state = {
       items: [],
       isLoaded: false,
       apiUrl: 'https://api.github.com/users',
       since: 'since=0',
       perPage: 'per_page=20'
     }
   }

   componentDidMount() {

    fetch(this.state.apiUrl + '?' + this.state.since + '&' + this.state.perPage)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
   }

   render(){

    var { isLoaded, items } = this.state;

    if(!isLoaded){
      return <div>Loading...</div>
    }else{
      
      return(
        <div className="App">
          <ol>
            {items.map(item => (
              <li key={item.id}>
                <ul>
                  <li>Avatar Url : <a href={item.avatar_url}>{item.avatar_url}</a></li>
                  <li>Login : {item.login}</li>
                  <li>Site Admin : {item.site_admin.toString()}</li>
                  <li>Number of Items : {items.length}</li>
                </ul>
              </li>
            ))}
          </ol>
    </div>
      );
    }
   }
 }

export default App;
