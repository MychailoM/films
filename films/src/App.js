// Components
import Layout from './components/Layout';

// Pages
import About from './pages/About';
import Cast from './pages/Cast';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';

import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='movies/:movieId' element={<MovieDetails/>}>
          <Route path='cast' element={<Cast/>}/>
        </Route>
        <Route path='about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Route>
    </Routes>
  );
}

export default App;
