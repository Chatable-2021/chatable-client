import React from 'react';
import PropTypes from 'prop-types';
import RoomContainer from '../../components/RoomContainer/RoomContainer';

function LandingPage({ user, socket, handleLogout, lightOrDark }) {
  return (
    <>
      <RoomContainer
        user={user}
        socket={socket}
        handleLogout={handleLogout}
        lightOrDark={lightOrDark}
      />
    </>
  );
}

LandingPage.propTypes = {
  user: PropTypes.object,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    off: PropTypes.func.isRequired,
  }),
  handleLogout: PropTypes.func.isRequired,
  lightOrDark: PropTypes.bool,
};

export default LandingPage;
