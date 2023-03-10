let nav = document.querySelector('.nav');
let hero = document.querySelector('.hero');
let body = document.querySelector('body');

let dropdown = document.querySelector('.nav').querySelector('.dropdown')
let num = 0;
let slideNav = document.createElement('div');

const overAll = document.querySelector('.overAllContainer')

const exitEdit = document.querySelector('#exit');

const editings = Array.from(document.querySelectorAll('.editt'));
const views = Array.from(document.querySelectorAll('.view'));

const profiler = document.querySelector('.Person-image');
const file = document.querySelector('#file');
var store_image = '';


const CWon = document.querySelector('#won');
const CSecond = document.querySelector('#second');
const CThird = document.querySelector('#third');
const CLost = document.querySelector('#lost');


const CMissed = document.querySelector('#missed');

const CTotal = document.querySelector('.pieContainer');

const CNote = document.querySelector('.remarks');

(()=>{
    let datum = JSON.parse(localStorage.getItem('person-details'));
    body.style.backgroundImage = 'url("../images/star-background.jpg")';
    body.style.overflowY = 'hidden';
    document.querySelector('.nickname').innerHTML = datum.nickname;
    document.querySelector('#last').innerHTML = datum.lastName;
    document.querySelector('#first').innerHTML = datum.firstName;
    document.querySelector('#middle').innerHTML = datum.middleName;
    document.querySelector('.ageInner').innerHTML = datum.age;
    // document.querySelector('email-edit').placeholder = 'red';
    // document.querySelector('gender-edit').placeholder = datum.gender;
    setTimeout(() => {
        nav.style.opacity = '1'
        hero.style.opacity = '1'
    }, 2000);
    setTimeout(() => {
        body.style.backgroundImage = 'url("../images/black-background.jpg")'
        setTimeout(() => {
            body.style.overflowY = 'scroll'
            body.style.backgroundColor = 'rgb(55, 55, 58);'
            body.style.cssText = 'background-color: rgb(55, 55, 58);'
        }, 1500);
    }, 3000);
})();
// 555
// const nav = document.querySelector('nav')
// window.addEventListener('scroll', ()=>{
//     const scrolled = window.scrollY
//     if (scrolled >= 555) {
//         nav.style.display = 'flex'
//         setTimeout(() => {
//             nav.style.opacity = 1
//         }, 300);
//     } else {
//         nav.style.opacity = 0
//         setTimeout(() => {
//             nav.style.display = 'none'
//         }, 300);
//     }
// })


window.addEventListener('load', ()=>{
    document.querySelector('.preloader').style.display = 'none'
})




file.addEventListener('change', function() {
    // console.log(file.value);
    const reader = new FileReader()
    reader.addEventListener('load', ()=>{
        store_image = reader.result;
        profiler.src = store_image;
    })
    reader.readAsDataURL(this.files[0]);
})




function editting() {
    document.querySelector('.imageHolder').querySelector('.cast').style.display = 'flex'
    document.querySelector('#exit').style.display = 'flex'
    editings.forEach((edit)=>{
        edit.style.display = 'block'
    })
    views.forEach((view)=>{
        view.style.display = 'none'
    })
}


exitEdit.addEventListener('click', ()=>{
    alert("If your profile details are not changed after 24hrs please report to management")
    views.forEach((view)=>{
        view.style.display = 'flex'
    })
    editings.forEach((edit)=>{
        edit.style.display = 'none'
    })
    document.querySelector('#exit').style.display = 'none'
    document.querySelector('.imageHolder').querySelector('.cast').style.display = 'none'
})




function notify() {
    overAll.style.display = 'flex';
}

document.querySelector('.back').addEventListener('click', ()=>{
    overAll.querySelector('.overAll').style.cssText = 'animation: fadeOut .8s';
    setTimeout(() => {
        overAll.style.display = 'none'
        overAll.querySelector('.overAll').style.animation = ''
    }, 800);
})
document.querySelector('.close').addEventListener('click', ()=>{
    overAll.querySelector('.overAll').style.cssText = 'animation: fadeOut .8s';
    setTimeout(() => {
        overAll.style.display = 'none'
        overAll.querySelector('.overAll').style.animation = ''
    }, 800);
})



