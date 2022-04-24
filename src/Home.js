import './home.css';
import Egghead from './egg.svg'

function Home() {
  return (
    <div id="home">
      <h1>Chris Risden</h1>
      <img src={Egghead} alt='an icon for myself :)'/>
    </div>
  );
}

export default Home;
