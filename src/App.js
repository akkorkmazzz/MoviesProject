import React from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

// Components
import TopBar from './Components/TopBar';
import SideBar from './Components/SideBar';

//Pages
import Dashboard from './Pages/Dashboard/Dashboard';
import Chat from './Pages/Chat';
import Documents from './Pages/Documents';
import SellMovies from './Pages/SellMovies';

//Sass
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
          <SideBar />
          <div className='main-container'>
          <TopBar />  
            <div className="content">
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/chat" component={Chat} />
                <Route path="/documents" component={Documents} />
                <Route path="/sell-movies" component={SellMovies} />
              </Switch>
            </div>
          </div>
      </div>
    </Router>
  )
}

export default App;
