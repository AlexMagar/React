export const Button = ({className, label, handleButtonClick})=>{
    return(
        <div className={"btn " + className} 
        onClick={()=>handleButtonClick(label)}>
        {label}</div>
    )
}