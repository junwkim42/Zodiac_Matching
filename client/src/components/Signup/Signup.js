import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.jpg';
import './assets/style/styleSignup.css';
import { Button, Container, Row, Col, Image, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Date from './Date';
import Uploader from'./Uploader';
import { Link } from 'react-router-dom';
import axios from "axios";


class Signup extends Component {
    state = {
        name: "",
        username: "",
        password: "",
        birthDate: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFileChange = (file) => {
        this.setState({
            file: file
        });
    }  

    handleFormSubmit = event => {
        //alert("hello!");
        
        event.preventDefault();
        console.log(`staet:`, this.state);
        console.log(this.state.password);
        console.log(this.state.birthDate);
        if (this.state.username && this.state.password && this.state.birthDate && this.state.gender && this.state.file) {
          axios.post("/join", {
            username: this.state.username,
            password: this.state.password,
            birthDate: this.state.birthDate,
            gender: this.state.gender,
            file: this.state.file           
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
      };

    render(){
        return(
            <>
           
                <div className='imgCont'>
                    <Container className='A'>
                        <Row className='a'>
                            <Col xs={8} md={4} lg={3}>
                                    <Image className='imgLogo mx-auto d-block' alt='aligment' src={Zodiac} roundedCircle fluid/>
                                    <div className='txtLogo'>Zodiac</div>
                            </Col>
                        </Row>
                    </Container>
                    <Container className='B'>
                        <Row className='b'>
                            <Col xs={6} md={8} lg={8}>
                                <Form onSubmit={this.handleFormSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            value={this.state.name}
                                            onChange={this.handleInputChange} 
                                            name="name" 
                                            placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control                                             
                                            value={this.state.username}
                                            onChange={this.handleInputChange} 
                                            name="username" 
                                            placeholder="Enter Username" />
                                    </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control                                           
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                            name="password"
                                            placeholder="Password"  />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="Confirm Password" />
                                        </Form.Group>
                                       
                                        <Form.Group controlId="formBasicBirthDate">
                                            <Form.Label>Birth Date</Form.Label>
                                            <Form.Control                                           
                                            value={this.state.birthDate}
                                            onChange={this.handleInputChange}
                                            name="birthDate"
                                            placeholder="DD/MM/YYYY"  />
                                        </Form.Group>
                                    
                                        <Form.Group controlId="formBasicGender">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control 
                                            value={this.state.gender}
                                            onChange={this.handleInputChange}
                                            name="gender"
                                            as="select">
                                            <option>Select gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>UnKnown</option>
                                            
                                        </Form.Control>
                                        </Form.Group>

                                        {/* <DropdownButton 
                                            value={this.state.gender}
                                            onChange={() => alert("hello")} id="dropdown-basic-button" title="Gender">
                                            <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Unknow</Dropdown.Item>
                                        </DropdownButton> */}

                                        <Container className='D'>
                                            <Row className='d'>
                                                 <Col xs={6} md={6} lg={4}>
                                        <Form.Group controlId="formBasicPassword">
                                            {/* <Form.Label>Upload Image</Form.Label> */}


                                        <Uploader handleFileChange = {this.handleFileChange} />


                                        </Form.Group>
                                                 </Col>
                                            </Row>
                                         </Container>
                                        <Button variant="primary" onClick={this.handleFormSubmit}>
                                            Signup
                                        </Button>

                                        <Link to='/'><Button variant="primary" type="submit">
                                            Cancel
                                        </Button></Link>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div> 
       
            </>
        )
    }
}

export default Signup;