// Translations dictionary
const translations = {
    "personal": {
        "en": `
            <img src="fotocv1.jpeg" alt="Your picture" class="card-img">
            <h1 class="card-name">Hi! I am Domingo.</h1>
            <h2 class="card-role">Computing Engineer</h2>
            <p class="card-desc">I'm Domingo, a passionate technologist from Spain, currently living in the city of Geneva, Switzerland. My professional focus is on infrastructure, systems, and DevOps, where I use my expertise to develop efficient and robust solutions. I'm driven by the endless possibilities of technology and its potential to drive meaningful change. Nice to meet you!</p>
            <div class="card-links">
                <a href="domingorb_cv.pdf" title="Resume" target="_blank">
                    <i class="fas fa-file-alt link-icon"></i>
                </a>
                <a href="mailto:domingorb@proton.me" title="Email">
                    <i class="fas fa-envelope link-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/domingoriverabarros/" title="Linkedin" target="_blank">
                    <i class="fab fa-linkedin link-icon"></i>
                </a>
                <a href="https://github.com/dominrivera" title="Github" target="_blank">
                    <i class="fab fa-github link-icon"></i>
                </a>
                <a href="https://gitlab.cern.ch/driverab" title="Gitlab" target="_blank">
                    <i class="fab fa-gitlab link-icon"></i>
                </a>
            </div>
        `,
        "es": `
            <img src="fotocv1.jpeg" alt="Your picture" class="card-img">
            <h1 class="card-name">Hola! Soy Domingo.</h1>
            <h2 class="card-role">Ingeniero Informatico</h2>
            <p class="card-desc">Soy Domingo, un español apasionado por la tecnología, actualmente viviendo en la ciudad de Ginebra, Suiza. Mi enfoque profesional está en la infraestructura, los sistemas y DevOps, donde utilizo mi experiencia para desarrollar soluciones eficientes y robustas. Me motiva las infinitas posibilidades de la tecnología y su potencial para impulsar cambios significativos. ¡Encantado de conocerte!</p>
            <div class="card-links">
                <a href="domingorb_cv.pdf" title="Curriculum" target="_blank">
                    <i class="fas fa-file-alt link-icon"></i>
                </a>
                <a href="mailto:domingorb@proton.me" title="Email">
                    <i class="fas fa-envelope link-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/domingoriverabarros/" title="Linkedin" target="_blank">
                    <i class="fab fa-linkedin link-icon"></i>
                </a>
                <a href="https://github.com/dominrivera" title="Github" target="_blank">
                    <i class="fab fa-github link-icon"></i>
                </a>
                <a href="https://gitlab.cern.ch/driverab" title="Gitlab" target="_blank">
                    <i class="fab fa-gitlab link-icon"></i>
                </a>
            </div>
        `,
    },
    "experience": {
        "en": `
            <h2>Experience</h2>
            <div class="experience-entry">
                <h3>Senior DevOps Engineer</h3>
                <h4>XYZ Company, Geneva - Jan 2021 to Present</h4>
                <ul class="achievements-list">
                    <li>Led a team to implement CI/CD pipelines, reducing deployment times by 30%.</li>
                    <li>Implemented automated testing strategies, improving software reliability by 25%.</li>
                    <li>Reduced cloud infrastructure costs by 20% through efficient resource utilization.</li>
                </ul>
            </div>
        
            <div class="experience-entry">
                <h3>Systems Administrator</h3>
                <h4>ABC Corporation, Geneva - Jan 2019 to Dec 2020</h4>
                <ul class="achievements-list">
                    <li>Managed and maintained a large-scale Linux server environment, ensuring 99.99% uptime.</li>
                    <li>Implemented a system monitoring solution which reduced system downtime by 15%.</li>
                    <li>Automated routine tasks using shell scripting, saving approximately 10 hours of manual work per week.</li>
                </ul>
            </div>
        
            <div class="experience-entry">
                <h3>Junior DevOps Engineer</h3>
                <h4>DEF Software, Madrid - Jan 2017 to Dec 2018</h4>
                <ul class="achievements-list">
                    <li>Assisted in the deployment of applications in AWS environment.</li>
                    <li>Developed scripts for build, deployment, maintenance, and related tasks.</li>
                    <li>Helped in implementing DevOps principles and practices, reducing deployment failures by 20%.</li>
                </ul>
            </div>
        `,
        "es": `
            <h2>Experiencia</h2>
            <p class="card-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        `,
    },
    "technologies": {
        "en": `
            <h2>Technologies</h2>
            <div id="tech-content">
                <ul class="tech-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Angular</li>
                    <li>Ruby</li>
                    <li>Swift</li>
                    <li>C#</li>
                    <li>PHP</li>
                    <li>SQL</li>
                </ul>
            </div> 
        `,
        "es": `
            <h2>Tecnologias</h2>
            <div id="tech-content">
                <ul class="tech-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Angular</li>
                    <li>Ruby</li>
                    <li>Swift</li>
                    <li>C#</li>
                    <li>PHP</li>
                    <li>SQL</li>
                </ul>
            </div> 
        `,
    },
    "education": {
        "en": `
            <h2>Education</h2>
            <p>Coming soon...</p>
        `,
        "es": `
            <h2>Educacion</h2>
            <p>Pronto disponible...</p>
        `
    }
    // Add other sections here...
};

// Current language
let currentLanguage = "en";
let currentSection = 'personal';

function changeContent(section) {
    currentSection = section;
    var cardContent = document.getElementById('card-content');
    cardContent.innerHTML = translations[section][currentLanguage] || "Section not found";
}

function toggleLanguage() {
    const flag = document.getElementById('flag');

    if (currentLanguage === 'en') {
        currentLanguage = 'es';
        flag.src = 'uk.png';
        flag.alt = 'UK Flag';
    } else {
        currentLanguage = 'en';
        flag.src = 'es.png';
        flag.alt = 'ES Flag';
    }

    changeContent(currentSection); // Refresh the content according to the new language
}


window.onload = function() {
    changeContent('personal'); // Load the "personal" section by default
};

