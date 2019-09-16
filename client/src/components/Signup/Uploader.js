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
<<<<<<< HEAD
      // passing back to parents
      this.props.handleFileChange(file);
=======
<<<<<<< HEAD
=======
      // passing back to parents
      this.props.handleFileChange(file);
>>>>>>> 767cb87ae4a936a687c3edf62839864a67f7ce1f
>>>>>>> junwon
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
<<<<<<< HEAD
        $imagePreview = (<img alt="userimg" src={imagePreviewUrl} />);
=======
<<<<<<< HEAD
        $imagePreview = (<img src={imagePreviewUrl} />);
=======
        $imagePreview = (<img alt="userimg" src={imagePreviewUrl} />);
>>>>>>> 767cb87ae4a936a687c3edf62839864a67f7ce1f
>>>>>>> junwon
      }
  
      return (
        <div>
          <form onSubmit={this._handleSubmit}>
<<<<<<< HEAD
            <input type="file" name="image" onChange={this._handleImageChange} />
            {/* <button type="submit" onClick={this._handleSubmit}>Upload Image</button> */}
=======
<<<<<<< HEAD
            <input type="file" onChange={this._handleImageChange} />
            <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
=======
            <input type="file" name="image" onChange={this._handleImageChange} />
            {/* <button type="submit" onClick={this._handleSubmit}>Upload Image</button> */}
>>>>>>> 767cb87ae4a936a687c3edf62839864a67f7ce1f
>>>>>>> junwon
          </form>
          {$imagePreview}
        </div>
      )
    }
  
  }

  export default Uploader;