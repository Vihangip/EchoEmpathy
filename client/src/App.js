import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage.js';
import {Route, Router, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <HomePage></HomePage>
    </div>
  );
}

export default App;
