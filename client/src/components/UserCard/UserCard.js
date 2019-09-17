import React from "react";
import '../../style/style.css';
import Close from "../../images/minus-4-xxl.png"
import { Link } from 'react-router-dom';

function UserCard(props) {
  return (
    <span>
        <div className="deck">
            <div className="card-body">
                <img className='removeMatch' onClick={() => props.removeMatch(props.id)} src={Close} />
              <Link to='matches/:id'>
                <img className="card-img-top" src={props.profilePic} alt={props.name}/>
                <h5 className="card-title">{props.name}, {props.age}</h5>
                <p className="card-text">{props.zodiacSign}</p>
                <img className="card-img-bottom" src={props.zodiacPic} alt={props.zodiacSign}/>
              </Link>
            </div>  
        </div>
    </span>
  );
}

export default UserCard;


