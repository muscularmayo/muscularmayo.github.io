import './home.css';
import Egghead from './egg.svg'

function Home() {
  return (
    <div id="home">
      <div>Chris Risden</div>
      <img src={Egghead} alt='an icon for myself :)'/>
    </div>
  );
}

export default Home;
