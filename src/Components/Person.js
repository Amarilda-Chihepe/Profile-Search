import "../Assets/CSS/Profile.css"

function Person(props){

    return(
        <div className="profile">
            
            <div className="img">
                <img
                    src={props.picture}
                    alt={props.alt}
                />
            </div>

            <div className="info">
                <p>{props.id}</p>
                <p>{props.title}. {props.firstName}  {props.lastName}</p>
            </div>
       </div>
    )
}

export default Person;

