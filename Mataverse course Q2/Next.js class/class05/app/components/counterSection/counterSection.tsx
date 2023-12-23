"use client"
import {useState} from "react"
import Button from "../button/button"
var names = ["","",""]
export default function CounterSection() {
  var count:number = 0;
  // countstate is variable here and "setcountstate" is a function and its name is also chng if we want 
  // and use state is variable but its by default same and also give its value.
  const [countState, setCountState] = useState(0)
  // here make different variables by using state variable with different data types.
  const [isStatus, setIsStatus] = useState(false)
  const [email, setEmail] = useState("")
  const [student, setStudent] = useState({rollNo:234, email:"sf"})
  
  const onClickAddHandler = ()=>{
    count = count + 1
    setCountState(countState + 1)
    console.log("count in onClickAddHandler", count);
    
  }

  const onClickMinusHandler = ()=>{
   count = count - 1
   setCountState(countState - 1)
   console.log("count in onClickMinusHandler", count);
  }

  const resetHandler = ()=>{
    setCountState(0)
  }
  console.log("count serction render");
  
  return (
    <div>

      {/* components bnaye hain yahn or props pass ho rhy hain  */}
     <Button title="+" onClickHandler={onClickAddHandler}/>
  
      <span>{countState}</span>
      <Button title="-" onClickHandler={onClickMinusHandler}/>
       <br/>
      <Button title="Reset" onClickHandler={resetHandler}/>

    </div>
  )
}
