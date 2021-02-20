import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import ChatList from '../ChatList/ChatList';
import styles from './Chat.css';
import ChatForm from '../ChatForm/ChatForm';

function Chat({ socket, user }) {
  const [messages, setMessages] = useState([]);

  const location = useLocation();
  function useQuery() {
    const query = new URLSearchParams(location.search);
    return query.get('id');
  }

  const id = useQuery();

  useEffect(() => {
    if (socket) {
      socket.emit('JOIN_ROOM', { id, user });
    }
  }, [id]);

  useEffect(() => {
    if (socket) {
      socket.on('JOIN_RESULTS', payload => {
        setMessages(payload.messages);
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
  }, []);

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
