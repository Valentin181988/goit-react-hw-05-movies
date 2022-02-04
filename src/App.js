
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import  { HomePage } from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
      <Route path="home" element={<HomePage />}/>
      </Route>
    </Routes>
  );
}

export default App;
