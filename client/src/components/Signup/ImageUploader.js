import React, { Component } from 'react';
import '../../style/style.css';
 
import ImageUploader from 'react-image-uploader';
 
class Uploader extends Component {
  render() {
    return (
      <div>
        <ImageUploader multi={true} baseURL={'http://localhost:8080'} />
      </div>
    );
  }
}

export default Uploader;


{/* <div>
https://www.npmjs.com/package/react-wzh-image-uploader
</div> */}