import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AppInput, AppButton } from '../controls';
import { chatFormSchema } from './ChatForm.schema';
import useStyles from './ChatForm.styles';

function ChatForm({ user, socket, roomId }) {
  const { id, name } = user;
  const classes = useStyles();

  const { register, handleSubmit, reset, getValues } = useForm({
    resolver: yupResolver(chatFormSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  useEffect(() => {
    reset({ ...getValues(), roomId, userId: id, userName: name });
  }, [roomId]);

  const handleChatForm = formValues => {
    socket.emit('CHAT_MESSAGE', formValues);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleChatForm)} className={classes.root}>
      <input hidden ref={register} name='userId' />
      <input hidden ref={register} name='userName' />
      <input hidden ref={register} name='roomId' />
      <AppInput
        fullWidth={true}
        name='message'
        inputRef={register}
        variant='outlined'
        label='Message'
      />
      <AppButton
        color='primary'
        type='submit'
        variant='contained'
        styles={{ width: '15%' }}
      >
        Send
      </AppButton>
    </form>
  );
}

ChatForm.propTypes = {
  user: PropTypes.object,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    off: PropTypes.func.isRequired,
  }),
  roomId: PropTypes.string,
};

export default ChatForm;
