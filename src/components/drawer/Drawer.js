import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import MaterialDrawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import RoomList from '../RoomList/RoomList';
import RoomForm from '../Roomform/RoomForm';
import useStyles from './Drawer.styles';
import Typography from '@material-ui/core/Typography';

function Drawer({ socket, user, rooms, mobileOpen, handleDrawerToggle }) {
  const classes = useStyles();

  const drawer = (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <Typography
        variant='h5'
        style={{
          textAlign: 'center',
          marginTop: 10,
          fontWeight: 'bolder',
          maxHeight: '35px',
        }}
      >
        Public Rooms
      </Typography>
      <RoomForm socket={socket} user={user} />
      <div style={{ height: 'calc(100vh - 176px)', paddingTop: 5 }}>
        <RoomList rooms={rooms} />
      </div>
    </>
  );

  return (
    <nav className={classes.root} aria-label='mailbox folders'>
      <Hidden smUp implementation='js'>
        <MaterialDrawer
          variant='temporary'
          anchor='left'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </MaterialDrawer>
      </Hidden>
      <Hidden xsDown implementation='js'>
        <MaterialDrawer
          id='banana hamock'
          classes={{
            paper: classes.drawerPaper,
          }}
          variant='permanent'
          open
        >
          {drawer}
        </MaterialDrawer>
      </Hidden>
    </nav>
  );
}

Drawer.propTypes = {
  user: PropTypes.object,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    off: PropTypes.func.isRequired,
  }),
  mobileOpen: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  rooms: PropTypes.array,
};

export default Drawer;
