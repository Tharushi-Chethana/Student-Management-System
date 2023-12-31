import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import updateStudentStyle from './addStudent.module.css';

export default function UpdateStudent() {
  // State variables to store student information
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  // Assuming you're using a parameter in the URL for student ID
  const { id } = useParams(); 
  const navigate = useNavigate();
  console.log(id);


  useEffect(() => {
    // Fetch student data based on the ID and populate the form
    axios.get(`http://localhost:8070/student/get/${id}`)
      .then((res) => {
        // console.log(res.data.student)
        const studentData = res.data.student;
        console.log(studentData);
        // Update the state variables with fetched student data
        setName(studentData.name);
        setAge(studentData.age);
        setGender(studentData.gender);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  function updateStudent(e) {
    e.preventDefault();

    const updatedStudent = {
      name,
      age,
      gender,
    };

    // Send a PUT request to update student data
    axios.put(`http://localhost:8070/student/update/${id}`, updatedStudent)
      .then(() => {
        alert("Student updated successfully");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }


  return (
    <div className={updateStudentStyle.container}>
      <form onSubmit={updateStudent}>
        <div className="mb-3">
            <label for="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} ></input>
        </div>
        <div className="mb-3">
            <label for="age" className="form-label">Age</label>
            <input type="number" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)}></input>
        </div>
        <div className="mb-3">
            <label for="gender" className="form-label">Gender</label>
            <input type="text" className="form-control" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
