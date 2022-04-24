import './project.css';

function Project(props) {
  return (
    <div>
      <a href={props.link}>
        <h4>
          {props.title}
        </h4>
      </a>
      <a href={props.repo}>
        Code Repo
      </a>
      <div>
        {props.info}
      </div>
    </div>
  );
}

export default Project;
