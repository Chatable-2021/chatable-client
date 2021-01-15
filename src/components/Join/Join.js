import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

console.log(name, room);

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };
  
  const handleRoomChange = ({ target }) => {
    setRoom(target.value);
  };
  
  return (
    <div>
      <h1>Join</h1>
      <div><input placeholder="Name" onChange={handleNameChange}/></div>
      <div><input placeholder="Room" onChange={handleRoomChange}/></div>
    </div>
  );
}
