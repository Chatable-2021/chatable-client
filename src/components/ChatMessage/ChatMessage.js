import React, { useEffect, useRef } from 'react';
import ReactEmoji from 'react-emoji';
import {
  ListItem,
  Avatar,
  ListItemIcon,
  Typography,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline',
    padding: theme.spacing(2),
  },
}));

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
