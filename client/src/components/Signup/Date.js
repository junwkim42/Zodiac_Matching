import React from "react";
import DatePicker from "react-datepicker";
import '../../style/style.css';
 
import "react-datepicker/dist/react-datepicker.css";
 
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class Date extends React.Component {
  state = {
    // startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
        <div className='nonna'>
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
        </div>
    );
  }
}

export default Date;
