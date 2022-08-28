import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import City from './pages/city';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/city/:cityName' element={<City />} />
      </Routes>
    </Router>
  );
}

export default App;
