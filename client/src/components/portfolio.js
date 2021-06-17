import React from 'react'; 
import Projects from './project'
import portfolio from '../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}
function Portfolio () {  
    return (
        <section>
          <div className="project">
            <h2 className="title">Development</h2>
            <hr></hr>
          </div>
          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <Projects key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;