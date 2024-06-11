
const Person = (props) => {
    let msg;
    if (props.age >= 18){
        msg = 'please go vote!'
    } else {
        msg = 'you must be 18'
    }

    // let nameLen = props.name.length;
    // if(nameLen > 8){
    //     let shortName = props.name.slice(0,6);
    //     props.name = shortName
    // } 

    return(<div>
        <p> Learn some more information about this person </p>
        <h3>Name: {props.name.slice(0, 6)} </h3>
        <p>Age: {props.age} </p>
        <p>{msg}</p>
        <h4>{props.name}'s Hobbies!</h4>
        <ul> {props.hobbies.map(h => <li>{h}</li>)}</ul>
    </div>)
}