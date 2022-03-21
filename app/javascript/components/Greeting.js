import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmessage } from '../redux/message/api';

const Greeting = () => {
  const message = useSelector((state) => state.messageReducer.message);
  // console.log('message => ', message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchmessage());
  }, []);

  return (
    <div>
      <h1>Greeting</h1>
      <div>
        Message:
        {' '}
        {message}
      </div>
    </div>
  );
};

export default Greeting;