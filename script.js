document.addEventListener('DOMContentLoaded', function() {
    const terminalContent = document.getElementById('terminal-content');
    const commandInput = document.getElementById('command-input');
  
    commandInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        const command = commandInput.value.trim();
        commandInput.value = '';
        terminalContent.innerHTML += `<div>$ ${command}</div>`;
        executeCommand(command);
      }
    });
  
    function executeCommand(command) {
      switch (command) {
        case 'bash help.sh':
          showHelpWindow();
          break;
        case 'bash about-me.sh':
          showAboutMeButton();
          break;
        case 'bash projects.sh':
          showProjectsButton();
          break;
        case 'bash support-me.sh':
          showSupport();
          break;
        default:
          terminalContent.innerHTML += `<div>Command not found: ${command} <br> try bash help.sh instead</div>`;
      }
    }
  
    function showHelpWindow() {
      // Open a new window to display help.html
      const helpWindow = window.open('help.html', '_blank', 'width=600,height=400');
      if (helpWindow) {
        helpWindow.focus();
      } else {
        alert('Popup blocked! Please allow popups to view help.');
      }
    }
  
    function showAboutMeButton() {
      // Display a button to go to About Me page
      terminalContent.innerHTML += `
        <div>
          <button id="about-me-button">Click here to go to About Me</button>
        </div>
      `;
      document.getElementById('about-me-button').addEventListener('click', goToAboutMe);
    }
  
    function goToAboutMe() {
      // Redirect to the About Me page
      window.location.href = 'about-me.html';
    }
  
    function showProjectsButton() {
        terminalContent.innerHTML += `
          <div>
            <button id="projects-button">Click here to go to a list of my projects</button>
          </div>
        `;
        document.getElementById('projects-button').addEventListener('click', goToProjects);
      }
    
      function goToProjects() {
        // Redirect to the Projects page
        window.location.href = 'projects.html';
      }
        
    function showSupport() {
      terminalContent.innerHTML += `<div><a href="https://www.buymeacoffee.com/hfsouth" target="_blank"><button>click here to support me</button></a></div>`;
    }
  });
