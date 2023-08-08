// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, Link, useHistory } from "react-router-dom";

// export default function DeleteStudent() {
//   const { id } = useParams();
//   const [student, setStudent] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(`http://localhost:8070/student/get/${id}`)
//       .then((res) => {
//         setStudent(res.data.student);
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   }, [id]);

//   const handleDelete = () => {
//     axios.delete(`http://localhost:8070/student/delete/${id}`)
//       .then(() => {
//         alert("Student deleted successfully");
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   };


//   return (
//     <div className="container">
//       <h1>Delete Student</h1>
//       <p>Are you sure you want to delete the following student?</p>
//       <div>
//         <strong>Name:</strong> {student.name}<br />
//         <strong>Age:</strong> {student.age}<br />
//         <strong>Gender:</strong> {student.gender}<br />
//       </div>
//       <button type="button" className="btn btn-danger mt-2" onClick={handleDelete}>
//         Delete
//       </button>
//       <Link to="/all" className="btn btn-secondary ms-2">
//         Cancel
//       </Link>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function DeleteStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8070/student/get/${id}`)
      .then((res) => {
        setStudent(res.data.student);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this student?");
    
    if (confirmed) {
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
  );
}
