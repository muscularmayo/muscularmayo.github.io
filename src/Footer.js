import './footer.css';
import GithubIcon from './githubIcon.png'

function Footer() {
  return (
    <div id="footer">
      <a href="https://github.com/muscularmayo">
        <img src={GithubIcon} alt="github" />
      </a>

    </div>
  );
}

export default Footer;
