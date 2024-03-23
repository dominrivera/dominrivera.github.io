// Translations dictionary
const translations = {
    "personal": {
        "en": `
            <img src="fotocv1.jpeg" alt="Your picture" class="card-img">
            <h1 class="card-name">Hi! I am Domingo.</h1>
            <h2 class="card-role">Computing Engineer</h2>
            <p class="card-desc">I'm Domingo, a passionate technologist from Spain, currently living in the city of Geneva, Switzerland. My professional focus is on infrastructure, systems, and DevOps, where I use my expertise to develop efficient and robust solutions. I'm driven by the endless possibilities of technology and its potential to drive meaningful change. Nice to meet you!</p>
            <div class="card-links">
                <a href="domingorb_cv.pdf" data-title="Resume" target="_blank">
                    <i class="fas fa-file-alt link-icon"></i>
                </a>
                <a href="mailto:domingorb@proton.me" data-title="Email">
                    <i class="fas fa-envelope link-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/domingoriverabarros/" data-title="Linkedin" target="_blank">
                    <i class="fab fa-linkedin link-icon"></i>
                </a>
                <a href="https://github.com/dominrivera" data-title="Github" target="_blank">
                    <i class="fab fa-github link-icon"></i>
                </a>
                <!--<a href="https://gitlab.cern.ch/driverab" data-title="Gitlab" target="_blank">
                    <i class="fab fa-gitlab link-icon"></i>
                </a>-->
            </div>
        `,
        "es": `
            <img src="fotocv1.jpeg" alt="Your picture" class="card-img">
            <h1 class="card-name">Hola! Soy Domingo.</h1>
            <h2 class="card-role">Ingeniero Informático</h2>
            <p class="card-desc">Soy Domingo, un español apasionado por la tecnología, actualmente viviendo en la ciudad de Ginebra, Suiza. Mi enfoque profesional está en la infraestructura, los sistemas y DevOps, donde utilizo mi experiencia para desarrollar soluciones eficientes y robustas. Me motiva las infinitas posibilidades de la tecnología y su potencial para impulsar cambios significativos. ¡Encantado de conocerte!</p>
            <div class="card-links">
                <a href="domingorb_cv.pdf" data-title="CV" target="_blank">
                    <i class="fas fa-file-alt link-icon"></i>
                </a>
                <a href="mailto:domingorb@proton.me" data-title="Email">
                    <i class="fas fa-envelope link-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/domingoriverabarros/" data-title="Linkedin" target="_blank">
                    <i class="fab fa-linkedin link-icon"></i>
                </a>
                <a href="https://github.com/dominrivera" data-title="Github" target="_blank">
                    <i class="fab fa-github link-icon"></i>
                </a>
                <!--<a href="https://gitlab.cern.ch/driverab" data-title="Gitlab" target="_blank">
                    <i class="fab fa-gitlab link-icon"></i>
                </a>-->
            </div>
        `,
        "fr": `
            <img src="fotocv1.jpeg" alt="Your picture" class="card-img">
            <h1 class="card-name">Bonjour! Je suis Domingo.</h1>
            <h2 class="card-role">Ingénieur Informatique</h2>
            <p class="card-desc">Je suis Domingo, un technologue passionné d'Espagne, vivant actuellement à Genève, en Suisse. Mon objectif professionnel est de travailler sur l'infrastructure, les systèmes et DevOps, où j'utilise mon expertise pour développer des solutions efficaces et robustes. Je suis motivé par les possibilités sans fin de la technologie et son potentiel pour impulser un changement significatif. Ravi de vous rencontrer!</p>
            <div class="card-links">
                <a href="domingorb_cv.pdf" data-title="CV" target="_blank">
                    <i class="fas fa-file-alt link-icon"></i>
                </a>
                <a href="mailto:domingorb@proton.me" data-title="Email">
                    <i class="fas fa-envelope link-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/domingoriverabarros/" data-title="Linkedin" target="_blank">
                    <i class="fab fa-linkedin link-icon"></i>
                </a>
                <a href="https://github.com/dominrivera" data-title="Github" target="_blank">
                    <i class="fab fa-github link-icon"></i>
                </a>
                <!--<a href="https://gitlab.cern.ch/driverab" data-title="Gitlab" target="_blank">
                    <i class="fab fa-gitlab link-icon"></i>
                </a>-->
            </div>
        `,
    },
    "experience": {
        "en": `
            <h2 class="section-title">Experience</h2>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Cloud Infrastructure Engineer</h3>
                    <h4>CERN - Cloud Infrastructure team, Switzerland - September 2021 to September 2023</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <p><strong>Tech Stack:</strong> OpenStack, Linux, Python, Bash, Puppet, MySQL, InfluxDB, Prometheus, Grafana, Rundeck, CI/CD</p>
                    <li>Played a key role in configuring, managing, and continuously improving CERN's Cloud Service infrastructure (OpenStack).</li>
                    <li>Responsible for monitoring the Cloud Service, ensuring high availability and performance through proactive monitoring.</li>
                    <li>Developed and maintained automation tools for the Cloud Service, streamlining operations and improving efficiency.</li>
                    <li>Managed and maintained the CERN OpenStack web application, ensuring its availability and performance for thousands of users.</li>
                    <li>Member of the Cloud Service support team in charge of addressing user incidents and requests, providing solutions and support for a large-scale infrastructure that serves thousands of users. This infrastructure includes nearly 10,000 physical servers, 13,000 virtual machines, and almost half a million cores.</li>
                </ul>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>DevOps Engineer/Infrastructure Engineer</h3>
                    <h4>CERN - Infrastructure and Automation team (Databases Group), Switzerland - July 2018 to July 2021</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <p><strong>Tech Stack:</strong> Linux, Python, Puppet, Ansible, Nomad, Docker, Kubernetes, CI/CD, InfluxDB, Telegraf, Grafana, Filebeat, Logstash</p>
                    <li>Designed, built, and conﬁgured a containerized infrastructure utilizing Hashicorp Nomad.</li>
                    <li>Migrated several systems to Nomad and Kubernetes.</li>
                    <li>Led the migration of hardware and application monitoring and alarming sensors to Collectd.</li>
                    <li>Continuously improved the group's configuration elements using Puppet.</li>
                    <li>Member of the support team in charge of the physical and virtual platform of the group.</li>
                </ul>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Web Developer - Internship</h3>
                    <h4>Conexiona Telecom, Spain - February 2018 to May 2018</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <li>Developed the notifications system for the web application managing the company's financial records.</li>
                </ul>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>System Administrator - Internship</h3>
                    <h4>University of Vigo, Spain - November 2017 to March 2018</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <li>Provided support in managing the computing infrastructure of approximately 500 computers and peripherals.</li>
                    <li>Covered hardware and software management, maintenance and troubleshooting.</li>
                </ul>
            </div>
        `,
        "es": `
            <h2 class="section-title">Experiencia</h2>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Ingeniero de Infraestructura en la Nube</h3>
                    <h4>CERN - Equipo de Infraestructura en la Nube, Suiza - Septiembre 2021 hasta Septiembre 2023</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <p><strong>Tecnologías usadas:</strong> OpenStack, Linux, Python, Bash, Puppet, MySQL, InfluxDB, Prometheus, Grafana, Rundeck, CI/CD</p>
                    <li>Jugó un papel clave en la configuración, gestión y mejora continua de la infraestructura del Servicio en la Nube de CERN (OpenStack).</li>
                    <li>Responsable de monitorear el Servicio en la Nube, asegurando alta disponibilidad y rendimiento a través del monitoreo proactivo.</li>
                    <li>Desarrolló y mantuvo herramientas de automatización para el Servicio en la Nube, agilizando operaciones y mejorando la eficiencia.</li>
                    <li>Gestionó y mantuvo la aplicación web OpenStack de CERN, asegurando su disponibilidad y rendimiento para miles de usuarios.</li>
                    <li>Miembro del equipo de soporte del Servicio en la Nube encargado de atender incidentes y solicitudes de los usuarios, proporcionando soluciones y soporte para una infraestructura a gran escala que sirve a miles de usuarios. Esta infraestructura incluye casi 10,000 servidores físicos, 13,000 máquinas virtuales y casi medio millón de núcleos.</li>
                </ul>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Ingeniero DevOps/Ingeniero de Infraestructura</h3>
                    <h4>CERN - Equipo de Infraestructura y Automatización (Grupo de Bases de Datos), Suiza - Julio 2018 hasta Julio 2021</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <p><strong>Tecnologías usadas:</strong> Linux, Python, Puppet, Ansible, Nomad, Docker, Kubernetes, CI/CD, InfluxDB, Telegraf, Grafana, Filebeat, Logstash</p>
                    <li>Diseñé, construí y configuré una infraestructura contenerizada utilizando Hashicorp Nomad.</li>
                    <li>Trabajé en la migración de varios sistemas a Nomad y Kubernetes.
                    <li>Lideré la migración de sensores de monitoreo y alerta de hardware y aplicaciones a Collectd.</li>
                    <li>Mejoré continuamente los elementos de configuración del grupo utilizando Puppet.</li>
                    <li>Miembro del equipo de soporte a cargo de la plataforma física y virtual del grupo.</li>
                </ul>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Desarrollador Web - Prácticas</h3>
                    <h4>Conexiona Telecom, España - Febrero 2018 a Mayo 2018</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <li>Desarrollé el sistema de notificaciones para la aplicación web que gestiona los registros financieros de la empresa.</li>
                </ul>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Administrador de Sistemas - Prácticas</h3>
                    <h4>Universidad de Vigo, España - Noviembre 2017 a Marzo 2018</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <li>Proporcioné soporte en la gestión de la infraestructura informática de aproximadamente 500 ordenadores y periféricos.</li>
                    <li>Cubrí la gestión, mantenimiento y resolución de problemas de hardware y software.</li>
                </ul>
            </div>
        `,
        "fr": `
            <h2 class="section-title">Expérience</h2>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Ingénieur Infrastructure Cloud</h3>
                    <h4>CERN - Équipe Infrastructure Cloud, Suisse - Septembre 2021 à Septembre 2023</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <p><strong>Technologies utilisées :</strong> OpenStack, Linux, Python, Bash, Puppet, MySQL, InfluxDB, Prometheus, Grafana, Rundeck, CI/CD</p>
                    <li>A joué un rôle clé dans la configuration, la gestion et l'amélioration continue de l'infrastructure du Service Cloud du CERN (OpenStack).</li>
                    <li>Responsable de la surveillance du Service Cloud, assurant une haute disponibilité et des performances grâce à une surveillance proactive.</li>
                    <li>Développé et maintenu des outils d'automatisation pour le Service Cloud, rationalisant les opérations et améliorant l'efficacité.</li>
                    <li>Géré et maintenu l'application web OpenStack du CERN, assurant sa disponibilité et ses performances pour des milliers d'utilisateurs.</li>
                    <li>Membre de l'équipe de support du Service Cloud chargée de répondre aux incidents et demandes des utilisateurs, fournissant des solutions et du support pour une infrastructure à grande échelle qui sert des milliers d'utilisateurs. Cette infrastructure comprend près de 10 000 serveurs physiques, 13 000 machines virtuelles et près d'un demi-million de cœurs.</li>
                </ul>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Ingénieur DevOps/Ingénieur Infrastructure</h3>
                    <h4>CERN - Équipe Infrastructure et Automatisation (Groupe de Bases de Données), Suisse - Juillet 2018 à Juillet 2021</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <p><strong>Technologies utilisées :</strong> Linux, Python, Puppet, Ansible, Nomad, Docker, Kubernetes, CI/CD, InfluxDB, Telegraf, Grafana, Filebeat, Logstash</p>
                    <li>Conçu, construit et configuré une infrastructure conteneurisée en utilisant Hashicorp Nomad.</li>
                    <li>A effectué la migration de plusieurs systèmes vers Nomad et Kubernetes.</li>
                    <li>A dirigé la migration des capteurs de surveillance et d'alerte matériel et application vers Collectd.</li>
                    <li>A amélioré continuellement les éléments de configuration du groupe en utilisant Puppet.</li>
                    <li>Membre de l'équipe de support en charge de la plateforme physique et virtuelle du groupe.</li>
                </ul>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Développeur Web - Stage</h3>
                    <h4>Conexiona Telecom, Espagne - Février 2018 à Mai 2018</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <li>A développé le système de notifications pour l'application web qui gère les registres financiers de l'entreprise.</li>
                </ul>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Administrateur Systèmes - Stage</h3>
                    <h4>Université de Vigo, Espagne - Novembre 2017 à Mars 2018</h4>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <li>A apporté son soutien dans la gestion de l'infrastructure informatique d'environ 500 ordinateurs et périphériques.</li>
                    <li>A couvert la gestion, la maintenance et le dépannage du matériel et des logiciels.</li>
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
                    <li>AWS</li>
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
                    <li>AWS</li>
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
                    <li>AWS</li>
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
            
            <h2 class="section-title">Certifications</h2>
            <div class="cert-entry">
                <div class="cert-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>CKA: Certified Kubernetes Administrator</h3>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <img src="CKA.jpg" width="450" height="300">
                </ul>
            </div>
            <div class="cert-entry">
                <div class="cert-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Kubernetes Fundamentals (LFS258)</h3>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <img src="LFS258.jpg" width="450" height="300">
                </ul>
            </div>
            <div class="cert-entry">
                <div class="cert-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>HashiCorp Certified: Vault Associate (002)</h3>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <img src="vault_associate.jpg" width="450" height="300">
                </ul>
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

            <h2 class="section-title">Certificaciones</h2>
            <div class="cert-entry">
                <div class="cert-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>CKA: Certified Kubernetes Administrator</h3>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <img src="CKA.jpg" width="450" height="300">
                </ul>
            </div>
            <div class="cert-entry">
                <div class="cert-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Kubernetes Fundamentals (LFS258)</h3>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <img src="LFS258.jpg" width="450" height="300">
                </ul>
            </div>
            <div class="cert-entry">
                <div class="cert-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>HashiCorp Certified: Vault Associate (002)</h3>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <img src="vault_associate.jpg" width="450" height="300">
                </ul>
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

            <h2 class="section-title">Certifications</h2>
            <div class="cert-entry">
                <div class="cert-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>CKA: Certified Kubernetes Administrator</h3>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <img src="CKA.jpg" width="450" height="300">
                </ul>
            </div>
            <div class="cert-entry">
                <div class="cert-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>Kubernetes Fundamentals (LFS258)</h3>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <img src="LFS258.jpg" width="450" height="300">
                </ul>
            </div>
            <div class="cert-entry">
                <div class="cert-title" onclick="toggleVisibility(this.nextElementSibling)">
                    <h3>HashiCorp Certified: Vault Associate (002)</h3>
                </div>
                <ul class="achievements-list" style="display: none;">
                    <img src="vault_associate.jpg" width="450" height="300">
                </ul>
            </div>
        `,
    }
    // Add other sections here...
};

let currentLanguage = 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    document.querySelector('#card-content').innerHTML = translations[currentContent][currentLanguage];
    let flagElements = document.querySelectorAll('.lang-flag');
    flagElements.forEach(element => {
        if (element.alt.substring(0, 2).toLowerCase() === currentLanguage) {
            element.style.opacity = '1';  // Highlight the selected language
        } else {
            element.style.opacity = '0.5';  // Dim the other languages
        }
    });
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

document.addEventListener('DOMContentLoaded', (event) => {
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var body = document.body;

    if(hour >= 8 && hour < 22){ // Change background color according to the hour
        // Day time
        body.style.backgroundColor = '#65a6c0';
    } else {
        // Night time
        body.style.backgroundColor = '#28505f';
    }
});
