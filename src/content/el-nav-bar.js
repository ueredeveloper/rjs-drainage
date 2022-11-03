import React from 'react';
import { BsFillLightbulbFill, BsFillMoonFill } from "react-icons/bs";

function ElNavBar({ dark, setDark }) {

  function setIcon() {
    return dark ? <BsFillLightbulbFill /> : <BsFillMoonFill />
  }
  return (
    <nav>
      <a href="/"> Home </a>
      <a href="/superficial">  Superficial</a>
      <a href="/subterraneo"> Subterrâneo </a>
      <button onClick={() => { setDark(!dark) }}>
        {setIcon()}</button>
    </nav>
  )
}

export default ElNavBar;

