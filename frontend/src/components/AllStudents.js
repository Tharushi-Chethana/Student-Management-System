import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link} from 'react-router-dom'
import allStudentStyle from './allStudents.module.css'

export default function AllStudents (){

    const [students, setStudents] = useState([])

    useEffect(() => {
        function getStudents (){
            axios.get("http://localhost:8070/student/" )
            .then((res) => {
                console.log(res.data);
                setStudents(res.data.students);
            })
            .catch((err) =>{
                alert(err.message)
            })
        }
        getStudents();
    }, [])

    return(
        <div>
            <h1>Students' Details</h1>
            <Link to="/add" className={`btn btn-primary ${allStudentStyle['add-student']}`}>Add Student</Link>
            <div className={allStudentStyle.container}>
                <table class="table">
                    <thead>
                        {/* <tr> */}
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Actions</th>
                        {/* </tr> */}
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student._id} className="table-row">
                                <th scope="row" style={{ backgroundColor: 'lightblue' }}>{index+1}</th>
                                <td style={{ backgroundColor: 'lightblue' }}>{student.name}</td>
                                <td style={{ backgroundColor: 'lightblue' }}>{student.age}</td>
                                <td style={{ backgroundColor: 'lightblue' }}>{student.gender}</td>
                                <td className="btn-gap" style={{ backgroundColor: 'lightblue' }}>
                                    <Link to={`/update/${student._id}`} className={`btn btn-warning  ${allStudentStyle['btn1']}`}>Update</Link>
                                    <span className="btns"></span>
                                    <Link to={`/delete/${student._id}`} class="btn btn-danger">Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}