import React , {Component} from 'react';
import '../../style/style.css';
import { Button, Container, Row, Col, Image, DropdownButton, Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserCard from "../../components/UserCard/UserCard";
import Wrapper from "../../components/Wrapper/Wrapper";
import matches from "../../matches.json";
import Logout from "../../images/logout-xxl.png"
import Prof from "../../images/user-4-xxl.png"
import axios from "axios";


class Matches extends Component {
    state = {
        matches
      };
    componentDidMount(){
        //check localStorage if there is a username
        //if not this.props.hitory("/login")
        if (!localStorage.getItem('username') || !this.props.location.state){
            this.props.history.push('/login');
        }
        else{
            console.log(this.props.location.state);
        }
    }
    handleLogout = () => {
        localStorage.setItem('username', "");
        this.props.history.push('/login');
    }

    handleProfile = () => {
        console.log(this.props.location.state);
        axios.get("/users/" + this.props.location.state.user.username).then(res => {
            console.log(res.data);
           this.props.history.push({
            pathname: '/profile',
            state: {
                user: res.data
            }});
        })
        .catch(err => console.log(err));
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <Link onClick={this.handleProfile}><img id='updateProfileBtn' src={Prof} alt="profile" /></Link>
                    <div className="navbar-brand">
                        Z O D I A C
                    </div>
                    <Link onClick={this.handleLogout}><img id='logoutBtn' src={Logout} alt="logout"/></Link>
                </nav>
                <div id='spacer'></div>
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