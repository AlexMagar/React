import { useState } from "react"

export const Form = ({value, onSubmitVlaue, handleChange}) =>{
    return(
        <form onSubmit={onSubmitVlaue}>
        {/* we use value={} => it work as the getElementByID as in pure JS */}
        <input type="text" value={value} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    )
}