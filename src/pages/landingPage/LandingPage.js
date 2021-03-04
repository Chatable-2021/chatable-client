import React from 'react';
import PropTypes from 'prop-types';
import RoomContainer from '../../components/RoomContainer/RoomContainer';

function LandingPage({
  user,
  socket,
  handleLogout,
  setLightOrDark,
  lightOrDark,
}) {
  return (
    <>
      <RoomContainer
        user={user}
        socket={socket}
        handleLogout={handleLogout}
        setLightOrDark={setLightOrDark}
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
  setLightOrDark: PropTypes.func,
};

export default LandingPage;
