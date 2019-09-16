import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.jpg';
import '../../style/style.css';
import { Button, Container, Row, Col, Image, Form} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
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
                    <br></br>
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
                                       
<<<<<<< HEAD
=======
<<<<<<< HEAD
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Birth-Date</Form.Label>
                                            <Container className='C'>
                                            <Row className='c'>
                                                 <Col xs={10} md={8} lg={5}>
                                            <Date/>
                                            </Col>
                                            </Row>
                                         </Container>
                                        </Form.Group>

                                        <DropdownButton id="dropdown-basic-button" title="Gender">
                                            <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Unknow</Dropdown.Item>
                                        </DropdownButton>
=======
>>>>>>> junwon
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
<<<<<<< HEAD
=======
>>>>>>> 767cb87ae4a936a687c3edf62839864a67f7ce1f
>>>>>>> junwon

                                        <Container className='D'>
                                            <Row className='d'>
                                                 <Col xs={6} md={6} lg={4}>
                                        <Form.Group controlId="formBasicPassword">
                                            {/* <Form.Label>Upload Image</Form.Label> */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                                            <Uploader/>
=======
>>>>>>> junwon


                                            <Uploader handleFileChange = {this.handleFileChange} />


<<<<<<< HEAD
=======
>>>>>>> 767cb87ae4a936a687c3edf62839864a67f7ce1f
>>>>>>> junwon
                                        </Form.Group>
                                                 </Col>
                                            </Row>
                                         </Container>
<<<<<<< HEAD
                                        <Button variant="primary" onClick={this.handleFormSubmit}>
=======
<<<<<<< HEAD
                                        <Link to='/login'><Button variant="primary" type="submit">
=======
                                        <Button variant="primary" onClick={this.handleFormSubmit}>
>>>>>>> 767cb87ae4a936a687c3edf62839864a67f7ce1f
>>>>>>> junwon
                                            Signup
                                        </Button>

                                    <Link to='/'><Button type="submit" variant="info" className='genericBtn'>
                                        CANCEL
                                    </Button></Link>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                    <br></br>
                </div> 
       
            </>
        )
    }
}

export default Signup;