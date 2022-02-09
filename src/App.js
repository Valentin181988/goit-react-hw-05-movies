import { lazy, Suspense} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

const Navigation = lazy(() => import('./components/Navigation/Navigation').then(module => ({default: module.Navigation})));
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({default: module.HomePage})));
const MovieItem = lazy(() => import('./pages/MovieItem').then(module => ({default: module.MovieItem})));
const Review = lazy(() => import('./pages/Review').then(module => ({default: module.Review})));
const Credits = lazy(() => import('./pages/Credits').then(module => ({default: module.Credits})));
const FindMovie = lazy(() => import('./pages/FindMovie').then(module => ({default: module.FindMovie})));

function App() {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Navigate to="/home"/>}/> 
          <Route path="home" element={<HomePage />}/>
          <Route path="movies" element={<FindMovie />}/>
          <Route path="movies/:movieId" element={<MovieItem />}>
              <Route path="cast" element={<Credits />}/>
              <Route path="reviews" element={<Review />}/>
          </Route>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
