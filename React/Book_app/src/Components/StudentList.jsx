// StudentList.jsx
import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import axios from "axios";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/about").then((res) => {
      setStudents(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <div className="card-container">
        {students.map((student, index) => (
          <Card key={index} name={student.name} age={student.age} />
        ))}
      </div>
    </div>
  );
}
