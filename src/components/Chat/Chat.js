import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import ChatList from '../ChatList/ChatList';
import styles from './Chat.css';
import ChatForm from '../ChatForm/ChatForm';
import { setMessages } from '../../actions/chatActions/chatActions';
import { getMessages } from '../../selectors/chatSelector/chatSelector';

function Chat({ socket, user }) {
  const dispatch = useDispatch();

  // const [messages, setMessages] = useState([]);

  const location = useLocation();
  function useQuery() {
    const query = new URLSearchParams(location.search);
    return query.get('id');
  }

  const id = useQuery();

  const messages = useSelector(getMessages(id));

  useEffect(() => {
    if (socket) {
      socket.emit('JOIN_ROOM', { id, user });
    }
  }, [id]);

  useEffect(() => {
    if (socket) {
      socket.on('JOIN_RESULTS', payload => {
        // setMessages(payload.messages);
        if (id !== null) {
          dispatch(setMessages(id, payload.messages));
        }
      });

      socket.on('BROADCAST_JOIN', payload => {
        console.log(payload, 'everyones message');
      });

      socket.on('MESSAGE_RESULTS', payload => {
        setMessages(messages => [...messages, payload]);
      });

      return () => {
        socket.off('JOIN_RESULTS');
        socket.off('BROADCAST_JOIN');
        socket.off('MESSAGE_RESULTS');
      };
    }
  }, [id]);

  return (
    <section className={styles.container}>
      <ChatList roomId={id} user={user} messages={messages} socket={socket} />
      <ChatForm roomId={id} user={user} messages={messages} socket={socket} />
    </section>
  );
}

Chat.propTypes = {
  location: PropTypes.object,
};

export default Chat;
