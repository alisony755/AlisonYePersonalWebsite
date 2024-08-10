document.addEventListener('DOMContentLoaded', () => {
    
  // Smooth Scroll
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }

    // Theme Toggle
    const toggleCheckbox = document.getElementById('toggle-checkbox');

    // Set initial theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleCheckbox.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        toggleCheckbox.checked = false;
    }

    // Theme toggle event listener
   toggleCheckbox.addEventListener('change', () => {
        if (toggleCheckbox.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Typing Animation
    const intro = document.getElementById('intro');
    setTimeout(() => {
        intro.classList.add('no-caret');
    }, 4000); // Duration of the typing animation

    // Skill bar animation
const skillsSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.progress-bar');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    if (width) {
                        bar.style.width = width;
                    }
                });
                observer.unobserve(skillsSection);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(skillsSection);
});

// Command line simulator
document.addEventListener('DOMContentLoaded', () => {
    const cliInput = document.getElementById('cli-input');
    const cliOutput = document.getElementById('cli-output');

    const hours = new Date().getHours();
    let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = 'Good morning! My name is Alison Ye.';
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Good afternoon! My name is Alison Ye.';
    } else {
        greeting = 'Good evening! My name is Alison Ye.';
    }

    const commands = {
        help: 'Available commands: help, hi, about, major, skills, languages, theme, bio, contact, bye',
        about: 'I am Alison Ye, an Honors Computer Science student at Northeastern University.',
        major: 'I am majoring in computer science with a concentration in AI.',
        skills: 'Java, C, JavaScript, Python, Machine Learning, HTML & CSS, Leadership, Team Collaboration, UX, Graphic Design',
        languages: 'Racket, Java, C++, C, Python, HTML & CSS',
        bio: 'I am a third-year Northeastern student passionate about AI and Machine Learning.',
        theme: () => {
            document.body.classList.toggle('dark-mode');
            return 'Theme toggled!';
        },
        contact: 'You can contact me via email at ye.ali@northeastern.edu.',
        hi: greeting,
        bye: 'Bye! Hope I\'ll see you again soon.'
    };

    cliInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const input = cliInput.value.trim().toLowerCase();
            if (commands[input]) {
                const output = commands[input];
                cliOutput.innerHTML += `> ${input}\n${typeof output === 'function' ? output() : output}\n\n`;
            } else {
                const availableCommands = Object.keys(commands).join(', ');
                cliOutput.innerHTML += `> ${input}\nCommand not available. Available commands are: ${availableCommands}\n\n`;
            }
            cliInput.value = '';
            cliOutput.scrollTop = cliOutput.scrollHeight;
        }
    });
});
