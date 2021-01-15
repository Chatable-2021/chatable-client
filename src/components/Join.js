import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  
  return (
    <h1>Join</h1>
  );
}
