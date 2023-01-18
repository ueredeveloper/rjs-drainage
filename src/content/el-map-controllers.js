import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import LayersClearIcon from '@mui/icons-material/LayersClear';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ElMapControllers({setChecked}) {

  const handleChecked = (event) => {
    setChecked(event.target.name, event.target.checked)
  };

  return (
    <div className='flex flex-row'>
      <div><Checkbox name="fraturado" onChange={handleChecked} /> Fraturado </div>
      <div><Checkbox name="poroso" onChange={handleChecked} /> Poroso</div>
      <Button><LayersClearIcon /></Button>
    </div>
  )
}

export default ElMapControllers;