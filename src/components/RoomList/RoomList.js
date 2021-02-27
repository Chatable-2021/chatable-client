import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import RoomListItem from '../RoomListItem/RoomListItem';
import useStyles from './RoomList.styles';

const RoomList = ({ rooms, socket }) => {
  const roomsBeginningRef = useRef(null);
  const classes = useStyles();

  const scrollToTop = () => {
    roomsBeginningRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
  }, [rooms]);

  return (
    <List component='ul' className={classes.root}>
      {rooms
        ? rooms.map(room => (
            <RoomListItem socket={socket} key={room.id} room={room} />
          ))
        : null}
      <div ref={roomsBeginningRef} />
    </List>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.array,
  socket: PropTypes.shape({
    emit: PropTypes.func,
  }),
};

export default RoomList;
