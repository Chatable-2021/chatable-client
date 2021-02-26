import * as yup from 'yup';

export const chatFormSchema = yup.object().shape({
  message: yup.string().required('Required value'),
  roomId: yup.string(),
  userId: yup.string(),
  userName: yup.string(),
});
