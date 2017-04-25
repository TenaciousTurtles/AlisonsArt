import React, { Component } from 'react';
import { Container, Image, Button, Input, Segment} from 'semantic-ui-react';
import { connect } from 'react-redux';

let currentPassword = null;
let newPassword = null;
let confirmPassword = null;

const _setInputsToNull = () => {
  currentPassword.value = '';
  newPassword.value = '';
  confirmPassword.value = '';
};

class ChangePassword extends Component {
//please do NOT change the input into semantic Input, things break!!!
//NEED TO SET THE WIDTH OF THE FORM:
  render() {
    return (
      <span className="ui form">
        <br />
        Current password:
        <input as='input' type="password" placeholder="current password" ref={node => {
          currentPassword = node
        }} />
        <br />
        New password:
        <input as='input' type="password" placeholder="new password" ref={node => {
          newPassword = node
        }} />
        <br />
        Confirm password:
        <input type="password" placeholder="confirm password" ref={node => {
          confirmPassword = node
        }} />
        <Input type="submit" value="Submit" />
      </span>
    );
  }
}

class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this._clickHandler = this._clickHandler.bind(this);
    this._submitHandler = this._submitHandler.bind(this);
  }

  _clickHandler(e) {
    e.preventDefault();
    this.setState({toggle: !this.state.toggle});
  }

  _submitHandler(e) {
    e.preventDefault();
    let { userId } = this.props.user;
    // _setInputsToNull();
    // this.setState({toggle: !this.state.toggle});
    if (newPassword.value !== confirmPassword.value) {
      alert('Please enter the same password');
      _setInputsToNull();
    } else {
      fetch('/user/' + userId + '/changePassword', {
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`
        }),
        method: 'POST',
        body: JSON.stringify({
          currentPassword: currentPassword.value,
          newPassword: newPassword.value
        })
      })
      .then(response => {
        if (!response.ok) {
          console.log(response.statusText);
          throw Error('ah!');
        }
        return response.text();
      })
      .then(data => {
        console.log('im data : ', data);
      })
      .catch(err => {
        console.log('error: ', err.message);
      })
    }
  }

  render(){
    let { username } = this.props.user;
    if(username) {
      return(
        <Container>
          <form onSubmit={(e) => {this._submitHandler(e)}}>
          Username: {username}
          <br />
          Email:
          <br />
          Phone number: xxxxxxx
          <br />
          <Button onClick={(e) => {this._clickHandler(e)}} content="Change password" />
          {this.state.toggle? <ChangePassword /> : null}
          </form>
        </Container>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(UserSettings);