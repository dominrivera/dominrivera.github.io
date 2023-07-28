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
            <h2 class="card-role">Ingeniero Informático</h2>
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
        "fr": `
            <img src="fotocv1.jpeg" alt="Your picture" class="card-img">
            <h1 class="card-name">Bonjour! Je suis Domingo.</h1>
            <h2 class="card-role">Ingénieur Informatique</h2>
            <p class="card-desc">Je suis Domingo, un technologue passionné d'Espagne, vivant actuellement à Genève, en Suisse. Mon objectif professionnel est de travailler sur l'infrastructure, les systèmes et DevOps, où j'utilise mon expertise pour développer des solutions efficaces et robustes. Je suis motivé par les possibilités sans fin de la technologie et son potentiel pour impulser un changement significatif. Ravi de vous rencontrer!</p>
            <div class="card-links">
                <a href="domingorb_cv.pdf" title="CV" target="_blank">
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
            <h2 class="section-title">Experience</h2>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Senior DevOps Engineer</h3>
                    <h4>XYZ Company, Geneva - Jan 2021 to Present</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <li>Led a team to implement CI/CD pipelines, reducing deployment times by 30%.</li>
                    <li>Implemented automated testing strategies, improving software reliability by 25%.</li>
                    <li>Reduced cloud infrastructure costs by 20% through efficient resource utilization.</li>
                </ul>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Systems Administrator</h3>
                    <h4>ABC Corporation, Geneva - Jan 2019 to Dec 2020</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <li>Managed and maintained a large-scale Linux server environment, ensuring 99.99% uptime.</li>
                    <li>Implemented a system monitoring solution which reduced system downtime by 15%.</li>
                    <li>Automated routine tasks using shell scripting, saving approximately 10 hours of manual work per week.</li>
                </ul>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Systems Administrator</h3>
                    <h4>ABC Corporation, Geneva - Jan 2019 to Dec 2020</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <li>Managed and maintained a large-scale Linux server environment, ensuring 99.99% uptime.</li>
                    <li>Implemented a system monitoring solution which reduced system downtime by 15%.</li>
                    <li>Automated routine tasks using shell scripting, saving approximately 10 hours of manual work per week.</li>
                </ul>
            </div>
        `,
        "es": `
            <h2 class="section-title">Experiencia</h2>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Ingeniero DevOps Senior</h3>
                    <h4>XYZ Company, Ginebra - Ene 2021 hasta la fecha</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <li>Lideró un equipo para implementar pipelines de CI/CD, reduciendo los tiempos de implementación en un 30%.</li>
                    <li>Implementó estrategias de testing automatizadas, mejorando la fiabilidad del software en un 25%.</li>
                    <li>Redujo los costos de infraestructura en la nube en un 20% a través de una utilización eficiente de los recursos.</li>
                </ul>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Administrador de Sistemas</h3>
                    <h4>ABC Corporation, Ginebra - Ene 2019 a Dic 2020</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <li>Administró y mantuvo un entorno de servidores Linux a gran escala, asegurando un tiempo de actividad del 99.99%.</li>
                    <li>Implementó una solución de monitorización de sistemas que redujo el tiempo de inactividad del sistema en un 15%.</li>
                    <li>Automatizó tareas rutinarias usando scripts de shell, ahorrando aproximadamente 10 horas de trabajo manual por semana.</li>
                </ul>
            </div>
        `,
        "fr": `
            <h2 class="section-title">Expérience</h2>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Ingénieur DevOps Senior</h3>
                    <h4>XYZ Company, Genève - Jan 2021 à aujourd'hui</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <li>A dirigé une équipe pour mettre en œuvre des pipelines CI/CD, réduisant les temps de déploiement de 30%.</li>
                    <li>A mis en place des stratégies de test automatisées, améliorant la fiabilité du logiciel de 25%.</li>
                    <li>A réduit les coûts d'infrastructure cloud de 20% grâce à une utilisation efficace des ressources.</li>
                </ul>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Administrateur Systèmes</h3>
                    <h4>ABC Corporation, Genève - Jan 2019 à Déc 2020</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <li>A géré et maintenu un environnement de serveurs Linux à grande échelle, garantissant une disponibilité de 99,99%.</li>
                    <li>A mis en place une solution de surveillance des systèmes qui a réduit le temps d'arrêt du système de 15%.</li>
                    <li>A automatisé des tâches routinières à l'aide de scripts shell, économisant environ 10 heures de travail manuel par semaine.</li>
                </ul>
            </div>
        `,
    },
    "technologies": {
        "en": `
            <h2 class="section-title">Technologies</h2>
            <div id="tech-content">
                <ul class="tech-list">
                    <li>OpenStack</li>
                    <li>Python</li>
                    <li>Bash</li>
                    <li>Puppet</li>
                    <li>Rundeck</li>
                    <li>InfluxDB</li>
                    <li>Grafana</li>
                    <li>Filebeat</li>
                    <li>Logstash</li>
                    <li>Nomad</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>Ansible</li>
                    <li>Prometheus</li>
                    <li>Git</li>
                    <li>GitLab</li>
                    <li>Github</li>
                    <li>CI/CD</li>
                    <li>Linux</li>
                    <li>Jira</li>
                </ul>
            </div>
        `,
        "es": `
            <h2 class="section-title">Tecnologias</h2>
            <div id="tech-content">
                <ul class="tech-list">
                    <li>OpenStack</li>
                    <li>Python</li>
                    <li>Bash</li>
                    <li>Puppet</li>
                    <li>Rundeck</li>
                    <li>InfluxDB</li>
                    <li>Grafana</li>
                    <li>Filebeat</li>
                    <li>Logstash</li>
                    <li>Nomad</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>Ansible</li>
                    <li>Prometheus</li>
                    <li>Git</li>
                    <li>GitLab</li>
                    <li>Github</li>
                    <li>CI/CD</li>
                    <li>Linux</li>
                    <li>Jira</li>
                </ul>
            </div>
        `,
        "fr": `
            <h2 class="section-title">Technologies</h2>
            <div id="tech-content">
                <ul class="tech-list">
                    <li>OpenStack</li>
                    <li>Python</li>
                    <li>Bash</li>
                    <li>Puppet</li>
                    <li>Rundeck</li>
                    <li>InfluxDB</li>
                    <li>Grafana</li>
                    <li>Filebeat</li>
                    <li>Logstash</li>
                    <li>Nomad</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>Ansible</li>
                    <li>Prometheus</li>
                    <li>Git</li>
                    <li>GitLab</li>
                    <li>Github</li>
                    <li>CI/CD</li>
                    <li>Linux</li>
                    <li>Jira</li>
                </ul>
            </div>
        `,
    },
    "education": {
        "en": `
            <h2 class="section-title">Education</h2>
            <div id="education" class="content-section">
                <div class="education-entry">
                    <h3>B.S. in Computer Engineering</h3>
                    <h4>University of Vigo, Spain - 2020</h4>
                    <p class="thesis">Bachelor's thesis: <a href="https://github.com/dominrivera/ESEIMS" target="_blank">ESEI Monitoring System</a></p>
                </div>
            
                <div class="education-entry">
                    <h3>Erasmus Programme, Computer Engineering</h3>
                    <h4>Bialystok University of Technology, Poland - 2016</h4>
                </div>
            </div>
        `,
        "es": `
            <h2 class="section-title">Educación</h2>
            <div id="education" class="content-section">
                <div class="education-entry">
                    <h3>Grado en Ingeniería Informática</h3>
                    <h4>Universidad de Vigo, España - 2020</h4>
                    <p class="thesis">Trabajo de fin de grado: <a href="https://github.com/dominrivera/ESEIMS" target="_blank">Sistema de Monitorización de la ESEI</a></p>
                </div>
            
                <div class="education-entry">
                    <h3>Programa Erasmus, Ingeniería Informática</h3>
                    <h4>Bialystok University of Technology, Polonia - 2016</h4>
                </div>
            </div>
        `,
        "fr": `
            <h2 class="section-title">Éducation</h2>
            <div id="education" class="content-section">
                <div class="education-entry">
                    <h3>Licence en Ingénierie Informatique</h3>
                    <h4>Université de Vigo, Espagne - 2020</h4>
                    <p class="thesis">Thèse de licence : <a href="https://github.com/dominrivera/ESEIMS" target="_blank">Système de Surveillance ESEI</a></p>
                </div>
            
                <div class="education-entry">
                    <h3>Programme Erasmus, Ingénierie Informatique</h3>
                    <h4>Université de Technologie de Bialystok, Pologne - 2016</h4>
                </div>
            </div>
        `,
    }
    // Add other sections here...
};

let currentLanguage = 'en';
const flagImages = {
    'en': 'en.png',
    'es': 'es.png',
    'fr': 'fr.png'
}

function toggleLanguage() {
    currentLanguage = (currentLanguage === 'en') ? 'es' : ((currentLanguage === 'es') ? 'fr' : 'en');
    document.querySelector('#card-content').innerHTML = translations[currentContent][currentLanguage];
    document.querySelector('#lang-flag').src = flagImages[currentLanguage === 'en' ? 'es' : currentLanguage === 'es' ? 'fr' : 'en'];
}

// Initially
let currentContent = 'personal';
document.querySelector('#card-content').innerHTML = translations[currentContent][currentLanguage];

// Other functions...

function changeContent(contentType) {
    currentContent = contentType;
    document.querySelector('#card-content').innerHTML = translations[currentContent][currentLanguage];
}

function toggleVisibility(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
