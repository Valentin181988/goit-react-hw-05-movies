
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>

      </Route>
    </Routes>
  );
}

export default App;
