const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");

const allSections = document.querySelector(".main-content");


// To switch active-btn class between differnt buttons

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function (event) {
            let currentBtn = document.querySelectorAll('.active-btn');
            // currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            // this.className += ' active-btn';
            currentBtn[0].classList.remove('active-btn');
            event.target.classList.add('active-btn');
        })
    }

    // Sections Active class
    allSections.addEventListener("click", (event) => {
        const id = event.target.dataset.id;
        if (id) {
            // Remove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            event.target.classList.add('active');

            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })


}

PageTransitions();


// Auto typing effect
// var typed = new Typed(".auto-type", {
//     strings: ["Web Developer.","Coder", "Playing", "Running"],
//     typeSpeed: 140,
//     backSpeed: 140,
//     loop: true
// })