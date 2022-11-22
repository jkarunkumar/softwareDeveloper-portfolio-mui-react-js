import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Notfound from './pages/Notfound';
import Navbar from './pages/Navbar';
function App() {
  return (
     <>
     <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path='*' element={<Notfound/>}/>
    </Routes></>
  );
}

export default App;
