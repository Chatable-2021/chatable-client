import * as yup from 'yup';

export const chatFormSchema = yup.object().shape({
  message: yup.string().required('Required value'),
  roomId: yup.string().required('You need to be in a room to send messages'),
  userId: yup.string(),
  userName: yup.string(),
});
