// Translations dictionary
const translations = {
    "personal": {
        "en": `
            <img src="fotocv1.jpeg" alt="Your picture" class="card-img">
            <h1 class="card-name">Hi! I am Domingo.</h1>
            <p class="card-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
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
            <p class="card-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
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
            <p class="card-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
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

