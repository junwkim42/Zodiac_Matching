import React , { Component }from 'react';


class Uploader extends Component {
    constructor(props) {
      super(props);
      this.state = {
        file: '',
        imagePreviewUrl: ''
      };
      this._handleImageChange = this._handleImageChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
      // passing back to parents
      this.props.handleFileChange(file);
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img alt="userimg" src={imagePreviewUrl} className='uploadPreviewThumbnail' />);
      }
  
      return (
        <div>
          <form onSubmit={this._handleSubmit}>
            <input type="file" name="image" onChange={this._handleImageChange} className='picUploadForm'/>
            {/* <button type="submit" onClick={this._handleSubmit}>Upload Image</button> */}
          </form>
          {$imagePreview}
          <br/>
        </div>
      )
    }
  
  }

  export default Uploader;