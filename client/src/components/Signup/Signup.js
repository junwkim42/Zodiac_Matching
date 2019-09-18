import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.png';
import '../../style/style.css';
import { Button, Container, Row, Col, Image, Form} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Uploader from'./Uploader';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import axios from "axios";



class Signup extends Component {
    state = {
        name: "",
        username: "",
        password: "",
        passwordConfirm: "",
        birthDate: "",
        gender: "",
        file: null
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFileChange = (file) => {
        // track the image file upload
        this.setState({ file });
    }  

    handleFormSubmit = event => {
        // prevent default install, we will do it ourselves below
        event.preventDefault();
        // check the state info
        console.log(`state:`, this.state);
        if (this.state.password !== this.state.passwordConfirm){
            alert("Password mismatch.");
        }
        else if (this.state.password.length < 6){
            alert("Password has to be at least 6 characters");
        }
        else if (this.state.username && 
            this.state.password && 
            this.state.birthDate && 
            this.state.gender){
            // appending all the fields to the form-data.
            const formData = new FormData();
            for( let n of ['file','name','username','password','birthDate','gender'] )
                formData.append(n, this.state[n]);

            axios.post("/join", formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then(res => {
                console.log( ` creation done, data: `, res.data );
                if( res.data.error ){
                    alert( res.data.error );
                } else if( res.data.url ){
                    // join successful, show message then go to login page.
                    console.log( ` redirecting to: ${res.data.url}`);
                    window.location = res.data.url;
            }})
            .catch(err => {
                alert( err ); });
        }
        else {
                alert("Please finish the form to continue.")
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
                            <Col xs={9} md={5} lg={5}>
                                <Form>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            value={this.state.name}
                                            onChange={this.handleInputChange} 
                                            name="name" 
                                            placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        {/* <Form.Label>Name</Form.Label> */}
                                        <Form.Control 
                                            type="email" 
                                            className='formInput'
                                            value={this.state.username}
                                            onChange={this.handleInputChange} 
                                            name="username" 
                                            placeholder="Enter your email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        {/* <Form.Label>Password</Form.Label> */}
                                        <Form.Control 
                                            label="password" 
                                            type="password" 
                                            className='formInput'
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                            name="password"
                                            placeholder="Password"/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPasswordConfirm">
                                        {/* <Form.Label>Confirm Password</Form.Label> */}
                                        <Form.Control 
                                            type="password"  
                                            className='formInput'
                                            value={this.state.passwordConfirm}
                                            onChange={this.handleInputChange}
                                            name="passwordConfirm"
                                            placeholder="Re-enter password"/>
                                    </Form.Group>
                                    
                                    <Form.Group controlId="formBasicDate">
                                        <Form.Control
                                            label="Birth Date" 
                                            type="date"  
                                            className='formInput'
                                            value={this.state.birthDate}
                                            onChange={this.handleInputChange}
                                            name="birthDate"
                                            placeholder="DD-MM-YYYY" />
                                    </Form.Group>

                                    Select your gender: <br/><br/>
                                    <form className='radio-group'>
                                        <div class="radio-group">
                                            <label>
                                            <input type="radio" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.handleInputChange}/>
                                            Male
                                            </label>
                                            <br/>
                                            <label>
                                            <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.handleInputChange} />
                                            Female
                                            </label>
                                        </div>
                                    </form>

                                    <Form.Group controlId="formBasicPassword" id='picUpload'>
                                        <Form.Label>upload your profile picture</Form.Label>
                                        <Uploader handleFileChange={this.handleFileChange}/>
                                    </Form.Group>
                                    
                                    <Button 
                                        type="submit" 
                                        variant="info" 
                                        className='genericBtn'
                                        onClick={this.handleFormSubmit}>
                                        SIGNUP
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