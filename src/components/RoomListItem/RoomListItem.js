import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from './RoomListItem.styles';

const RoomListItem = ({ room, index, selectedRoomByIndex, handleSelected }) => {
  const classes = useStyles();

  return (
    <ListItem
      classes={{ root: classes.root, selected: classes.selected }}
      to={`/room/?id=${room.id}`}
      component={RouterLink}
      button
      divider={true}
      onClick={() => handleSelected(index)}
      selected={selectedRoomByIndex.id === room.id}
    >
      <ListItemText primary={room?.name} />
    </ListItem>
  );
};

RoomListItem.propTypes = {
  room: PropTypes.object,
  index: PropTypes.number,
  selectedRoomByIndex: PropTypes.object,
  handleSelected: PropTypes.func,
};

export default RoomListItem;
