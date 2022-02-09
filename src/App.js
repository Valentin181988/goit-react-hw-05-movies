import { lazy, Suspense} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

const createChunk = ComponentName => {
  return  lazy(() => import(`./pages/${ComponentName}`)
  .then(module => ({default: module[ComponentName]})))
};

const Navigation = lazy(() => import('./components/Navigation/Navigation').then(module => ({default: module.Navigation})));
const HomePage = createChunk('HomePage');
const MovieItem = createChunk('MovieItem');
const Review = createChunk('Review');
const Credits = createChunk('Credits');
const FindMovie = createChunk('FindMovie');

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
