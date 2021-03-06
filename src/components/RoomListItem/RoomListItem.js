import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';

import useStyles from './RoomListItem.styles';
import { Typography } from '@material-ui/core';

const RoomListItem = ({ room, index, selectedRoomByIndex, handleSelected }) => {
  const classes = useStyles();

  return (
    <ListItem
      classes={{ root: classes.root, selected: classes.selected }}
      to={`/landing-page/?id=${room.id}`}
      component={RouterLink}
      button
      divider={true}
      onClick={() => handleSelected(index)}
      selected={selectedRoomByIndex.id === room.id}
    >
      <ListItemText>
        <Tooltip
          title='text'
          arrow
          placement='top'
          classes={{ tooltip: classes.tooltip }}
        >
          <Typography
            style={{ fontSize: 20, marginRight: 8, fontWeight: 'bolder' }}
            display='inline'
          >
            #
          </Typography>
        </Tooltip>
        <Typography display='inline'>{room?.name}</Typography>
      </ListItemText>
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
