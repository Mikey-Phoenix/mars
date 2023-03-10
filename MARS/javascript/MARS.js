

    const hero = document.querySelector('#hero');
    const opening = document.querySelector('.opening-words');

    (()=>{
        opening.style.opacity = 0
        document.getElementsByClassName('login')[0].style.opacity = 0
        document.getElementsByClassName('login')[1].style.opacity = 0
        setTimeout(() => {
            opening.style.opacity = 1
        }, 2000);
        setTimeout(() => {
            hero.style.transition = 'all ease 3s'
            hero.style.backgroundImage = "url('../images/star-background.jpg')"
            document.getElementsByClassName('login')[1].style.opacity = 1
            document.getElementsByClassName('login')[0].style.opacity = 1
        }, 3000);
    })();

    localStorage.setItem('logOrSign', 'log');
    // console.log(localStorage.getItem('logOrSign'));

    function logging(swit) {
        localStorage.setItem('logOrSign', swit)
    }
// 628
// 892
// 2104
    window.addEventListener('scroll', ()=>{
        const scrolled = window.scrollY;
        // console.log(scrolled);
        const nav = document.querySelector('.nav');
        if (scrolled >= 628) {
            nav.style.position = 'fixed';
            nav.style.backgroundColor = 'rgb(54, 55, 58)';
            document.querySelectorAll('.navingLinks').forEach((link)=>{
                link.style.display = 'inline'
            })
            document.querySelectorAll('.navingLinks').forEach((link)=>{
                link.classList.remove('active-page')
            })
            document.querySelectorAll('.navingLinks')[1].classList.add('active-page')
            if (scrolled >= 885) {
                document.querySelectorAll('.navingLinks').forEach((link)=>{
                    link.classList.remove('active-page')
                })
                document.querySelectorAll('.navingLinks')[0].classList.add('active-page')
            }
            if (scrolled >= 3942) {
                document.querySelectorAll('.navingLinks').forEach((link)=>{
                    link.classList.remove('active-page')
                })
                document.querySelectorAll('.navingLinks')[2].classList.add('active-page')
            }
        } else {
            nav.style.position = 'relative';
            nav.style.backgroundColor = 'transparent'
            document.querySelectorAll('.navingLinks').forEach((link)=>{
                link.style.display = 'none'
            })
        }
       
    })

    window.addEventListener('load', ()=>{
        document.querySelector('.preloader').style.display = 'none'
    })


    const offers = Array.from(document.querySelectorAll('.offer'));
    const offerImages = Array.from(document.querySelectorAll('.offerImage'));
    const ofImgOne = document.querySelector('#offerImageOne')
    const ofImgTwo = document.querySelector('#offerImageTwo')
    const ofImgThree = document.querySelector('#offerImageThree')
    const ofImgFour = document.querySelector('#offerImageFour')


    let index = 0;
    let textOne = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor magnam deleniti officiis, eveniet culpa repellendus maiores sed error ullam perspiciatis suscipit, alias praesentium eos, quas incidunt. Ratione, saepe eum!"
    let textTwo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor magnam deleniti officiis, eveniet culpa repellendus maiores sed error ullam perspiciatis suscipit, alias praesentium eos, quas incidunt. Ratione, saepe eum!"
    let textThree = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor magnam deleniti officiis, eveniet culpa repellendus maiores sed error ullam perspiciatis suscipit, alias praesentium eos, quas incidunt. Ratione, saepe eum!"
    let textFour = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor magnam deleniti officiis, eveniet culpa repellendus maiores sed error ullam perspiciatis suscipit, alias praesentium eos, quas incidunt. Ratione, saepe eum!"

    let indexOne = 0;
    let indexTwo = 0;
    let indexThree = 0;
    let     indexFour = 0;

    function typingOne() {
        if (indexOne < textOne.length) {
            document.querySelector('.content-one').innerHTML += textOne.charAt(indexOne)
            indexOne++;
            setTimeout(typingOne, 50);
        }
    }
    function typingTwo() {
        if (indexTwo < textTwo.length) {
            document.querySelector('.content-two').innerHTML += textTwo.charAt(indexTwo)
            indexTwo++;
            setTimeout(typingTwo, 50);
        }
    }
    function typingThree() {
        if (indexThree < textThree.length) {
            document.querySelector('.content-three').innerHTML += textThree.charAt(indexThree)
            indexThree++;
            setTimeout(typingThree, 50);
        }
    }
    function typingFour() {
        if (indexFour < textFour.length) {
            document.querySelector('.content-four').innerHTML += textFour.charAt(indexFour)
            indexFour++;
            setTimeout(typingFour, 50);
        }
    }

    offers.forEach((offer)=>{
        offer.addEventListener('click', (e)=>{
            if (e.path[0].classList.contains('offer')) {
                offer.style.backgroundImage = 'url(./images/veh.jpg)'
                console.log(e);
                if (e.target.children[1].innerHTML == 'Live WhatsApp group') {
                    if (window.innerWidth < 760) {
                        // console.log('small');
                        e.target.children[1].style.cssText = 'font-size: 25px; transform: translateY(-300%) !important;'
                    }
                } else{
                    e.target.children[1].style.cssText = 'font-size: 25px; transform: translateY(0%)'
                }
                setTimeout(() => {
                    e.target.children[3].style.opacity = 1
                    console.log(e.target.children[3].children[0].classList);
                    let vah = e.target.children[3].children[0];
                    console.log(vah);
                }, 500);
                if (e.target.children[1].innerText == 'Showcase your talents') {
                   typingOne();
                    offerImages.forEach((ofImg)=>{
                        ofImg.style.backgroundImage = 'linear-gradient( rgba(44, 44, 44, 0.329), rgba(44, 44, 44, 0.651))'
                    })
                    ofImgOne.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.329), rgba(0, 0, 0, 0.651))'
                } else if (e.target.children[1].innerText == 'Voice and Sound Coaching') {
                   typingTwo();
                    offerImages.forEach((ofImg)=>{
                        ofImg.style.backgroundImage = 'linear-gradient( rgba(44, 44, 44, 0.329), rgba(44, 44, 44, 0.651))'
                    })
                    ofImgTwo.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.329), rgba(0, 0, 0, 0.651))'
                    
                } else if (e.target.children[1].innerText == 'Fun Challenges') {
                   typingThree();
                    offerImages.forEach((ofImg)=>{
                        ofImg.style.backgroundImage = 'linear-gradient( rgba(44, 44, 44, 0.329), rgba(44, 44, 44, 0.651))'
                    })
                    ofImgThree.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.329), rgba(0, 0, 0, 0.651))'
                    
                } else {
                   typingFour();
                    offerImages.forEach((ofImg)=>{
                        ofImg.style.backgroundImage = 'linear-gradient( rgba(44, 44, 44, 0.329), rgba(44, 44, 44, 0.651))'
                    })
                    ofImgFour.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.329), rgba(0, 0, 0, 0.651))'

                }
            } else if (e.path[0].classList.contains('offer-details')) {
                offer.style.backgroundImage = 'url(./images/veh.jpg)'
                e.path[1].children[1].style.cssText = 'font-size: 25px; transform: translateY(0%)'
                setTimeout(() => {
                    e.path[0].style.opacity = 1
                    console.log(e.path[0].children[0].classList);
                }, 500);
                if (e.path[1].children[1].innerText == 'Showcase your talents') {
                   typingOne();
                    offerImages.forEach((ofImg)=>{
                        ofImg.style.backgroundImage = 'linear-gradient( rgba(44, 44, 44, 0.329), rgba(44, 44, 44, 0.651))'
                    })
                    ofImgOne.style.backgroundImage = 'linear-gradient( rgba(10, 10, 10, 0.329), rgba(44, 44, 44, 0.651))'
                } else if (e.path[1].children[1].innerText == 'Voice and Sound Coaching') {
                   typingTwo();
                    offerImages.forEach((ofImg)=>{
                        ofImg.style.backgroundImage = 'linear-gradient( rgba(44, 44, 44, 0.329), rgba(44, 44, 44, 0.651))'
                    })
                    ofImgTwo.style.backgroundImage = 'linear-gradient( rgba(10, 10, 10, 0.329), rgba(44, 44, 44, 0.651))'
                    
                } else if (e.path[1].children[1].innerText == 'Fun Challenges') {
                   typingThree();
                    offerImages.forEach((ofImg)=>{
                        ofImg.style.backgroundImage = 'linear-gradient( rgba(44, 44, 44, 0.329), rgba(44, 44, 44, 0.651))'
                    })
                    ofImgThree.style.backgroundImage = 'linear-gradient( rgba(10, 10, 10, 0.329), rgba(44, 44, 44, 0.651))'
                    
                } else {
                   typingFour();
                    offerImages.forEach((ofImg)=>{
                        ofImg.style.backgroundImage = 'linear-gradient( rgba(44, 44, 44, 0.329), rgba(44, 44, 44, 0.651))'
                    })
                    ofImgFour.style.backgroundImage = 'linear-gradient( rgba(10, 10, 10, 0.329), rgba(44, 44, 44, 0.651))'

                }
            } else{
                console.log(e);
            }
        })
    })

    // function widthCheck() {
    //     window.innerWidth < 700
    //     ? ()
    //     : (console.log(larger));
    // };
    // widthCheck();

    const overAll = document.querySelector('.overAllContainer')
    const overAllHead = document.querySelector('.overAllHeading')
    const overAllDetails = document.querySelector('.overAllDetails')
    const overAllUpper = document.querySelector('.upperimg')
    const overAllLower = document.querySelector('.lowerimg')

    const one = ['../images/talents.jpg', '../images/talents.jpg'];
    const two = ['../images/mic.jpg', '../images/mic.jpg'];
    const three = ['../images/fun.jpg', '../images/fun.jpg'];
    const four = ['../images/whatsaap-resized.jpg', '../images/whatsaap-resized.jpg'];

    function displayer(group, pic, text) {
        let flask = Array.from(document.querySelectorAll('.offer'))
        flask.forEach((flak)=>{
            if (flak.querySelector('.offer-title').innerHTML == group) {
                let head = flak.querySelector('.offer-title').innerHTML;
                overAll.querySelector('.overAll').style.animation = 'fadeIn .8s'
                overAll.style.display = 'flex';
                overAllHead.innerHTML = head;
                overAllDetails.innerHTML = text;
                overAllUpper.src = pic[1];
                overAllLower.src = pic[0];
            }
        })
    }

    document.querySelector('.back').addEventListener('click', ()=>{
        overAll.querySelector('.overAll').style.cssText = 'animation: fadeOut .8s'
        setTimeout(() => {
            overAll.style.display = 'none'
            overAll.querySelector('.overAll').style.animation = ''
        }, 800);
    })

    function getRandomValues(len) {
        let rand = Math.floor(Math.random() * len);
        return rand;
    }
    const toping = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
    const lefting = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
    const lights = Array.from(document.querySelectorAll('.light'));

    function glow() {
        lights.forEach((light)=>{
            light.style.opacity = 0
            setTimeout(() => {
                if (light.style.opacity == 0) {
                    light.style.opacity = 1
                }
            }, 500);
            setTimeout(() => {
                random(light)
            }, 500);
        })
    }
    glow();

    function random(light) {
        setInterval(() => {
            let a = getRandomValues(toping.length);
            let b = getRandomValues(lefting.length);
            if (light.style.left == '0%') {
                light.style.transition = 'transition: all ease-in-out 1s;'
                light.style.cssText = `position: absolute; top: ${toping[a]}%; left: ${lefting[b]}%;transition: all ease-in-out 1s;`
            } else {
                light.style.transition = 'transition: all ease-in-out 1s;'
                light.style.cssText = `position: absolute; top: ${toping[a]}%; right: ${lefting[b]}%;transition: all ease-in-out 1s;`
            }
        }, 800);
        
    }

    const comments = Array.from(document.querySelectorAll('.commentWordsInner'))
