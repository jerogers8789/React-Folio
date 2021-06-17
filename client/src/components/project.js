import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="project-title" id="card-title">{props.name}</p>
              <p id="proj-icons-container">
              <a href={props.github}><img src="Project link" alt="GitHub Repo" id="project-icon"/></a> 
              <a href={props.deploy}><img src="deployed link" alt="Live Application" id="project-icon"/></a> 
             </p>
              <p id="topics">
                    ({props.topics})
                </p>
        </div>
      </div>
    );
}
  
  export default Projects;