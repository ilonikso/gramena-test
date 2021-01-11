const menuOpen = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__menu');
const overlay = document.querySelector('.overlay');
const navWrapper = document.querySelector('.nav__wrapper');

menuOpen.addEventListener('click', () => {
    overlay.classList.toggle('active');
    menuOpen.classList.toggle('nav__burger--close');
    menu.classList.toggle('nav__menu--open');
    navWrapper.classList.toggle('nav__wrapper--open')

    if(menu.classList.contains('nav__menu--open')){
        document.body.style.overflowY = "hidden";
    } else{
        document.body.style.overflowY = "auto";
    }

    overlay.addEventListener('click', () => {
        menu.classList.remove('nav__menu--open');
        overlay.classList.remove('active');
        menuOpen.classList.remove('nav__burger--close');
    
        document.body.style.overflow = 'auto';
    });
});


// /* Modal Open */

// const modal = document.querySelector('.modal');
// const modalOpenButton = document.querySelector('.referral__link-gen');
// const modalCloseButton = document.querySelector('.modal__cross');

// modalOpenButton.addEventListener('click', (e) =>{
    
//     modal.classList.add('modal--active');
//     overlay.classList.add('active');

//     document.body.style.overflow = 'hidden';


//     modalCloseButton.addEventListener('click', () => {
//         modal.classList.remove('modal--active');
//         overlay.classList.remove('active');
    
//         document.body.style.overflow = 'auto';
//     });
    
//     overlay.addEventListener('click', () => {
//         modal.classList.remove('modal--active');
//         overlay.classList.remove('active');
    
//         document.body.style.overflow = 'auto';
//     });
    
//     document.addEventListener('keydown', (evt) => {
    
//         if(evt.keyCode === 27){
//             modal.classList.remove('modal--active');
//             overlay.classList.remove('active');
    
//             document.body.style.overflow = 'auto';
//         }
        
//     });

//     e.preventDefault();
// })

 