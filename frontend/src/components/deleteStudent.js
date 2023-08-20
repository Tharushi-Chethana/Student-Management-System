import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import deleteStudentStyle from './deleteStudent.module.css'

export default function DeleteStudent() {
  // Get the student ID from the URL parameter
  const { id } = useParams();
  // State to store the student's information
  const [student, setStudent] = useState({});
  const navigate = useNavigate();

  // Fetch student data from the server when the component mounts
  useEffect(() => {
    axios.get(`http://localhost:8070/student/get/${id}`)
      .then((res) => {
        // Update the state with the fetched student data
        setStudent(res.data.student);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const handleDelete = () => {
    // Display a confirmation dialog to ensure deletion
    const confirmed = window.confirm("Are you sure you want to delete this student?");
    
    if (confirmed) {
      // Send a DELETE request to delete the student from the server
      axios.delete(`http://localhost:8070/student/delete/${id}`)
        .then(() => {
          alert("Student deleted successfully");
          navigate("/"); // Navigate using useNavigate
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  return (
    <div className="container">
      <h1>Delete Student</h1>
      <div className={deleteStudentStyle.description}>
        <p>Are you sure you want to delete the following student?</p>
        <div>
          <strong>Name:</strong> {student.name}<br />
          <strong>Age:</strong> {student.age}<br />
          <strong>Gender:</strong> {student.gender}<br />
        </div>
        <button type="button" className="btn btn-danger mt-2" onClick={handleDelete}>
          Delete
        </button>
        <Link to="/all" className="btn btn-secondary ms-2">
          Cancel
        </Link>       
      </div>
    </div>
  );
}
