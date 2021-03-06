import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getRoomById } from '../../selectors/roomSelector/roomSelector';
import useStyles from './InitialChatMessage.styles';

function InitialChatMessage({ isMessages }) {
  const classes = useStyles();
  const location = useLocation();
  const id = location.search.slice(4);

  const room = useSelector(getRoomById(id));

  let roomName;

  if (room) {
    roomName = room.name;
  }

  const isThereMessages = isMessages ? 'dividerWithMessages' : 'divider';
  return (
    <>
      <ListItem className={classes.initialMessageContainer}>
        <Typography className={classes.initialMessageTitle} variant='h4'>
          {room ? `Welcome to #${roomName}!` : ''}
        </Typography>
        <Typography className={classes.initialMessageSubtitle}>
          {room ? `this is the start of the #${roomName} room.` : ''}
        </Typography>
      </ListItem>
      <Divider className={classes[isThereMessages]} />
    </>
  );
}

InitialChatMessage.propTypes = {
  isMessages: PropTypes.number,
};

export default InitialChatMessage;
