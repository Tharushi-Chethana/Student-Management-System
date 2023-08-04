import './App.css';
import Header from './components/header';
import AddStudent from './components/addStudent';
// import {BrowserRouter as Router, Route} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
