import './projects.css';
import Project from './Project.js'

function Projects(props) {
  const reactProjectList = props.projects.React.map((project,index) => {
    return <Project key={'React'+index} link={project.link} title={project.title} info={project.info} technology='React' repo={project.repo} />
  })
  const jsProjectList = props.projects["Vanilla JS"].map((project, index) => {
    return <Project key={'JS'+index} link={project.link} title={project.title} info={project.info} technology='Vanilla JS' repo={project.repo} />
  })
  const jQueryProjectList = props.projects["jQuery"].map((project, index) => {
    return <Project key={'jQuery'+index} link={project.link} title={project.title} info={project.info} technology='jQuery' repo={project.repo} />
  })
  return (
    <div id="projects">
      <h1>Projects</h1>
      <h2>React</h2>
      {reactProjectList}
      <h2>Vanilla JS</h2>
      {jsProjectList}
      <h2>jQuery</h2>
      {jQueryProjectList}
    </div>
  );
}

export default Projects;
