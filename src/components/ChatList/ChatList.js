import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';

import ChatMessage from '../ChatMessage/ChatMessage';
import InitialChatMessage from '../initialChatMessage/InitialChatMessage';
import WelcomeMessage from '../welcomeMessage/WelcomeMessage';
import useStyles from './ChatList.styles';

function ChatList({ user, messages }) {
  const classes = useStyles();

  const isMessages = messages?.length;

  return (
    <Container
      component='section'
      disableGutters={true}
      className={classes.root}
    >
      <WelcomeMessage />
      <List disablePadding={true} className={classes.list}>
        <InitialChatMessage isMessages={isMessages} />

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

ChatList.propTypes = {
  user: PropTypes.object,
  messages: PropTypes.array,
};

export default ChatList;
