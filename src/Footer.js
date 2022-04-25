import './footer.css';
import GithubIcon from './githubIcon.png'

function Footer() {
  return (
    <div id="footer">
      <a target="_blank" rel="noreferrer" href="https://github.com/muscularmayo">
        <img src={GithubIcon} alt="github" />
      </a>
    </div>
  );
}

export default Footer;
