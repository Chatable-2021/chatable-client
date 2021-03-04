import React, { useEffect, useRef } from 'react';
import ReactEmoji from 'react-emoji';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import useStyles from './ChatMessage.styles';

export default function ChatMessage({ message, user, isLastMessage }) {
  const classes = useStyles();

  const messageRef = useRef(null);

  const scrollToLastMessage = () => {
    if (isLastMessage) {
      messageRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const userName = message.userName;

  useEffect(() => {
    scrollToLastMessage();
  }, []);

  return (
    <ListItem className={classes.root} ref={messageRef}>
      <ListItemIcon>
        <Avatar alt={userName} src='./broken' />
      </ListItemIcon>
      <Box>
        <Typography>{message.userName}</Typography>
        <Typography>{ReactEmoji.emojify(message.messageText)}</Typography>
      </Box>
    </ListItem>
  );
}
