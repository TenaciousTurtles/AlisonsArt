const initialState = {
  receiverId: null,
  messages: [],
  roomname: null,
};

const chatReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'socket/CHAT_MESSAGE':
      return {
        ...state,
      }
    case 'GETTING_RECEIVER_ID':
      return {
        ...state,
        receiverId: action.data
      }
    case 'socket/INITIALIZE_ROOM':
      return {
        ...state,
        receiverId: action.data[0],
        messages: action.data[1],
        roomname: action.data[2],
      }
    case 'PASS_MESSAGE':
      return {
        ...state,
        messages: state.messages.slice().concat(action.data)
      }
    default: 
      return state;
  }
};

export default chatReducer;
