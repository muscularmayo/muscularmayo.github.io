import './header.css';

function Header() {
  return (
    <div id="header">
      <ul className="nav">
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
