import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.png';
import './assets/style/style.css';
import { Button } from 'react-bootstrap';


class Main extends Component {

    render(){
        return(
            <>
            <div>
                <img src={Zodiac} />
            </div>
            <div>
                <h1>Zodiac</h1>
            </div>
            <span>
            <Button variant="success">LogIn</Button>
            </span>
            <span>
            <Button variant="warning">SignUP</Button>
            </span>
            </>
        )
    }
}

export default Main;