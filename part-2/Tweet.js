
const Tweet = (props) => {
    return(
        <div>
            <h3>{props.username}</h3>
            <h4>{props.name}</h4>
            <h5>{props.date}</h5>
            <p>{props.message}</p>
        </div>
    )
}