import React from 'react';

//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//styles
import { GlobalStyle } from './GlobalStyle';

//Context
import UserProvider from './context';

//import components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import ShowActor from './components/ShowActor';
import NotFound from './components/NotFound';
import Login from './components/Login';


const App = () => (
    <Router>
      
      <UserProvider>

        <Header />

        <Routes>

          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/:movieId' element={<Movie />} />
          <Route path='/actor/:actorId' element={<ShowActor />} />
          <Route path='*' element={<NotFound />} />
        
        </Routes>

        <GlobalStyle />

      </UserProvider>
      
    </Router>
  );

export default App;