slideNav.classList.add('slideInNav');
function details() {
    if (window.innerWidth < parseInt('768px')) {
            if (num == 0) {
                slideNav.innerHTML = `
                                        <div class="dropNavItem" onclick="remove(dropdown, 1), scores()"><i class="fa-solid fa-chart-line"></i> Stats</div>
                                        <div class="dropNavItem" onclick="remove(dropdown, 1)"><i class="fa-solid fa-diagram-project"></i> Projects</div>
                                        <div class="dropNavItem" onclick="remove(dropdown, 1), notify()"><i class="fa-solid fa-bell"></i> Notifications</div>
                                        <div class="dropNavItem" onclick="remove(dropdown, 1), editting()"><i class="fa-solid fa-pen"></i> Edit Profile</div>
                                        <div class="dropNavItem" onclick="remove(dropdown, 1)"><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</div>
                                        <div class="dropNavItem" onclick="remove(dropdown, 1)"><i class="fa-solid fa-trash"></i> Delete Account</div>
                                    `
                document.querySelector('.nav').appendChild(slideNav);
                num = 1;
                setTimeout(() => {
                    slideNav.style.left = '0%'
                    setTimeout(() => {
                    }, 600);
                }, 100);
            } else {
                slideNav.style.left = '-100%'
                setTimeout(() => {
                    document.querySelector('.nav').removeChild(document.querySelector('.slideInNav'));
                num = 0;
            }, 500);
        }
    }
    
}




dropdown.addEventListener('click', ()=>{
    if (dropdown.innerH == '<i class="fa-solid fa-angle-down"></i>') {
        dropdown.innerH = '<i class="fa-solid fa-angle-up"></i>'

        let dropNav = document.createElement('div');
        dropNav.classList.add('dropdownNav')
        dropNav.innerHTML = `
                                <a class="dropNavItem" href="./MARS.html#hero" onclick="remove(dropdown, 2)">Home</a>
                                <a class="dropNavItem" href="./MARS.html#about" onclick="remove(dropdown, 2)">About</a>
                                <a class="dropNavItem" href="./MARS.html#contact" onclick="remove(dropdown, 2)">Contact Us</a>
                                <a class="dropNavItem" href="./MARSnews.html" onclick="remove(dropdown, 2)">News</a>
                            `
        document.querySelector('.nav').appendChild(dropNav)
        setTimeout(() => {
            dropNav.style.right = '0%'
        }, 100);
    } else {
        dropdown.innerH = '<i class="fa-solid fa-angle-down"></i>';
        document.querySelector('.dropdownNav').style.right = '-100%'
        setTimeout(() => {
            document.querySelector('.nav').removeChild(document.querySelector('.dropdownNav'))
        }, 500);
    }
})

function remove(dropdown, alpha) {
    if (alpha !== 1) {
        dropdown.innerText = 'D';
        document.querySelector('.dropdownNav').style.right = '-100%'
        setTimeout(() => {
            document.querySelector('.nav').removeChild(document.querySelector('.dropdownNav'))
        }, 500);
    } else {
        dropdown.innerText = dropdown.innerText
        document.querySelector('.slideInNav').style.left = '-100%'
        setTimeout(() => {
            document.querySelector('.nav').removeChild(slideNav)
            num = 0;
        }, 500);
    }
}



function getRandomValues(len) {
    let rand = Math.floor(Math.random() * len);
    return rand;
}


let progress = document.querySelectorAll('.progress-bar')






document.querySelector('.overBack').addEventListener('click', ()=>{
    let pie = document.querySelector('.pie')
    document.querySelector('.paperContainer').querySelector('.overAll').style.cssText = 'animation: fadeOut .8s';
    setTimeout(() => {
        document.querySelector('.paperContainer').style.display = 'none'
        document.querySelector('.paperContainer').querySelector('.overAll').style.animation = ''
        CTotal.removeChild(pie)
    }, 800);
})


