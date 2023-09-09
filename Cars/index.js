window.addEventListener('DOMContentLoaded', init);

const toggleButton = document.getElementsByClassName('dark-mode')[0];

async function init() {
    const language = localStorage.getItem('language');
    applyLanguageContent(language);
    
   
    const mode = localStorage.getItem('mode');
    console.log('mode');
    if (mode === '1') {
        applyDarkModeStyles();
    } else {
        applyLightModeStyles();
    }
    
    toggleButton.addEventListener('click', toggleMode);
}

function applyLightModeStyles() {
    const indexNavbar = document.querySelector('.index-navbar');
    indexNavbar.style.backgroundColor = '#383838';
    const menuButton = document.querySelector('.dark-mode');
    menuButton.style.backgroundColor = '#383838';
    const svgElement = document.querySelector('.dark-mode svg');
    svgElement.querySelector('path').setAttribute('fill', 'white');
    const links = indexNavbar.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = 'white';
    });
    const svgElements = document.querySelectorAll(".button-bar svg");
    svgElements.forEach(svg => {
        const paths = svg.querySelectorAll("path");
        paths.forEach(path => {
            path.setAttribute("fill", "black");
        });
    });
    /*const background = document.querySelector('.body');
    background.style.backgroundColor = 'black';
    
    */
    document.body.style.backgroundColor = 'black';
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.style.backgroundColor = 'black';
        const text = section.querySelector('.text');
        text.style.color = 'white';
    });
}

function applyDarkModeStyles() {
    const indexNavbar = document.querySelector('.index-navbar');
    indexNavbar.style.backgroundColor = 'white';
    const menuButton = document.querySelector('.dark-mode');
    menuButton.style.backgroundColor = 'white';
    const svgElement = document.querySelector('.dark-mode svg');
    svgElement.querySelector('path').setAttribute('fill', '#383838');
    const links = indexNavbar.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = '#383838';
    });
    const svgElements = document.querySelectorAll(".button-bar svg");
    svgElements.forEach(svg => {
        const paths = svg.querySelectorAll("path");
        paths.forEach(path => {
            path.setAttribute("fill", "white");
        });
    });
    /*
    const background = document.querySelector('.body');
    background.background-color = 'white';
    
    const text = document.querySelector('.text');
    back.style.backgroundColor = 'black';*/
    

    document.body.style.backgroundColor = 'white';
    const sections = document.querySelectorAll('.section');
    //document.section.style.backgroundColor = 'black';
    sections.forEach(section => {
        section.style.backgroundColor = 'white';
        const text = section.querySelector('.text');
        text.style.color = 'black';
    });
}

function toggleMode() {
    const mode = localStorage.getItem('mode');
    
    if (mode === '1') {
        // Switch to light mode
        localStorage.setItem('mode', '0');
        document.querySelector('.sun').style.display = 'block';
        document.querySelector('.moon').style.display = 'none';
        applyLightModeStyles();
        
    } else {
        // Switch to dark mode
        localStorage.setItem('mode', '1');
        document.querySelector('.sun').style.display = 'none';
        document.querySelector('.moon').style.display = 'block';
        applyDarkModeStyles();
        
    }
}

function applyLanguageContent(language) {
    
    if (language == 'Español') {
        //let linkElement = document.getElementById('Student Aide');
        //linkElement.textContent = 'Ayuda Estudiantil';
        let linkElement = document.getElementById('Back');
        linkElement.textContent = 'Regresar';
        
        
    } else if (language == '中文'){
        let linkElement = document.getElementById('Back');
        linkElement.textContent = '回去';
        
        
    } else {
        let linkElement = document.getElementById('Back');
        linkElement.textContent = 'Back';
        
    }

    
}