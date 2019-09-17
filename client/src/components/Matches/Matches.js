import React , {Component} from 'react';
//<<<<<<< HEAD
import './assets/style/styleMatches.css';
//=======
import '../../style/style.css';
//>>>>>>> origin/d
import { Button, Container, Row, Col, Image, DropdownButton, Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserCard from "../../components/UserCard/UserCard";
import Wrapper from "../../components/Wrapper/Wrapper";
import matches from "../../matches.json";



class Matches extends Component {

    state = {
        matches
      };

    render(){
        return(
            <div>
                <br/>
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                        Matches
                        </Col>
                        <DropdownButton id="dropdown-basic-button" title="Gender">
                            <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Both</Dropdown.Item>
                        </DropdownButton>
                    </Row>
                </Container>
                <br/>
                    
{/* <div>
     {(() => {
       switch(state.choice) {
         case 'male':
           matchesList.map(m => {
        if(m.gender == "male") {
        return (
        <div>m.name</div>
        )
        }
    }
         case 'female':
           matchesList.map(m => {
        if(m.gender == "female") {
        return (
        <div>m.name</div>
        )
        }
    }
         default:
           matchesList.map(m => {
        return (
        <div>m.name</div>
        )
        }
       }
     })()}
</div> */}
                <Container>
                        <Col xs={12} md={12} lg={12}>
                            <Wrapper>
                                    {this.state.matches.map(match => (
                                            <Link to='matches/:id'><UserCard
                                            id={match.id}
                                            name={match.name}
                                            gender={match.gender}
                                            age={match.age}
                                            birthdate={match.birthdate}
                                            profilePic={match.profilePic}
                                            zodiacSign={match.zodiacSign}
                                            /></Link>
                                        ))
                                    }
                           </Wrapper>
                        </Col>
                </Container>
            </div>
        )
    }
}

export default Matches;