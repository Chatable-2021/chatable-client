import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Backdrop, Fade, Paper, Box } from '@material-ui/core';

import AppText from '../appText/AppText';
import Signup from '../Signup/Signup';
import blueLogo from '../../assets/blueLogo.png';
import useStyles from './SignUpModal.styles';

function SignUpModal({ socket, styles, setUser, handleClose, open }) {
  const classes = useStyles();

  return (
    <Modal
      className={classes.root}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          <Box className={classes.logoContainer}>
            <img src={blueLogo} className={classes.logo} />
          </Box>
          <AppText variant='h4' component='h1' className={classes.title}>
            Create your account
          </AppText>
          <Signup socket={socket} setUser={setUser} styles={styles} />
        </Paper>
      </Fade>
    </Modal>
  );
}

SignUpModal.propTypes = {
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
  open: PropTypes.bool,
  styles: PropTypes.object,
  handleClose: PropTypes.func,
};

export default SignUpModal;
