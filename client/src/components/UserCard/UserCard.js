import React from "react";
<<<<<<< HEAD
import "./assets/style/styleUserCard.css";
=======
import '../../style/style.css';
>>>>>>> origin/d

function UserCard(props) {
  return (
    <span>
        <div className="deck">
            <div className="card-body">
            <img className="card-img-top" src={props.profilePic} alt={props.name}/>
                <h5 className="card-title">{props.name}, {props.age}</h5>
                <p className="card-text">{props.zodiacSign}</p>
            </div>  
        </div>
    </span>
  );
}

export default UserCard;


