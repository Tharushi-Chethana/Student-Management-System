import React, {useState, useEffect} from "react"
import axios from "axios"

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
        <div className="container">
            <h1>All Students</h1>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    </tr>
                </thead>
                    {students.map((student, index) => (
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}