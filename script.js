const sections = {
    "personal": `
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
    "experience": `
      <h2>Experience</h2>
      <p class="card-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    `,
    "technologies": `
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
    "education": `
      <h2>Education</h2>
      <p>Coming soon...</p>
    `
  };
  
  function changeContent(section) {
    var cardContent = document.getElementById('card-content');
    cardContent.innerHTML = sections[section] || "Section not found";
  }
  
  window.onload = function() {
      changeContent('personal'); // Load the "personal" section by default
  };
  