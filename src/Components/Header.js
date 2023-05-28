// ======== Header Component =========
import { useState } from "react";
import { Form } from "./Form";
import { RealTime } from "./RealTime";
import { Display } from "./Display";
import { IncreaseCount } from "./IncreaseCount";

export const Header = () => {
  const myAppName = "Counter Application";
  //defiinig state for input filed
  const [text, setText] = useState(" ");

  //text for after submit is clicked 
  const [textAfter, setTextAfter] = useState("");

  const [counter, setCounter] = useState(0);
  // console.log("state is ", state);

  //increase the count by One
  const handleCountByOne = () =>{
    setCounter(counter + 1)
  }
  
  // decrease the value of counter
  const handleDecrement = () =>{
    setCounter(counter -1)
  }

  //add button by two
  const handleIncrementByTwo = () =>{
    setCounter(counter + 2)
  }

  //reset counter
  const resetCounter = ()=>{
    setCounter(0);
  }

  //handle change
  const handleChange = (event)=>{
    console.log(event)
    setText(event.target.value);
  }

  const onSubmitVlaue = (event)=>{
    console.log(event)
  //   //@preventDefault()
  //   //it prevent current state being referece 
  //   // if browser is refereced the data will not change
    event.preventDefault(); 

    setTextAfter(text)

  }
  return (
    <div>
      <h1> {myAppName} </h1> 
      <h3> Initial Value: {counter} </h3>
      {/* <button onClick={() => setCounter(counter + 1)}> Increment </button> */}
      <IncreaseCount handleCountByOne={handleCountByOne}/>
      <button onClick={handleDecrement}> Decrement </button>
      <button onClick={handleIncrementByTwo}>Add By 2</button>
      <button onClick={resetCounter}>Reset</button>
      <hr/>

      <h1>Props and Cimpo</h1>
      <Form value={text} onSubmitVlaue={onSubmitVlaue} handleChange={handleChange}/>
      <RealTime value={text}/>
      <Display value={textAfter}/>
    </div>
  );
};