function scores() {
    document.querySelector('.paperContainer').style.display = 'flex'
    progress.forEach((prog)=>{
        prog.querySelector('div').style.width = '0%';
        prog.querySelector('div').style.transition = 'all ease 1s';
    })
    let sum = 25;
    let lost = getRandomValues(sum);
    var temp = sum - lost;
    let third = getRandomValues(temp);
    temp = temp - third;
    let second = getRandomValues(temp);
    temp = temp - second;
    let won = getRandomValues(temp);
    temp = (sum) - (won + second + third + lost);
    let miss = temp;
    // console.log(won, second, third, lost);

    let total = (((won*5) + (second*4) + (third*3) + (lost*1))/125) * 100;
    let _won = ((won)/25) * 100
    let _second = ((second)/25) * 100
    let _third = ((third)/25) * 100
    let _lost = ((lost)/25) * 100
    let _missed = ((miss)/25) * 100

    // console.log(total);
    // console.log(_won, _second, _third, _lost);

    document.querySelectorAll('.p-words').forEach(word=>{
        // console.log(Array.from(document.querySelectorAll('.p-words')).indexOf(word));
        if (Array.from(document.querySelectorAll('.p-words')).indexOf(word) == 0) {
            word.querySelector('.num').innerHTML = won;
            word.querySelector('.total').innerHTML = sum;
        } else if (Array.from(document.querySelectorAll('.p-words')).indexOf(word) == 1) {
            word.querySelector('.num').innerHTML = second;
            word.querySelector('.total').innerHTML = sum; 
        } else if (Array.from(document.querySelectorAll('.p-words')).indexOf(word) == 2) {
            word.querySelector('.num').innerHTML = third;
            word.querySelector('.total').innerHTML = sum; 
        } else if (Array.from(document.querySelectorAll('.p-words')).indexOf(word) == 3) {
            word.querySelector('.num').innerHTML = lost;
            word.querySelector('.total').innerHTML = sum; 
        }
    })
    document.querySelector('.paragraph').querySelector('.num').innerHTML = miss;
    document.querySelector('.paragraph').querySelector('.total').innerHTML = sum;

    setTimeout(() => {
        CWon.style.width = `${_won}%`;
        CWon.querySelector('span').innerHTML = `${_won.toFixed(1)}%`;
        CSecond.style.width = `${_second}%`;
        CSecond.querySelector('span').innerHTML = `${_second.toFixed(1)}%`;
        CThird.style.width = `${_third}%`;
        CThird.querySelector('span').innerHTML = `${_third.toFixed(1)}%`;
        CLost.style.width = `${_lost}%`;
        CLost.querySelector('span').innerHTML = `${_lost.toFixed(1)}%`;
        CMissed.innerHTML = `${_missed.toFixed(1)}%`;
    }, 800);
    // console.log(CMissed);

    let pie = document.createElement('div')
    pie.classList.add('pie')
    pie.classList.add('animate')
    pie.style.cssText = `--p:${total}; --c: lightgreen; --b: 15px`;
    pie.innerHTML = `${total.toFixed(1)}`

    CTotal.prepend(pie);
    checking(_won, _second, _third, total, pie);
}
// scores()

function checking(_won, _second, _third, total, pie) {
    progress.forEach((prog)=>{
        let pory = prog.querySelector('div')
        if (pory.classList.contains('lost') == false) {
            if (pory.classList.contains('won')) {
                if (_won >= 50) {
                    pory.style.backgroundColor = 'lightgreen';
                    pory.querySelector('span').style.border = '1px solid lightgreen';
                    pory.querySelector('span').style.color = 'lightgreen';
                } else if (_won >= 20) {
                    pory.style.backgroundColor = 'lemonchiffon';
                    pory.querySelector('span').style.border = '1px solid lemonchiffon';
                    pory.querySelector('span').style.color = 'lemonchiffon';
                } else {
                    pory.style.backgroundColor = 'lightcoral';
                    pory.querySelector('span').style.border = '1px solid lightcoral'
                    pory.querySelector('span').style.color = 'lightcoral';
                }
            }
            if (pory.classList.contains('second')) {
                if (_second >= 50) {
                    pory.style.backgroundColor = 'lightgreen';
                    pory.querySelector('span').style.border = '1px solid lightgreen';
                    pory.querySelector('span').style.color = 'lightgreen';
                } else if (_second >= 20) {
                    pory.style.backgroundColor = 'lemonchiffon';
                    pory.querySelector('span').style.border = '1px solid lemonchiffon';
                    pory.querySelector('span').style.color = 'lemonchiffon';
                } else {
                    pory.style.backgroundColor = 'lightcoral';
                    pory.querySelector('span').style.border = '1px solid lightcoral'
                    pory.querySelector('span').style.color = 'lightcoral';
                }
            }
            if (pory.classList.contains('third')) {
                if (_third >= 50) {
                    pory.style.backgroundColor = 'lightgreen';
                    pory.querySelector('span').style.border = '1px solid lightgreen';
                    pory.querySelector('span').style.color = 'lightgreen';
                } else if (_third >= 20) {
                    pory.style.backgroundColor = 'lemonchiffon';
                    pory.querySelector('span').style.border = '1px solid lemonchiffon';
                    pory.querySelector('span').style.color = 'lemonchiffon';
                } else {
                    pory.style.backgroundColor = 'lightcoral';
                    pory.querySelector('span').style.border = '1px solid lightcoral'
                    pory.querySelector('span').style.color = 'lightcoral';
                }
            }
        } else {
            pory.style.backgroundColor = 'white';
            pory.querySelector('span').style.border = '1px solid white'
            pory.querySelector('span').style.color = 'white';
        }
    })
    if (total >=50) {
        pie.style.cssText = `--p:${total}; --c: lightgreen; --b: 15px; color: lightgreen`;
        CNote.innerHTML  = 'Your performance is impressive. Keep it up!';
    } else if (total >= 20) {
        pie.style.cssText = `--p:${total}; --c: lemonchiffon; --b: 15px; color: lemonchiffon`;
        CNote.innerHTML  = "You're not bad but you could be better. Keep on pushing!";
    } else {
        pie.style.cssText = `--p:${total}; --c: lightcoral; --b: 15px; color: lightcoral`;
        CNote.innerHTML  = 'This performance is poor. Try to get your grades up!';
    }
}

