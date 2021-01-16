import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from './Signup.schema';

const onSubmit = (data) => {
  console.log(data);
};

export default function Signup() {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(signupSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: { email: '', password: '', name: '' },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <input 
        name='name'
        ref={register}
        placeholder='User Name'>
      </input>
      <input 
        name='email' 
        ref={register} 
        placeholder='Email' />
      <input
        name='password'
        ref={register}
        type='password'
        placeholder='Password'
      ></input>
      <button type='submit'>Sign Up</button>
    </form>
  );
}
