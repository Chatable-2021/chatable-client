import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import List from '@material-ui/core/List';
import RoomListItem from '../RoomListItem/RoomListItem';
import useStyles from './RoomList.styles';
import { selectedRoom } from '../../actions/roomActions/roomActions';
import { getSelectedRoom } from '../../selectors/roomSelector/roomSelector';

const RoomList = ({ rooms }) => {
  const classes = useStyles();

  const roomsBeginningRef = useRef(null);

  const dispatch = useDispatch();

  const handleSelected = index => {
    dispatch(selectedRoom(index));
  };

  const selectedRoomByIndex = useSelector(getSelectedRoom);

  const scrollToTop = () => {
    roomsBeginningRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
  }, [rooms]);

  return (
    <List component='ul' className={classes.root}>
      {rooms
        ? rooms.map((room, index) => (
            <RoomListItem
              key={room.id}
              room={room}
              index={index}
              handleSelected={handleSelected}
              selectedRoomByIndex={selectedRoomByIndex}
            />
          ))
        : null}
      <div ref={roomsBeginningRef} />
    </List>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.array,
};

export default RoomList;
