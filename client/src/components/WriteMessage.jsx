import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Segment, Button, TextArea, Form } from 'semantic-ui-react';
import * as ChatActions from './../actions/chatActionCreator.jsx';

class WriteMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.retrieveMessages = this.retrieveMessages.bind(this);
    // this.handleEnter = this.handleEnter.bind(this);
  }

  handleFormChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();
    var messagePayload = {
      text: this.state.text,
      sender_id: this.props.userId,
      receiver_id: this.props.receiverId,
      roomname: this.props.roomname,
    }
    this.setState({
      text: '',
    })
    fetch('/messages/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(messagePayload)
    })
    .then((response) => {
      if (!response.ok) {
        throw Error('message failed to send...');
      }
      return response.json();
    })
    .then((data) => {
      let {dispatch} = this.props;
      dispatch(ChatActions.chatMessage(messagePayload));
    })
    .catch((error) => {
      console.log('handleFormSubmit failed! Error: ', error);
    })
  }

  // retrieveMessages() {
  //   fetch(`/messages/${this.props.userId}/?receiver_id=${this.props.receiverId}`, {
  //     method: 'GET',
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`,
  //     })
  //   })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw Error('failed to retrieve messages...')
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log('messages retrieved! data: ', data);
  //   })
  //   .catch((error) => {
  //     console.log('retrieveMessages failed! error: ', error);
  //   })
  // }

  // componentDidMount() {
  //   setTimeout(this.retrieveMessages, 1500);
  // }  

  // handleEnter(e) {
  //   if(e.keyCode == 13 && e.shiftKey == false) {
  //     e.preventDefault();
  //     this.handleFormSubmit(); 
  //   }
  // }

  render() {
    if (!this.props.roomname || !this.props.receiverId) {
      return <div></div>
    } else {
      return (
        <Segment className='messageWindow'>
          <p><strong>conversation with: {this.props.receiverId}</strong></p>
          <Segment className='messageFeed'>
            {
              this.props.messages.map(message => {
                if (Number(message.sender_id) === Number(this.props.userId)) {
                  return <p className='senderMessage'>{message.text}</p>
                } else {
                  return <p className='receiverMessage'>{message.text}</p>
                }
              })
            }
          </Segment>
          <Form>  
            <Form.Field>
              <input value={this.state.text} onChange={this.handleFormChange}/>
            </Form.Field>
            <Button style={{'display': 'none'}} type='submit' onClick={this.handleFormSubmit}>the button</Button>
          </Form>
        </Segment>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    userId: state.user.userId,
    receiverId: state.chat.receiverId,
    messages: state.chat.messages,
    roomname: state.chat.roomname,
  }
}

export default connect(mapStateToProps)(WriteMessage)