let bars = document.querySelectorAll('.bar')
bars.forEach((bar)=>{
    bar.addEventListener('click', (e)=>{
        if (e.target.parentElement.className == 'bar') {
            if (e.target.parentElement.children[1].style.display == 'none') {
                document.querySelectorAll('.p-words')[0].style.cssText = 'opacity: 0; top: -100%; display: none';
                document.querySelectorAll('.p-words')[1].style.cssText = 'opacity: 0; top: -100%; display: none';
                document.querySelectorAll('.p-words')[2].style.cssText = 'opacity: 0; top: -100%; display: none';
                document.querySelectorAll('.p-words')[3].style.cssText = 'opacity: 0; top: -100%; display: none';
                document.querySelector('.paragraph').style.opacity = 0.4;

                e.target.parentElement.children[1].style.cssText = 'display: block; z-index: +100;';
                setTimeout(() => {
                    e.target.parentElement.children[1].style.opacity = '1';
                    e.target.parentElement.children[1].style.top = '100%';
                }, 800);
            } else {
                if (e.target.parentElement.children[1].children[1].style.display == 'none' ) {
                    document.querySelectorAll('.p-words')[0].style.cssText = 'opacity: 0; top: -100%; display: none';
                    document.querySelectorAll('.p-words')[1].style.cssText = 'opacity: 0; top: -100%; display: none';
                    document.querySelectorAll('.p-words')[2].style.cssText = 'opacity: 0; top: -100%; display: none';
                    document.querySelectorAll('.p-words')[3].style.cssText = 'opacity: 0; top: -100%; display: none';
                    document.querySelector('.paragraph').style.opacity = 0.4;

                    e.target.parentElement.children[1].children[1].style.cssText = 'display: block; z-index: +100;';
                    setTimeout(() => {
                        e.target.parentElement.children[1].children[1].style.opacity = '1';
                        e.target.parentElement.children[1].children[1].style.top = '100%';
                    }, 800);
                    
                } else {
                    e.target.parentElement.children[1].children[1].style.opacity = '0';
                    e.target.parentElement.children[1].children[1].style.top = '-100%';
                    e.target.parentElement.children[1].children[1].style.display = 'none';
                    document.querySelector('.paragraph').style.opacity = 1
                }
            }
        } else if(e.target.parentElement.className == 'barsContainer') {
            if (e.target.children[1].children[1].style.display == 'none' ) {
                document.querySelectorAll('.p-words')[0].style.cssText = 'opacity: 0; top: -100%; display: none';
                document.querySelectorAll('.p-words')[1].style.cssText = 'opacity: 0; top: -100%; display: none';
                document.querySelectorAll('.p-words')[2].style.cssText = 'opacity: 0; top: -100%; display: none';
                document.querySelectorAll('.p-words')[3].style.cssText = 'opacity: 0; top: -100%; display: none';
                document.querySelector('.paragraph').style.opacity = 0.4;
                
                e.target.children[1].children[1].style.cssText = 'display: block; z-index: +100;';
                setTimeout(() => {
                    e.target.children[1].children[1].style.opacity = '1';
                    e.target.children[1].children[1].style.top = '100%';
                }, 800);
                
            } else {
                e.target.children[1].children[1].style.opacity = '0';
                e.target.children[1].children[1].style.top = '-100%';
                e.target.children[1].children[1].style.display = 'none';
                document.querySelector('.paragraph').style.opacity = 1
            }
        }
    })
})