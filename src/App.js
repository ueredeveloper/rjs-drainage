import './App.css';
import { useState } from 'react';

function App() {

  const [dark, setDark] = useState(false);

  console.log(dark);

  return (
    <div className={`${dark ? "dark" : "light"}`}>
      <div> tailwind working</div>
      <div> dark mode working </div>
      <button style={{ backgroundColor: 'gray' }} onClick={() => { setDark(!dark) }}>{dark === true ? "Light" : "Dark"}</button>
    </div>
  );
}

export default App;
