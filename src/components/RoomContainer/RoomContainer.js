import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import RoomForm from '../Roomform/RoomForm';
import RoomList from '../RoomList/RoomList';
import { getRooms } from '../../selectors/roomSelector/roomSelector';
import { setRooms } from '../../actions/roomActions/roomActions';
import Chat from '../Chat/Chat';
import styles from './RoomContainer.css';
import Header from '../Header/Header';

function RoomContainer({ user, socket, handleLogout }) {
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
      <Header user={user} handleLogout={handleLogout} />
      <main className={styles.container}>
        <nav className={styles.rooms}>
          <RoomForm user={user} socket={socket} />
          <RoomList socket={socket} rooms={rooms} />
        </nav>
        <section className={styles.chat}>
          <Chat user={user} socket={socket} />
        </section>
      </main>
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
};

export default RoomContainer;
