import React from 'react';

//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//styles
import { GlobalStyle } from './GlobalStyle';


//import components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import ShowActor from './components/ShowActor';
import NotFound from './components/NotFound';


const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/actor/:actorId' element={<ShowActor />} />
        
        <Route path='*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );

export default App;
