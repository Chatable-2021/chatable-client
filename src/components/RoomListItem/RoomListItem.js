import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    background: theme.palette.divider,
  },
}));

const RoomListItem = ({ room }) => {
  const classes = useStyles();

  return (
    <ListItem
      classes={{ root: classes.root }}
      to={`/room/?id=${room.id}`}
      component={RouterLink}
      button
      divider={true}
    >
      <ListItemText primary={room?.name} />
    </ListItem>
  );
};

RoomListItem.propTypes = {
  room: PropTypes.object,
};

export default RoomListItem;
