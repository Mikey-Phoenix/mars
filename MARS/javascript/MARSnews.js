const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav')
const container = document.querySelector('section');

// (()=>{
//     nav.style.opacity = 0
//     container.style.opacity = 0
//     setTimeout(() => {
//         // opening.style.opacity = 1
//     }, 2000);
//     setTimeout(() => {
//         hero.style.transition = 'all ease 3s'
//         hero.style.backgroundImage = "url('../images/star-background.jpg')"
//         container.style.opacity = 1
//         nav.style.opacity = 1
//     }, 3000);
// })();


// function widthChecker() {
//     if (window.innerWidth > parseInt('767px')) {
//         casts.forEach((topic)=>{
//             topic.addEventListener('mouseover',(e)=>{
//                 let head = e.path[2].children[1];
//                 if (head.children[0].classList.contains('heading')) {
//                     head.style.bottom = '0%'
//                     e.target.style.backgroundColor = 'rgba(54, 55, 58, 0.445)'
//                 }    
//             })
            
//             topic.addEventListener('mouseout',(e)=>{
//                 let head = e.path[2].children[1];
//                 if (head.children[0].classList.contains('heading')) {
//                     head.style.bottom = '-50%'
//                     e.target.style.backgroundColor = 'rgba(54, 55, 58, 0)'
//                 }    
//             })
//         })
//     } 
// }
// widthChecker();

window.addEventListener('load', ()=>{
    document.querySelector('.preloader').style.display = 'none'
})

const overAll = document.querySelector('.overAllContainer')


document.querySelector('.back').addEventListener('click', ()=>{
    overAll.querySelector('.overAll').style.cssText = 'animation: fadeOut .8s'
    setTimeout(() => {
        overAll.style.display = 'none'
        overAll.querySelector('.overAll').style.animation = ''
    }, 800);
})

const dropdown = document.querySelector('.nav').querySelector('.dropdown');

dropdown.addEventListener('click', ()=>{
    if (dropdown.innerHTML == '<i class="fa-solid fa-angle-down"></i>') {
        dropdown.innerHTML = '<i class="fa-solid fa-angle-up"></i>'

        let dropNav = document.createElement('div');
        dropNav.classList.add('dropdownNav')
        dropNav.innerHTML = `
                                <a class="dropNavItem" href="./MARS.html#hero" onclick="remove(dropdown)">Home</a>
                                <a class="dropNavItem" href="./MARS.html#about" onclick="remove(dropdown)">About</a>
                                <a class="dropNavItem" href="./MARS.html#contact" onclick="remove(dropdown)">Contact Us</a>
                                <a class="dropNavItem" href="./MARSnews.html" onclick="remove(dropdown)">News</a>
                            `
        document.querySelector('.nav').appendChild(dropNav)
        setTimeout(() => {
            dropNav.style.top = '100%'
        }, 100);
    } else {
        dropdown.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
        document.querySelector('.dropdownNav').style.top = '-310%'
        setTimeout(() => {
            document.querySelector('.nav').removeChild(document.querySelector('.dropdownNav'))
        }, 500);
    }
})

function remove(dropdown) {
    dropdown.innerText = 'D';
    document.querySelector('.dropdownNav').style.top = '-310%'
    setTimeout(() => {
        document.querySelector('.nav').removeChild(document.querySelector('.dropdownNav'))
    }, 500);
}

const clickable = Array.from(document.querySelectorAll('.clickable'));
clickable.forEach((click)=>{
    click.addEventListener('click', ()=>{
        overAll.style.display = 'block';
        overAll.querySelector('.overAll').style.opacity = 0;
        overAll.querySelector('.overAll').style.animation = 'fadeIn .8s';
        setTimeout(() => {
            overAll.querySelector('.overAll').style.opacity = 1;
            overAll.querySelector('.overAll').style.animation = '';
        }, 800);
    })
})