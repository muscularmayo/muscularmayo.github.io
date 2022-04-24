import './project.css';

function Project(props) {
  return (
    <div className="project">
      <a target="_blank" rel="noreferrer" href={props.link}>
        <h4>
          {props.title}
        </h4>
      </a>
      <a target="_blank" rel="noreferrer" href={props.repo}>
        Code Repo
      </a>
      <div>
        {props.info}
      </div>
    </div>
  );
}

export default Project;
