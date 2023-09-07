

window.addEventListener('DOMContentLoaded', init);

const dropdown = document.getElementById('Language');
const toggleButton = document.getElementsByClassName('dark-mode')[0];
const emailIcon = document.getElementById("email-icon");
const introTitle = document.querySelector('.intro-title');


emailIcon.addEventListener("click", function() {
    const emailAddress = "nickho.lv@gmail.com";
    const subject = "Subject Here";
    const body = "Your email body here";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
});

var modal = document.getElementById("modal");

// Get the resume icon
var resumeIcon = document.getElementById("resume");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the resume icon is clicked, open the modal and display the image
resumeIcon.onclick = function() {
    modal.style.display = "block";
    var modalImage = document.getElementById("modal-image");
    modalImage.src = "/../Pics/resume.png"; // Replace with your image URL
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

window.addEventListener('resize', function() {
    if (this.localStorage.getItem('language') == 'English'){
        if (window.innerWidth <= 780) {
            introTitle.style.fontSize = '3rem';
        } else {
            introTitle.style.fontSize = '100px';
        }
    }
    else if (this.localStorage.getItem('language') == 'Español'){
        if (window.innerWidth <= 780) {
            introTitle.style.fontSize = '2rem';
        }
        else if (window.innerWidth <= 1000) {
            introTitle.style.fontSize = '4rem';
        } else {
            introTitle.style.fontSize = '80px';
        }
    }
    else {
        if (window.innerWidth <= 950) {
            introTitle.style.fontSize = '2.5rem';
        } else {
            introTitle.style.fontSize = '80px';
        }
    }
});

const languageOptions = ['English', 'Español', '中文'];
let currentLanguageIndex = 0;

/**
 * clears local storage of FutureNowState item and creates a new states for future
 */
async function init() {
    console.log(localStorage.getItem('mode'))
    if (!localStorage.getItem('mode')) {
        localStorage.setItem('mode', 0);
    }
    
    //if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'English');
    //}
    const language = localStorage.getItem('language');
    //const toggleButton = document.getElementById('languageToggle');
    //const selectedLanguage = document.getElementById('selectedLanguage');

    // Initialize the displayed language
   //selectedLanguage.textContent = `Language: ${language}`;

    /*toggleButton.addEventListener('click', function () {
        // Cycle through the language options
        currentLanguageIndex = (currentLanguageIndex + 1) % languageOptions.length;
        
        // Update the displayed language
        selectedLanguage.textContent = `Language: ${languageOptions[currentLanguageIndex]}`;
        
        // Update the language in local storage if needed
        localStorage.setItem('language', languageOptions[currentLanguageIndex]);

        // Apply language-specific changes here
        applyLanguageContent(languageOptions[currentLanguageIndex]);
    });*/
    
    // Apply initial language content
    applyLanguageContent(language);
    
    dropdown.addEventListener('change', function (event) {
        const selectedLanguage = event.target.value;   
        localStorage.setItem('language', selectedLanguage);
        applyLanguageContent(selectedLanguage);
    });
   
    const mode = localStorage.getItem('mode');
    if (mode === '1') {
        applyDarkModeStyles();
    } else {
        applyLightModeStyles();
    }
    
    toggleButton.addEventListener('click', toggleMode);
}

function applyLightModeStyles() {
    const indexNavbar = document.querySelector('.index-navbar');
    document.body.style.backgroundImage = 'url(../Pics/night.jpg)';
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
}

function applyDarkModeStyles() {
    const indexNavbar = document.querySelector('.index-navbar');
    document.body.style.backgroundImage = 'url(../Pics/background.jpeg)'
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
        let linkElement = document.getElementById('Cars');
        linkElement.textContent = 'Conducción autónoma';
        linkElement = document.getElementById('Tarot');
        linkElement.textContent = 'Cartas de Tarot';
        linkElement = document.getElementById('Ball');
        linkElement.textContent = '8 Bola';
        linkElement = document.getElementById('title');
        linkElement.textContent = 'Hola, me llamo Nick!';
        const introTitle = document.querySelector('.intro-title');
        if (window.innerWidth <= 780) {
            introTitle.style.fontSize = '2rem';
        } else {
            introTitle.style.fontSize = '120px';
        }
        
    } else if (language == '中文'){
        let linkElement = document.getElementById('Cars');
        linkElement.textContent = '自动驾驶汽车';
        linkElement = document.getElementById('Tarot');
        linkElement.textContent = '塔罗牌';
        linkElement = document.getElementById('Ball');
        linkElement.textContent = '8 球';
        linkElement = document.getElementById('title');
        linkElement.textContent = '你好，我的名字是何微琦!';
        const introTitle = document.querySelector('.intro-title');
        if (window.innerWidth <= 780) {
            introTitle.style.fontSize = '2.5rem';
        } else {
            introTitle.style.fontSize = '100px';
        } 
        
    } else {
        let linkElement = document.getElementById('Cars');
        linkElement.textContent = 'Autonomous Driving';
        linkElement = document.getElementById('Tarot');
        linkElement.textContent = 'Tarot Cards';
        linkElement = document.getElementById('Ball');
        linkElement.textContent = '8 Ball';
        linkElement = document.getElementById('title');
        linkElement.textContent = "Hi, I'm Nick!";
        const introTitle = document.querySelector('.intro-title');
        if (window.innerWidth <= 780) {
            introTitle.style.fontSize = '3rem';
        } else {
            introTitle.style.fontSize = '140px';
        }
    }

    
}





