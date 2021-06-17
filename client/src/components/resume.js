import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h2 className="resume">Resume</h2>
        <hr></hr>                  
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
                <h2>Jeremiah Rogers</h2>
            <ul>
                    <li>Core competencies in web technology product ownership, full-stack web development, project management, business systems development, and managing integrations.</li>
                    <li>Self-driven team player with strengths in team leadership and developing interpersonal relationships.</li>
                    <li>Possess excellent planning, organization, time management and decision-making skills.</li>
                </ul>
                <p class="mt-5">
                <a href="Linkedin link">
                    <img src="linkedin img" alt="LinkedIn"/></a>
                </p>
               <a href="" class="link">Download Resume</a> 
            </div>
        </div>
        <div class="justify-content-center mt-5">
            <div>
                <h2>Proficiencies</h2>
                <p>HTML, CSS, Bootstrap, HandleBars, JavaScript, jQuery, React.js, IndexedDB</p>
                <p>Node.js, Express.js, SQL, Sequelize, MongoDB, APIs, Templating</p>
            </div>
        </div>
</section>
);
}

export default Resume;