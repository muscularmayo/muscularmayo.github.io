import './about.css';

function About() {
  return (
    <div id="about">
      <h1>About</h1>
      <div className="project">
        I am Chris Risden, an aspiring Front End Software Engineer in Los Angeles, CA.
        <br/>
        <br/>
        I come to coding through an unorthodox path in the entertainment industry, but, for me, it was love at first debug. This strange
         journey through a high-powered environment lends me certain soft skills:
        <br/>
        <br/>
        I am a motivated self-starter who is receptive to criticism, constantly learning, proactive and cool under constant pressure and deadlines.
        <br/>
        <br/>
        I have both excellent written and verbal communication skills and a keen eye for detail.
        <br/>
        <br/>
        Most importantly, I love coding, the journey of both and creating and debugging, the satisfaction and the constant quest to learn.
      </div>
      <div className="technology">
        Javascript | HTML5 | CSS3 | Bash | Git
      </div>
      <div className="technology">
        React | Redux | Node | Jquery
      </div>
      <div className="technology">
        Styled Components
      </div>
      <div className="technology">
        Jest | Mocha | Chai
      </div>
      <div className="technology">
        MySQL | PostgreSQL | MongoDB
      </div>
    </div>
  );
}

export default About;
