function Employee(props){
    return (
        <>
            <h1> Here is {props.name} </h1>
            {/* <p>{props.role ? props.role : "No role"}</p> */}
            {/* the line of code above and below works the same way */}
            {props.role ? <p>{props.role}</p> : <p>No role</p> }
        </>
    )
}

export default Employee;