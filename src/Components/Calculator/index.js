import { Button } from "./Button"
import { useState } from "react";

export const Calculator = ()=>{
    const operatorsVar = ["%", "/", "*", "-", "+"];
    const buttons = [
        {
            className: "ac",
            label: "AC"
        },
        {
            className:"c",
            label:"←"
        },
        {
            className: "mod",
            label: "%"
        },
        {
            className:"divide",
            label:"/"
        },
        {
            className: "seven",
            label: "7"
        },
        {
            className:"eight",
            label:"8"
        },
        {
            className: "nine",
            label: "9"
        },
        {
            className:"multiply",
            label:"*"
        },
        {
            className: "four",
            label: "4"
        },
        {
            className:"five",
            label:"5"
        },
        {
            className: "six",
            label: "6"
        },
        {
            className:"sub",
            label:"-"
        },
        {
            className: "one",
            label: "1"
        },
        {
            className:"two",
            label:"2"
        },
        {
            className: "three",
            label: "3"
        },
        {
            className:"add",
            label:"+"
        },
        {
            className: "zero",
            label: "0"
        },
        {
            className:"decimal",
            label:"."
        },
        {
            className: "equal",
            label: "="
        },
    ]

    const [displayValue, setDisplayValue] = useState("");
    const [latestOperator, setLastOperator] = useState("");


    const handleButtonClick = (value) =>{
        console.log("Button Clicked", value)
        if(value === "AC"){
            return setDisplayValue("");
        }
         // 7. Eg.if user pressed the DEL button, remove the last character from the display text
         if ( value === "←") {
            // setDisplayValue = setDisplayValue.slice(0, -1);
            console.log("hello")
            return setDisplayValue(displayValue.slice(0, -1));
            // console.log("back button", stringToDisplay)
        }

        if( value === "="){
            // removes "=" from the dispalyValue
            const lastChar = displayValue.slice(-1);
            // const lastChar = displayValue[displayValue.length -1];

            let tempStringValue = displayValue;
            console.log(lastChar)
            //remove the last operator from the displayValue
            if(operatorsVar.includes(lastChar)){
                tempStringValue = setDisplayValue(displayValue.slice(0,-1));
            }
            const total = eval(tempStringValue)
            return setDisplayValue(total.toString());

        }

        if(operatorsVar.includes(value)){
            console.log(value);
            //dont let operator to go first if nth in display
            if(!displayValue){
                return;
            }

            let tempStringValue = displayValue;
            const lastChar = displayValue.slice(-1);

            if(operatorsVar.includes(lastChar)){
                tempStringValue = displayValue.slice(0,-1);
                console.log("What ",tempStringValue)
            }
             setDisplayValue(tempStringValue + value);
             setLastOperator(value);
             return;
        };

        setDisplayValue(displayValue + value);
    }
    return(
        <div className="container flex">
            <div className="cal grid">
              <div id="result" className="result">{displayValue}</div>
              {/* <div id="AC" className="btn ac">AC</div> */}
              {buttons.map ((item, index) => 
              <Button 
              key= {index}
              className={item.className} 
              label={item.label} 
              handleButtonClick={handleButtonClick}
              />
              )}
            </div>
        </div>
    )
}

