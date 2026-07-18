// Translations dictionary
const translations = {
    "personal": {
        "en": `
            <img src="fotocv1.jpeg" alt="Profile picture" class="card-img">
            <h1 class="card-name">Hi! I am Domingo.</h1>
            <h2 class="card-role">DevOps / Site Reliability Engineer</h2>
            <p class="card-desc">I'm Domingo, a DevOps / SRE from Spain with 7+ years of experience, currently living in Geneva, Switzerland. I specialize in cloud-native infrastructure, Kubernetes, and building scalable DevOps solutions for enterprise clients. I'm driven by the endless possibilities of technology and its potential to drive meaningful change. Nice to meet you!</p>
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
            </div>
        `,
        "es": `
            <img src="fotocv1.jpeg" alt="Foto de perfil" class="card-img">
            <h1 class="card-name">Hola! Soy Domingo.</h1>
            <h2 class="card-role">DevOps / Site Reliability Engineer</h2>
            <p class="card-desc">Soy Domingo, un ingeniero DevOps / SRE español con más de 7 años de experiencia, actualmente viviendo en Ginebra, Suiza. Me especializo en infraestructura cloud-native, Kubernetes y en construir soluciones DevOps escalables para clientes empresariales. Me motiva las infinitas posibilidades de la tecnología y su potencial para impulsar cambios significativos. ¡Encantado de conocerte!</p>
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
            </div>
        `,
        "fr": `
            <img src="fotocv1.jpeg" alt="Photo de profil" class="card-img">
            <h1 class="card-name">Bonjour! Je suis Domingo.</h1>
            <h2 class="card-role">Ingénieur DevOps / Site Reliability</h2>
            <p class="card-desc">Je suis Domingo, ingénieur DevOps / SRE espagnol avec plus de 7 ans d'expérience, vivant actuellement à Genève, en Suisse. Je me spécialise dans l'infrastructure cloud-native, Kubernetes et la création de solutions DevOps évolutives pour des clients entreprises. Je suis motivé par les possibilités infinies de la technologie. Ravi de vous rencontrer!</p>
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
            </div>
        `,
    },
    "experience": {
        "en": `
            <h2 class="section-title">Experience</h2>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>System Engineer <span class="exp-company">@ Adfinis AG</span></h3><h4><i class="fas fa-calendar-alt"></i> Jan 2024 – Present &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> Switzerland</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <p class="tech-stack-label"><strong>Tech Stack:</strong> Kubernetes, OpenShift, AWS, Azure, GCP, Terraform, Ansible, GitLab CI, ArgoCD, HashiCorp Vault, OpenBao, Python, Bash, Linux</p>
                    <ul class="achievements-list">
                        <li>Deliver cloud-native infrastructure and DevOps solutions for enterprise clients.</li>
                        <li>Architect and operate Kubernetes and OpenShift platforms across multi-cloud environments (AWS, Azure, GCP).</li>
                        <li>Design and implement enterprise GitLab platforms and CI/CD architectures integrated with GitOps workflows (ArgoCD) and Vault.</li>
                        <li>Lead upgrades of 30+ production systems (Kubernetes, OpenShift, GitLab, Vault), including cluster upgrades, platform components and security patching.</li>
                        <li>Automate infrastructure provisioning and configuration using Terraform and Ansible to standardize and scale customer environments.</li>
                        <li>Troubleshoot distributed systems, support incident resolution, and improve platform reliability and operational performance.</li>
                    </ul>
                </div>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>Cloud Infrastructure Engineer <span class="exp-company">@ CERN</span></h3><h4><i class="fas fa-calendar-alt"></i> Sept 2021 – Sept 2023 &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> Switzerland</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <p class="tech-stack-label"><strong>Tech Stack:</strong> OpenStack, Linux, Python, Bash, Puppet, MySQL, InfluxDB, Prometheus, Grafana, Rundeck, CI/CD</p>
                    <ul class="achievements-list">
                        <li>Played a key role in configuring, managing, and continuously improving CERN's Cloud Service infrastructure (OpenStack).</li>
                        <li>Carried out service upgrades which implied the migration of thousands of VMs.</li>
                        <li>Developed automation tools to streamline operations and increase efficiency.</li>
                        <li>Responsible for monitoring the Cloud Service, ensuring high availability and performance through proactive monitoring.</li>
                        <li>Managed and maintained the CERN OpenStack web application, ensuring its availability and performance for thousands of users.</li>
                        <li>Provided support and incident resolution as part of the Cloud Service Support team, managing a large-scale infrastructure with 10,000 physical servers, 13,000 VMs, and 500,000+ cores.</li>
                    </ul>
                </div>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>DevOps / Infrastructure Engineer <span class="exp-company">@ CERN</span></h3><h4><i class="fas fa-calendar-alt"></i> July 2018 – July 2021 &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> Switzerland</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <p class="tech-stack-label"><strong>Tech Stack:</strong> Linux, Python, Puppet, Ansible, Nomad, Docker, Kubernetes, CI/CD, InfluxDB, Telegraf, Grafana, Filebeat, Logstash</p>
                    <ul class="achievements-list">
                        <li>Designed and implemented a containerized infrastructure using HashiCorp Nomad, leading the migration of multiple systems to Nomad and Kubernetes.</li>
                        <li>Led the migration of monitoring and alerting systems to a new solution.</li>
                        <li>Improved infrastructure automation and configuration management with Puppet and Ansible.</li>
                        <li>Member of the support team in charge of the physical and virtual platform of the group.</li>
                    </ul>
                </div>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>Web Developer <span class="exp-company">@ Conexiona Telecom</span></h3><h4><i class="fas fa-calendar-alt"></i> Feb 2018 – May 2018 &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> Spain &nbsp;·&nbsp; Internship</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <ul class="achievements-list">
                        <li>Developed the notifications system for the web application managing the company's financial records.</li>
                    </ul>
                </div>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>System Administrator <span class="exp-company">@ University of Vigo</span></h3><h4><i class="fas fa-calendar-alt"></i> Nov 2017 – Mar 2018 &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> Spain &nbsp;·&nbsp; Internship</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <ul class="achievements-list">
                        <li>Provided support in managing the computing infrastructure of approximately 500 computers and peripherals.</li>
                        <li>Covered hardware and software management, maintenance and troubleshooting.</li>
                    </ul>
                </div>
            </div>
        `,
        "es": `
            <h2 class="section-title">Experiencia</h2>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>Ingeniero de Sistemas <span class="exp-company">@ Adfinis AG</span></h3><h4><i class="fas fa-calendar-alt"></i> Ene 2024 – Presente &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> Suiza</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <p class="tech-stack-label"><strong>Tecnologías:</strong> Kubernetes, OpenShift, AWS, Azure, GCP, Terraform, Ansible, GitLab CI, ArgoCD, HashiCorp Vault, OpenBao, Python, Bash, Linux</p>
                    <ul class="achievements-list">
                        <li>Entrego infraestructura cloud-native y soluciones DevOps para clientes empresariales.</li>
                        <li>Diseño y opero plataformas Kubernetes y OpenShift en entornos multi-cloud (AWS, Azure, GCP).</li>
                        <li>Diseño e implemento plataformas GitLab empresariales y arquitecturas CI/CD integradas con flujos GitOps (ArgoCD) y Vault.</li>
                        <li>Lidero actualizaciones de más de 30 sistemas en producción (Kubernetes, OpenShift, GitLab, Vault).</li>
                        <li>Automatizo el aprovisionamiento de infraestructura con Terraform y Ansible para estandarizar entornos de clientes.</li>
                        <li>Resuelvo incidencias en sistemas distribuidos y mejoro la fiabilidad y el rendimiento operativo de las plataformas.</li>
                    </ul>
                </div>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>Ingeniero de Infraestructura Cloud <span class="exp-company">@ CERN</span></h3><h4><i class="fas fa-calendar-alt"></i> Sep 2021 – Sep 2023 &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> Suiza</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <p class="tech-stack-label"><strong>Tecnologías:</strong> OpenStack, Linux, Python, Bash, Puppet, MySQL, InfluxDB, Prometheus, Grafana, Rundeck, CI/CD</p>
                    <ul class="achievements-list">
                        <li>Jugué un papel clave en la configuración, gestión y mejora continua de la infraestructura del Servicio Cloud del CERN (OpenStack).</li>
                        <li>Realicé actualizaciones del servicio que implicaron la migración de miles de máquinas virtuales.</li>
                        <li>Desarrollé herramientas de automatización para agilizar las operaciones y aumentar la eficiencia.</li>
                        <li>Responsable de la monitorización del Servicio Cloud, garantizando alta disponibilidad y rendimiento.</li>
                        <li>Gestioné y mantuve la aplicación web OpenStack del CERN para miles de usuarios.</li>
                        <li>Resolución de incidencias en una infraestructura a gran escala con 10.000 servidores físicos, 13.000 VMs y más de 500.000 cores.</li>
                    </ul>
                </div>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>Ingeniero DevOps / Infraestructura <span class="exp-company">@ CERN</span></h3><h4><i class="fas fa-calendar-alt"></i> Jul 2018 – Jul 2021 &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> Suiza</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <p class="tech-stack-label"><strong>Tecnologías:</strong> Linux, Python, Puppet, Ansible, Nomad, Docker, Kubernetes, CI/CD, InfluxDB, Telegraf, Grafana, Filebeat, Logstash</p>
                    <ul class="achievements-list">
                        <li>Diseñé e implementé una infraestructura contenerizada con HashiCorp Nomad, liderando la migración de varios sistemas a Nomad y Kubernetes.</li>
                        <li>Lideré la migración de los sistemas de monitorización y alerta a una nueva solución.</li>
                        <li>Mejoré la automatización de infraestructura y la gestión de configuración con Puppet y Ansible.</li>
                        <li>Miembro del equipo de soporte de la plataforma física y virtual del grupo.</li>
                    </ul>
                </div>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>Desarrollador Web <span class="exp-company">@ Conexiona Telecom</span></h3><h4><i class="fas fa-calendar-alt"></i> Feb 2018 – May 2018 &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> España &nbsp;·&nbsp; Prácticas</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <ul class="achievements-list">
                        <li>Desarrollé el sistema de notificaciones para la aplicación web que gestiona los registros financieros de la empresa.</li>
                    </ul>
                </div>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>Administrador de Sistemas <span class="exp-company">@ Universidad de Vigo</span></h3><h4><i class="fas fa-calendar-alt"></i> Nov 2017 – Mar 2018 &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> España &nbsp;·&nbsp; Prácticas</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <ul class="achievements-list">
                        <li>Proporcioné soporte en la gestión de la infraestructura informática de aproximadamente 500 ordenadores y periféricos.</li>
                        <li>Cubrí la gestión, mantenimiento y resolución de problemas de hardware y software.</li>
                    </ul>
                </div>
            </div>
        `,
        "fr": `
            <h2 class="section-title">Expérience</h2>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>Ingénieur Systèmes <span class="exp-company">@ Adfinis AG</span></h3><h4><i class="fas fa-calendar-alt"></i> Jan 2024 – Présent &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> Suisse</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <p class="tech-stack-label"><strong>Technologies :</strong> Kubernetes, OpenShift, AWS, Azure, GCP, Terraform, Ansible, GitLab CI, ArgoCD, HashiCorp Vault, OpenBao, Python, Bash, Linux</p>
                    <ul class="achievements-list">
                        <li>Fourniture d'infrastructure cloud-native et de solutions DevOps pour des clients entreprises.</li>
                        <li>Architecture et exploitation de plateformes Kubernetes et OpenShift dans des environnements multi-cloud (AWS, Azure, GCP).</li>
                        <li>Conception et implémentation de plateformes GitLab et architectures CI/CD intégrées avec GitOps (ArgoCD) et Vault.</li>
                        <li>Direction des mises à niveau de 30+ systèmes en production (Kubernetes, OpenShift, GitLab, Vault).</li>
                        <li>Automatisation du provisionnement d'infrastructure avec Terraform et Ansible.</li>
                        <li>Résolution d'incidents sur des systèmes distribués et amélioration de la fiabilité des plateformes.</li>
                    </ul>
                </div>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>Ingénieur Infrastructure Cloud <span class="exp-company">@ CERN</span></h3><h4><i class="fas fa-calendar-alt"></i> Sep 2021 – Sep 2023 &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> Suisse</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <p class="tech-stack-label"><strong>Technologies :</strong> OpenStack, Linux, Python, Bash, Puppet, MySQL, InfluxDB, Prometheus, Grafana, Rundeck, CI/CD</p>
                    <ul class="achievements-list">
                        <li>Rôle clé dans la configuration, la gestion et l'amélioration continue de l'infrastructure Cloud du CERN (OpenStack).</li>
                        <li>Réalisation de mises à niveau impliquant la migration de milliers de VMs.</li>
                        <li>Développement d'outils d'automatisation pour rationaliser les opérations.</li>
                        <li>Surveillance du Service Cloud pour garantir haute disponibilité et performance.</li>
                        <li>Gestion de l'application web OpenStack du CERN pour des milliers d'utilisateurs.</li>
                        <li>Support et résolution d'incidents sur une infrastructure avec 10 000 serveurs physiques, 13 000 VMs et 500 000+ cœurs.</li>
                    </ul>
                </div>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>Ingénieur DevOps / Infrastructure <span class="exp-company">@ CERN</span></h3><h4><i class="fas fa-calendar-alt"></i> Juil 2018 – Juil 2021 &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> Suisse</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <p class="tech-stack-label"><strong>Technologies :</strong> Linux, Python, Puppet, Ansible, Nomad, Docker, Kubernetes, CI/CD, InfluxDB, Telegraf, Grafana, Filebeat, Logstash</p>
                    <ul class="achievements-list">
                        <li>Conception et implémentation d'une infrastructure conteneurisée avec HashiCorp Nomad, migration de systèmes vers Nomad et Kubernetes.</li>
                        <li>Migration des systèmes de surveillance et d'alerte vers une nouvelle solution.</li>
                        <li>Amélioration de l'automatisation et de la gestion de configuration avec Puppet et Ansible.</li>
                        <li>Membre de l'équipe de support de la plateforme physique et virtuelle du groupe.</li>
                    </ul>
                </div>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>Développeur Web <span class="exp-company">@ Conexiona Telecom</span></h3><h4><i class="fas fa-calendar-alt"></i> Fév 2018 – Mai 2018 &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> Espagne &nbsp;·&nbsp; Stage</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <ul class="achievements-list">
                        <li>Développement du système de notifications pour l'application web gérant les registres financiers de l'entreprise.</li>
                    </ul>
                </div>
            </div>
            <div class="experience-entry">
                <div class="experience-title" onclick="toggleVisibility(this.nextElementSibling)"><i class="fas fa-chevron-down exp-chevron"></i><div class="experience-title-text"><h3>Administrateur Systèmes <span class="exp-company">@ Université de Vigo</span></h3><h4><i class="fas fa-calendar-alt"></i> Nov 2017 – Mar 2018 &nbsp;·&nbsp; <i class="fas fa-map-marker-alt"></i> Espagne &nbsp;·&nbsp; Stage</h4></div>
                </div>
                <div class="achievements-list-container" style="display: none;">
                    <ul class="achievements-list">
                        <li>Support à la gestion de l'infrastructure informatique d'environ 500 ordinateurs et périphériques.</li>
                        <li>Gestion matérielle et logicielle, maintenance et dépannage.</li>
                    </ul>
                </div>
            </div>
        `,
    },
    "technologies": {
        "en": `
            <h2 class="section-title">Technologies</h2>
            <div id="tech-content">
                <div class="tech-category">
                    <p class="tech-category-title">Cloud</p>
                    <div class="tech-badges">
                        <span class="tech-badge cloud">AWS</span>
                        <span class="tech-badge cloud">Azure</span>
                        <span class="tech-badge cloud">GCP</span>
                        <span class="tech-badge cloud">OpenStack</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">Containers & Orchestration</p>
                    <div class="tech-badges">
                        <span class="tech-badge containers">Kubernetes</span>
                        <span class="tech-badge containers">OpenShift</span>
                        <span class="tech-badge containers">Docker</span>
                        <span class="tech-badge containers">Nomad</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">IaC & Configuration</p>
                    <div class="tech-badges">
                        <span class="tech-badge iac">Terraform</span>
                        <span class="tech-badge iac">Ansible</span>
                        <span class="tech-badge iac">Puppet</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">CI/CD & GitOps</p>
                    <div class="tech-badges">
                        <span class="tech-badge cicd">GitLab CI</span>
                        <span class="tech-badge cicd">GitHub Actions</span>
                        <span class="tech-badge cicd">ArgoCD</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">Observability</p>
                    <div class="tech-badges">
                        <span class="tech-badge observability">Prometheus</span>
                        <span class="tech-badge observability">Grafana</span>
                        <span class="tech-badge observability">Elasticsearch</span>
                        <span class="tech-badge observability">Opensearch</span>
                        <span class="tech-badge observability">Logstash</span>
                        <span class="tech-badge observability">Kibana</span>
                        <span class="tech-badge observability">InfluxDB</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">Security</p>
                    <div class="tech-badges">
                        <span class="tech-badge security">HashiCorp Vault</span>
                        <span class="tech-badge security">OpenBao</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">Languages & Systems</p>
                    <div class="tech-badges">
                        <span class="tech-badge lang">Python</span>
                        <span class="tech-badge lang">Bash</span>
                        <span class="tech-badge lang">Linux</span>
                    </div>
                </div>
            </div>
        `,
        "es": `
            <h2 class="section-title">Tecnologías</h2>
            <div id="tech-content">
                <div class="tech-category">
                    <p class="tech-category-title">Cloud</p>
                    <div class="tech-badges">
                        <span class="tech-badge cloud">AWS</span>
                        <span class="tech-badge cloud">Azure</span>
                        <span class="tech-badge cloud">GCP</span>
                        <span class="tech-badge cloud">OpenStack</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">Contenedores y Orquestación</p>
                    <div class="tech-badges">
                        <span class="tech-badge containers">Kubernetes</span>
                        <span class="tech-badge containers">OpenShift</span>
                        <span class="tech-badge containers">Docker</span>
                        <span class="tech-badge containers">Nomad</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">IaC y Configuración</p>
                    <div class="tech-badges">
                        <span class="tech-badge iac">Terraform</span>
                        <span class="tech-badge iac">Ansible</span>
                        <span class="tech-badge iac">Puppet</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">CI/CD y GitOps</p>
                    <div class="tech-badges">
                        <span class="tech-badge cicd">GitLab CI</span>
                        <span class="tech-badge cicd">GitHub Actions</span>
                        <span class="tech-badge cicd">ArgoCD</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">Observabilidad</p>
                    <div class="tech-badges">
                        <span class="tech-badge observability">Prometheus</span>
                        <span class="tech-badge observability">Grafana</span>
                        <span class="tech-badge observability">Elasticsearch</span>
                        <span class="tech-badge observability">Opensearch</span>
                        <span class="tech-badge observability">Logstash</span>
                        <span class="tech-badge observability">Kibana</span>
                        <span class="tech-badge observability">InfluxDB</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">Seguridad</p>
                    <div class="tech-badges">
                        <span class="tech-badge security">HashiCorp Vault</span>
                        <span class="tech-badge security">OpenBao</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">Lenguajes y Sistemas</p>
                    <div class="tech-badges">
                        <span class="tech-badge lang">Python</span>
                        <span class="tech-badge lang">Bash</span>
                        <span class="tech-badge lang">Linux</span>
                    </div>
                </div>
            </div>
        `,
        "fr": `
            <h2 class="section-title">Technologies</h2>
            <div id="tech-content">
                <div class="tech-category">
                    <p class="tech-category-title">Cloud</p>
                    <div class="tech-badges">
                        <span class="tech-badge cloud">AWS</span>
                        <span class="tech-badge cloud">Azure</span>
                        <span class="tech-badge cloud">GCP</span>
                        <span class="tech-badge cloud">OpenStack</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">Conteneurs & Orchestration</p>
                    <div class="tech-badges">
                        <span class="tech-badge containers">Kubernetes</span>
                        <span class="tech-badge containers">OpenShift</span>
                        <span class="tech-badge containers">Docker</span>
                        <span class="tech-badge containers">Nomad</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">IaC & Configuration</p>
                    <div class="tech-badges">
                        <span class="tech-badge iac">Terraform</span>
                        <span class="tech-badge iac">Ansible</span>
                        <span class="tech-badge iac">Puppet</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">CI/CD & GitOps</p>
                    <div class="tech-badges">
                        <span class="tech-badge cicd">GitLab CI</span>
                        <span class="tech-badge cicd">GitHub Actions</span>
                        <span class="tech-badge cicd">ArgoCD</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">Observabilité</p>
                    <div class="tech-badges">
                        <span class="tech-badge observability">Prometheus</span>
                        <span class="tech-badge observability">Grafana</span>
                        <span class="tech-badge observability">Elasticsearch</span>
                        <span class="tech-badge observability">Opensearch</span>
                        <span class="tech-badge observability">Logstash</span>
                        <span class="tech-badge observability">Kibana</span>
                        <span class="tech-badge observability">InfluxDB</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">Sécurité</p>
                    <div class="tech-badges">
                        <span class="tech-badge security">HashiCorp Vault</span>
                        <span class="tech-badge security">OpenBao</span>
                    </div>
                </div>
                <div class="tech-category">
                    <p class="tech-category-title">Langages & Systèmes</p>
                    <div class="tech-badges">
                        <span class="tech-badge lang">Python</span>
                        <span class="tech-badge lang">Bash</span>
                        <span class="tech-badge lang">Linux</span>
                    </div>
                </div>
            </div>
        `,
    },
    "education": {
        "en": `
            <h2 class="section-title">Education</h2>
            <div class="content-section">
                <div class="education-entry">
                    <div class="education-entry-body"><h3>B.S. in Computer Engineering</h3>
                    <h4>University of Vigo, Spain · 2020</h4>
                    <p>Bachelor's thesis: <a href="https://github.com/dominrivera/ESEIMS" target="_blank">ESEI Monitoring System</a></p></div></div>
                <div class="education-entry">
                    <div class="education-entry-body"><h3>Erasmus Programme, Computer Engineering</h3>
                    <h4>Bialystok University of Technology, Poland · 2016</h4></div></div>
            </div>
            <h2 class="section-title">Certifications</h2>
            <div class="content-section">
                <div class="certs-grid">
                    <div class="cert-item">
                        <img src="CKA.jpg" alt="CKA Badge" onclick="openLightbox(this.src)">
                        <h3>CKA: Certified Kubernetes Administrator</h3>
                    </div>
                    <div class="cert-item">
                        <img src="LFS258.jpg" alt="LFS258 Badge" onclick="openLightbox(this.src)">
                        <h3>LFS258: Kubernetes Fundamentals</h3>
                    </div>
                    <div class="cert-item">
                        <img src="vault_associate.jpg" alt="Vault Associate Badge" onclick="openLightbox(this.src)">
                        <h3>HashiCorp Vault Associate</h3>
                    </div>
                    <div class="cert-item">
                        <img src="hashicorp-certified-vault-operations-professional-1.png" alt="Vault Operations Professional Badge" onclick="openLightbox(this.src)">
                        <h3>HashiCorp Vault Operations Professional</h3>
                    </div>
                    <div class="cert-item">
                        <img src="gitlab-certified-services-engineer-professional-1.png" alt="GitLab Certified PSE Badge" onclick="openLightbox(this.src)">
                        <h3>GitLab Certified Professional Services Engineer</h3>
                    </div>
                </div>
            </div>
        `,
        "es": `
            <h2 class="section-title">Educación</h2>
            <div class="content-section">
                <div class="education-entry">
                    <div class="education-entry-body"><h3>Grado en Ingeniería Informática</h3>
                    <h4>Universidad de Vigo, España · 2020</h4>
                    <p>Trabajo de fin de grado: <a href="https://github.com/dominrivera/ESEIMS" target="_blank">Sistema de Monitorización de la ESEI</a></p></div></div>
                <div class="education-entry">
                    <div class="education-entry-body"><h3>Programa Erasmus, Ingeniería Informática</h3>
                    <h4>Bialystok University of Technology, Polonia · 2016</h4></div></div>
            </div>
            <h2 class="section-title">Certificaciones</h2>
            <div class="content-section">
                <div class="certs-grid">
                    <div class="cert-item">
                        <img src="CKA.jpg" alt="CKA Badge" onclick="openLightbox(this.src)">
                        <h3>CKA: Certified Kubernetes Administrator</h3>
                    </div>
                    <div class="cert-item">
                        <img src="LFS258.jpg" alt="LFS258 Badge" onclick="openLightbox(this.src)">
                        <h3>LFS258: Kubernetes Fundamentals</h3>
                    </div>
                    <div class="cert-item">
                        <img src="vault_associate.jpg" alt="Vault Associate Badge" onclick="openLightbox(this.src)">
                        <h3>HashiCorp Vault Associate</h3>
                    </div>
                    <div class="cert-item">
                        <img src="hashicorp-certified-vault-operations-professional-1.png" alt="Vault Operations Professional Badge" onclick="openLightbox(this.src)">
                        <h3>HashiCorp Vault Operations Professional</h3>
                    </div>
                    <div class="cert-item">
                        <img src="gitlab-certified-services-engineer-professional-1.png" alt="GitLab Certified PSE Badge" onclick="openLightbox(this.src)">
                        <h3>GitLab Certified Professional Services Engineer</h3>
                    </div>
                </div>
            </div>
        `,
        "fr": `
            <h2 class="section-title">Éducation</h2>
            <div class="content-section">
                <div class="education-entry">
                    <div class="education-entry-body"><h3>Licence en Ingénierie Informatique</h3>
                    <h4>Université de Vigo, Espagne · 2020</h4>
                    <p>Thèse de licence : <a href="https://github.com/dominrivera/ESEIMS" target="_blank">Système de Surveillance ESEI</a></p></div></div>
                <div class="education-entry">
                    <div class="education-entry-body"><h3>Programme Erasmus, Ingénierie Informatique</h3>
                    <h4>Université de Technologie de Bialystok, Pologne · 2016</h4></div></div>
            </div>
            <h2 class="section-title">Certifications</h2>
            <div class="content-section">
                <div class="certs-grid">
                    <div class="cert-item">
                        <img src="CKA.jpg" alt="CKA Badge" onclick="openLightbox(this.src)">
                        <h3>CKA: Certified Kubernetes Administrator</h3>
                    </div>
                    <div class="cert-item">
                        <img src="LFS258.jpg" alt="LFS258 Badge" onclick="openLightbox(this.src)">
                        <h3>LFS258: Kubernetes Fundamentals</h3>
                    </div>
                    <div class="cert-item">
                        <img src="vault_associate.jpg" alt="Vault Associate Badge" onclick="openLightbox(this.src)">
                        <h3>HashiCorp Vault Associate</h3>
                    </div>
                    <div class="cert-item">
                        <img src="hashicorp-certified-vault-operations-professional-1.png" alt="Vault Operations Professional Badge" onclick="openLightbox(this.src)">
                        <h3>HashiCorp Vault Operations Professional</h3>
                    </div>
                    <div class="cert-item">
                        <img src="gitlab-certified-services-engineer-professional-1.png" alt="GitLab Certified PSE Badge" onclick="openLightbox(this.src)">
                        <h3>GitLab Certified Professional Services Engineer</h3>
                    </div>
                </div>
            </div>
        `,
    }
};

