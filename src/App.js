import React, {useEffect} from 'react'
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {Switch, Route} from 'react-router-dom'
import DetailsPage from './pages/DetailsPage';
import MoviesPage from './pages/MoviesPage';
import SeriesPage from './pages/SeriesPage';
import ResultsPage from './pages/ResultsPage';
import PageNotFound from './pages/PageNotFound';
import RequiredAuth from './pages/RequiredAuth';
import {useSelector} from 'react-redux'



function App() {



 
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
        <Home />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/series">
          <SeriesPage />
        </Route>
        <Route path="/details/:any">
          <DetailsPage />
        </Route>
        <Route path="/search/:movie_series">
          <RequiredAuth>
          <ResultsPage />
          </RequiredAuth>
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
        
        
      </Switch>
      
  
    </div>
  );
}

export default App;
