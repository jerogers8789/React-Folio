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
                    <li>Experienced in product ownership, full-stack web development, project management, business systems development, and managing integrations.</li>
                    <li>Team player with strengths in team leadership and building professional relationships.</li>
                    <li>Excel at planning, organization, time management and decision-making skills.</li>
                </ul>
                <p class="mt-5">
                <a href="Linkedin link">
                    <img src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png" alt="LinkedIn"/></a>
                </p>
               <a href="src/components/Web format Resume'.pdf" class="link">Download Resume</a> 
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