let copyOne = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus dicta nihil consequatur distinctio eveniet voluptas illum esse aliquid, alias nostrum laborum possimus. Culpa, reprehenderit libero nisi ut tenetur nam.";
let copyTwo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus dicta nihil consequatur distinctio eveniet voluptas illum esse aliquid, alias nostrum laborum possimus. Culpa, reprehenderit libero nisi ut tenetur nam.";
let copyThree = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus dicta nihil consequatur distinctio eveniet voluptas illum esse aliquid, alias nostrum laborum possimus. Culpa, reprehenderit libero nisi ut tenetur nam.";
let copyFour = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus dicta nihil consequatur distinctio eveniet voluptas illum esse aliquid, alias nostrum laborum possimus. Culpa, reprehenderit libero nisi ut tenetur nam.";

function checking() {
    comments.forEach((comment)=>{
        if (comment.classList.contains('one')) {
            for (let vera = 0; vera <= 100; vera++) {
                comment.innerHTML += copyOne.charAt(vera);
            }
        } else if (comment.classList.contains('two')) {
            for (let vera = 0; vera <= 100; vera++) {
                comment.innerHTML += copyTwo.charAt(vera);
            }
        } else if (comment.classList.contains('three')) {
            for (let vera = 0; vera <= 100; vera++) {
                comment.innerHTML += copyThree.charAt(vera);
            }
        } else {
            for (let vera = 0; vera <= 100; vera++) {
                comment.innerHTML += copyFour.charAt(vera);
            }
        }
    })
}
checking(); 

const reads = Array.from(document.querySelectorAll('.readMore'));

function reading(a, copy) {
    overAll.style.height = '130vh'
    if (reads[a].innerHTML == '...Read More') {
        for (let berra = 101; berra < copy.length; berra++) {
            comments[a].innerHTML += copy.charAt(berra);
            reads[a].innerHTML = '...Read Less'
            comments.forEach((comment)=>{
                if (comments.indexOf(comment) !== a) {
                    let rad = comments.indexOf(comment);
                    comment.innerHTML = ''
                    for (let berra = 0; berra <= 100; berra++) {
                        comment.innerHTML += copy.charAt(berra)
                    }
                    reads[rad].innerHTML = '...Read More'
                }
            })
        }
    } else {
        comments[a].innerHTML = ''
        for (let berra = 0; berra <= 100; berra++) {
            comments[a].innerHTML += copy.charAt(berra)
        }
        reads[a].innerHTML = '...Read More'
    }
    
}
    
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