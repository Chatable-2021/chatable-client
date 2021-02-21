import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const RoomListItem = ({ room }) => {
  return (
    <ListItem to={`/room/?id=${room.id}`} component={RouterLink} button divider>
      <ListItemText primary={room?.name} />
    </ListItem>
  );
};

RoomListItem.propTypes = {
  room: PropTypes.object,
};

export default RoomListItem;
