import React , {Component} from 'react';
import './assets/style/style.css';
import { Button, Container, Row, Col, Image, DropdownButton, Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserCard from "././components/UserCard/";
import matches from "./matches.json";


class Matches extends Component {

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
                        <div class="card-deck">
                            {
                                this.state.matches.map(match => (
                                    <UserCard
                                    id={match.id}
                                    name={match.name}
                                    gender={match.gender}
                                    birthdate={match.birthdate}
                                    profilePic={match.profilePic}
                                    horoscope={}
                                    />
                                ))
                            }


                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                <h5 class="card-title">Username, Age</h5>
                                <p class="card-text">Horoscope</p>
                                <p class="card-text"><small class="text-muted">Match probability: %</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                <h5 class="card-title">Username, Age</h5>
                                <p class="card-text">Horoscope</p>
                                <p class="card-text"><small class="text-muted">Match probability: %</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                <h5 class="card-title">Username, Age</h5>
                                <p class="card-text">Horoscope</p>
                                <p class="card-text"><small class="text-muted">Match probability: %</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                <h5 class="card-title">Username, Age</h5>
                                <p class="card-text">Horoscope</p>
                                <p class="card-text"><small class="text-muted">Match probability: %</small></p>
                                </div>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>


        )
    }
}

export default Matches;