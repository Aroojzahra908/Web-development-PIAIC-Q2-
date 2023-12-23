"use client"
import { useState } from "react";
import Button from "../button/button";

const students = [
  { rollNo: 234, name: "1. Arooj Zahra", email: "aroojzahra@example.com" },
  { rollNo: 235, name: "2. Minahil", email: "minahil@example.com" },
  { rollNo: 236, name: "3. Zoya Ijaz", email: "zoyaijaz@example.com" },
];

export default function SudentData() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentStudent = students[currentIndex];

  const onClickAddHandler = () => {
    const nextIndex = (currentIndex + 1) % students.length;
  // Update the currentIndex state with the next index
  setCurrentIndex(nextIndex);

console.log(students);
  };

  const onClickMinusHandler = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? students.length - 1 : prevIndex - 1);
  };
  const resetHandler = () => {
    setCurrentIndex(0);
  };

  console.log("count section render");

  return (
    <div className="container">
    <div className="buttoncontainer"> 
      <div>
        <h2>{currentStudent.name}</h2>
        <p>Roll No: {currentStudent.rollNo}</p>
        <p>Email: {currentStudent.email}</p>
      </div>
      
      {/* components bnaye hain yahn or props pass ho rhy hain */}
      <Button title="Previous Button" onClickHandler={onClickMinusHandler}  className="button"  />
      <Button title="Next Button" onClickHandler={onClickAddHandler} className="button" />
      </div>
      <br />
      <Button title="Reset" onClickHandler={resetHandler}  className="button"  />
    </div>
  );
}