let currentLanguage = 'en';
let currentContent = 'personal';

function changeLanguage(lang) {
    currentLanguage = lang;
    updateContent();
    document.querySelectorAll('.lang-flag').forEach(el => {
        el.style.opacity = el.alt === lang ? '1' : '0.5';
    });
}

function changeContent(contentType) {
    currentContent = contentType;
    updateContent();
    document.querySelectorAll('.menu-item[data-section]').forEach(el => {
        el.classList.toggle('active', el.dataset.section === contentType);
    });
}

function updateContent() {
    const container = document.querySelector('#card-content');
    container.classList.remove('fade-in');
    void container.offsetWidth;
    container.classList.add('fade-in');
    container.innerHTML = translations[currentContent][currentLanguage];

    if (currentContent === 'personal') {
        applyTypewriter();
    }
}

function applyTypewriter() {
    const nameEl = document.querySelector('.card-name');
    const roleEl = document.querySelector('.card-role');
    if (!nameEl || !roleEl) return;

    const fullName = nameEl.textContent;
    const fullRole = roleEl.textContent;

    nameEl.textContent = '';
    roleEl.textContent = '';
    nameEl.classList.add('typewriter-cursor');

    let i = 0;
    function typeName() {
        if (i < fullName.length) {
            nameEl.textContent += fullName[i++];
            setTimeout(typeName, 55);
        } else {
            nameEl.classList.remove('typewriter-cursor');
            roleEl.classList.add('typewriter-cursor');
            let j = 0;
            function typeRole() {
                if (j < fullRole.length) {
                    roleEl.textContent += fullRole[j++];
                    setTimeout(typeRole, 45);
                } else {
                    roleEl.classList.remove('typewriter-cursor');
                }
            }
            typeRole();
        }
    }
    typeName();
}

