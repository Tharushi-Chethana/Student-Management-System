import './App.css';
import Header from './components/header';
import AddStudent from './components/addStudent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllStudents from './components/allStudents';
import UpdateStudent from './components/updateStudent';
import DeleteStudent from './components/deleteStudent';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<AllStudents />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
          <Route path="/delete/:id" element={<DeleteStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
