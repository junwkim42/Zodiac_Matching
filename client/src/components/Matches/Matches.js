import React , {Component} from 'react';
import './assets/style/style.css';
import { Button, Container, Row, Col, Image, DropdownButton, Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserCard from "../../components/UserCard/UserCard";
import matches from "../../matches.json";


class Matches extends Component {

    state = {
        matches
      };

    render(){
        return(
            <div>
                <Container>
                    <br/>
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
                    <br/>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <div class="deck">
                                {this.state.matches.map(match => (
                                        <Link to='/{match.id}'><UserCard
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Matches;