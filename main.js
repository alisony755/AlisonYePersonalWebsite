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
