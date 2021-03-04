import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';

import { getRooms } from '../../selectors/roomSelector/roomSelector';
import { setRooms } from '../../actions/roomActions/roomActions';
import Chat from '../Chat/Chat';
import Header from '../Header/Header';
import Drawer from '../drawer/Drawer';
import useStyles from './RoomContainer.styles';

function RoomContainer({
  user,
  socket,
  handleLogout,
  setLightOrDark,
  lightOrDark,
}) {
  const classes = useStyles();

  const history = useHistory();

  // if (!socket) {
  //   history.push('/');
  // }

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const dispatch = useDispatch();
  const rooms = useSelector(getRooms);

  useEffect(() => {
    if (socket) {
      socket.emit('GET_ROOMS', user?.id);
      socket.on('ROOMS_RESULTS', data => {
        dispatch(setRooms(data.rooms));
      });
      return () => socket.off('ROOMS_RESULTS');
    }
  }, []);

  return (
    <>
      <Header
        handleDrawerToggle={handleDrawerToggle}
        user={user}
        handleLogout={handleLogout}
        lightOrDark={lightOrDark}
        setLightOrDark={setLightOrDark}
      />
      <Box component='section' className={classes.root}>
        <Drawer
          socket={socket}
          user={user}
          rooms={rooms}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box component='section' className={classes.chat}>
          <Chat user={user} socket={socket} />
        </Box>
      </Box>
    </>
  );
}

RoomContainer.propTypes = {
  user: PropTypes.object,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    off: PropTypes.func.isRequired,
  }),
  handleLogout: PropTypes.func.isRequired,
  lightOrDark: PropTypes.bool,
  setLightOrDark: PropTypes.func,
};

export default RoomContainer;
