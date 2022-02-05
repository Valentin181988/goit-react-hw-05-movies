import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { HomePage } from './pages/HomePage';
import { MovieItem} from './pages/MovieItem';
import { Review } from './pages/Review';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<HomePage />}/>
        <Route path="movies" element={<div>Hello!</div>}/>
        <Route path="movies/:movieId" element={<MovieItem />}>
            <Route path="cast" element={<div>Hihi</div>}/>
            <Route path="reviews" element={<Review />}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Route>
    </Routes>
  );
}

export default App;
