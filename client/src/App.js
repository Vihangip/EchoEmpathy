import './App.css';
import HomePage from './pages/HomePage/HomePage.js';
import QuestionPage from "./pages/QuestionPage/QuestionPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={
                      <>
                          <HomePage/>
                      </>
                  }/>
                  <Route path="/answer-question" element={
                      <QuestionPage/>
                  } />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
