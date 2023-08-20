import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import addStudentStyle from './addStudent.module.css';

export default function AddStudent(){
    // State variables to store student information
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    // The useNavigate hook from 'react-router-dom' for navigation
    const navigate = useNavigate();

    function sendData (e){
        // Prevent the default form submission behavior
        e.preventDefault();

        // Create a new student object with input values
        const newStudent = {
            name,
            age,
            gender
        }

        // Send a POST request to add the student data to the server
        axios.post("http://localhost:8070/student/add", newStudent)
        .then(() => {
            alert("Student added");
            // Navigate back to the main page
            navigate("/");
        })
        .catch((err) => {
            alert(err)
        })
    }

    // Render the component's JSX
    return(
        <div className={addStudentStyle.container}>
        <form onSubmit={sendData}>
        <div className="mb-3">
            <label for="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter student name"
            // Update the 'name' state when the input value changes
            onChange={(e)=>{
                setName(e.target.value); //when insert value, always asigne to the name state
            }}></input>
        </div>
        <div className="mb-3">
            <label for="age" className="form-label">Age</label>
            <input type="number" className="form-control" id="age" placeholder="Enter student age"
            onChange={(e)=>{
                setAge(e.target.value); //when insert value, always asigne to the name state
            }}></input>
        </div>
        <div className="mb-3">
            <label for="gender" className="form-label">Gender</label>
            <input type="text" className="form-control" id="gender" placeholder="Enter student gender"
            onChange={(e)=>{
                setGender(e.target.value); //when insert value, always asigne to the name state
            }}></input>
        </div>
        <div className={addStudentStyle.btns}>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="reset" className={`btn btn-danger ${addStudentStyle['reset-btn']}`}>Reset</button>
        </div>
        </form>
        </div>
    )
}