function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    document.getElementById('lightbox-img').src = src;
    lb.classList.add('open');
    document.addEventListener('keydown', onLightboxKey);
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.removeEventListener('keydown', onLightboxKey);
}

function onLightboxKey(e) {
    if (e.key === 'Escape') closeLightbox();
}

function toggleVisibility(element) {
    const isHidden = element.style.display === 'none' || element.style.display === '';
    element.style.display = isHidden ? 'block' : 'none';
    const chevron = element.previousElementSibling?.querySelector('.exp-chevron');
    if (chevron) chevron.classList.toggle('open', isHidden);
}

// Initial render
document.querySelector('#card-content').innerHTML = translations[currentContent][currentLanguage];
document.querySelector('#card-content').classList.add('fade-in');
applyTypewriter();

document.addEventListener('DOMContentLoaded', () => {
    // Set active sidebar icon
    const firstIcon = document.querySelector('.menu-item[data-section="personal"]');
    if (firstIcon) firstIcon.classList.add('active');

    // Day/night background
    const hour = new Date().getHours();
    document.body.style.background = (hour >= 8 && hour < 22)
        ? 'linear-gradient(135deg, #65a6c0 0%, #4a8ba5 100%)'
        : 'linear-gradient(135deg, #28505f 0%, #1a3a47 100%)';
});
