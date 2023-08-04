import './App.css';
import Header from './components/header';
import AddStudent from './components/addStudent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllStudents from './components/AllStudents';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<AllStudents />} />
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
