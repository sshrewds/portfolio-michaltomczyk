const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navigation.classList.toggle('navigation-active');
});

const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach((item)=>item.addEventListener('click', ()=>{
    item.classList.toggle('skill-item-active');
}));


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute('href'));
        const y = section.getBoundingClientRect().top + window.pageYOffset -80;

        window.scrollTo({top: y, behavior : 'smooth'});
        hamburger.classList.toggle('hamburger-active');
        navigation.classList.toggle('navigation-active');
    });
});
