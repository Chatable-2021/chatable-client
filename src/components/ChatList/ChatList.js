import React from 'react';
import { List, Container } from '@material-ui/core';

import ChatMessage from '../ChatMessage/ChatMessage';
import useStyles from './ChatList.styles';
import styles from './chatList.css';

export default function ChatList({ user, messages }) {
  const classes = useStyles();
  return (
    <Container
      component='section'
      disableGutters={true}
      className={classes.root}
    >
      <List disablePadding={true} className={classes.list}>
        {messages
          ? messages.map((message, index) => (
              <ChatMessage
                isLastMessage={index === messages.length - 1}
                key={message.id}
                user={user}
                message={message}
              />
            ))
          : null}
      </List>
    </Container>
  );
}
