import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import updateStudentStyle from './addStudent.module.css';

export default function UpdateStudent() {
  const [name, setName] = useState("name");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const { id } = useParams(); // Assuming you're using a parameter in the URL for student ID
  const navigate = useNavigate();
  console.log(id);


  useEffect(() => {
    // Fetch student data based on the ID and populate the form
    axios.get(`http://localhost:8070/student/get/${id}`)
      .then((res) => {
        // console.log(res.data.student)
        const studentData = res.data.student;
        console.log(studentData)
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

    axios.put(`http://localhost:8070/student/update/${id}`, updatedStudent)
      .then(() => {
        alert("Student updated");
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
