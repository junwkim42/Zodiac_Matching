import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.jpg';
import '../../style/style.css';
import { Button, Container, Row, Col, Image, Form} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Date from './Date';
import Uploader from'./Uploader';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import axios from "axios";
import ImageUploader from './Uploader'

class Signup extends Component {
    state = {
        name: `user${Math.random()}`,
        username: `user${Math.random()}`,
        password: "testtest",
        passwordConfirm: "testtest",
        birthDate: "04/04/1980",
        gender: "Male",
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
        if( !(this.state.name && this.state.username && this.state.password && this.state.birthDate && this.state.gender && this.state.file) ){
            console.log( `x Sorry unable to submit form, incomplete info 
            name(${this.state.name})
            username(${this.state.username})
            password(${this.state.password})
            birthDate(${this.state.birthDate})
            gender(${this.state.gender})
            file(${this.state.file})!`);
            return;
        }

        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('name', this.state.name);
        formData.append('username', this.state.username);
        formData.append('password', this.state.password);
        formData.append('birthDate', this.state.birthDate);
        formData.append('gender', this.state.gender);

        axios.post("/join", formData, {
            headers: {
            'content-type': 'multipart/form-data'
            }
        })            
    //   axios.post("/join", {
    //     username: this.state.username,
    //     password: this.state.password,
    //     birthDate: this.state.birthDate,
    //     gender: this.state.gender,
    //     file: this.state.file           
    //   })
        .then(res => {
            console.log( ` creation done, data: `, res.data );
            if( res.data.error ){
                alert( res.data.error );
            } else if( res.data.url ){
                // join successful, show message then go to login page.
                console.log( ` redirecting to: ${res.data.url}`);
                window.location = res.data.url;
            } })
        .catch(err => {
            alert( err ); });

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

                                    <Form.Group controlId="formBasicPassword">
                                        {/* <Form.Label>Confirm Password</Form.Label> */}
                                        <Form.Control 
                                            type="password"  
                                            className='formInput'
                                            value={this.state.password}
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
                                            placeholder="DD/MM/YYYY" />
                                    </Form.Group>

                                    Select gender of your matches: <br/><br/>
                                    <form className='radio-group'>
                                        <div class="radio-group">
                                            <input type="radio" id="radio1" name="radio-category" value="male" checked/>
                                            <label for="radio1">Male</label>
                                            <br/>
                                            <input type="radio" id="radio2" name="radio-category" value="female" />
                                            <label for="radio2">Female</label>
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