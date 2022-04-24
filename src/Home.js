import { useState } from 'react';
import './home.css';
import Egghead from './egg.svg'
import EggheadHover from './iconHover.png'

function Home() {
  const [ image, setImage ] = useState(Egghead)
  return (
    <div id="home">
      <h1>Chris Risden</h1>
        <img src={image}
        alt='an icon for myself :)'
        onMouseEnter={ () => {
          setImage(EggheadHover)}}
        onMouseOut={ () => {
          setImage(Egghead)
        }}
        />
    </div>
  );
}

export default Home;
