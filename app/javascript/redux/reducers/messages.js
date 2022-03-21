const initState = {
  message: '',
};

const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'COMPLETE_MESSAGE':
      return action.payload.message;
    default:
      return state;
  }
};
export const fetchmessage = () => async (dispatch) => {
  await fetch('/api/messages')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'COMPLETE_MESSAGE', payload: data });
    })
};

export default messageReducer;