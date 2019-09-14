import React from "react";
import "./assets/style/style.css";

function UserCard(props) {
  return (
    <div className="cardContainer">
      <div className="card bg-dark text-white">
          <img className="card-img" src={props.profilePic} alt={props.name}/>
          <div className="card-img-overlay">
              <h5 className="card-title">{props.name}, {props.age}</h5>
              <p className="card-text">{props.zodiacSign}</p>
          </div>
      </div>
    </div>
  );
}

export default UserCard;