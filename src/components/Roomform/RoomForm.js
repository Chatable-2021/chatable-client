import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { AppInput, AppButton } from '../controls';
import { roomFormSchema } from './RoomForm.schema';
import useStyles from './RoomForm.styles';

function RoomForm({ user, socket }) {
  const classes = useStyles();

  const userId = user?.id;

  const { register, handleSubmit, reset, getValues } = useForm({
    resolver: yupResolver(roomFormSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  useEffect(() => {
    reset({ ...getValues(), userId });
  }, [userId]);

  const handleRoomForm = formValues => {
    socket.emit('CREATE_CHATROOM', formValues);
    reset();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(handleRoomForm)}>
      <input hidden ref={register} name='userId' />
      <AppInput
        color='primary'
        name='name'
        inputRef={register}
        variant='outlined'
        label='Create a room'
        size='small'
      />
      <AppButton
        color='primary'
        type='submit'
        variant='contained'
        styles={{ height: 40 }}
      >
        Create
      </AppButton>
    </form>
  );
}

RoomForm.propTypes = {
  user: PropTypes.object,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
  }),
};

export default RoomForm;
