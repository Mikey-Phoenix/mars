const firebaseConfig = {
    apiKey: "AIzaSyDt13Yv-ZluxRqGlg_bh8PfoC7Ve2GoatU",
    authDomain: "marsdb-3ac40.firebaseapp.com",
    databaseURL: "https://marsdb-3ac40-default-rtdb.firebaseio.com",
    projectId: "marsdb-3ac40",
    storageBucket: "marsdb-3ac40.appspot.com",
    messagingSenderId: "107513275301",
    appId: "1:107513275301:web:7972e3a875d58752c87e4c",
    measurementId: "G-XHZ3Z9NSZC"
};



const body = document.querySelector('body');
const formContainer = document.querySelector('.formContainer');
const sheet = document.querySelector('.sheet');

const id = document.querySelector('#ID');
const password = document.querySelector('#password');

const suspend = document.querySelector('.suspended');
const incorrect = document.querySelector('.incorrect');
const tries = document.querySelector('.number');

const see = document.querySelector('form').querySelector('i');

const forgot = document.querySelector('.forgot');
const signUp = document.querySelector('.sign');
const complaint = document.querySelector('.complaint');

const opening = document.querySelector('.title');
// const form = document.querySelector('.sheet');
const inputs = document.querySelectorAll('form')[1];


let nameIndex = 0;
let firstname;
let middlename;
let lasttname;



// initializefirebase
firebase.initializeApp(firebaseConfig);

// reference database
var marsDB = firebase.database().ref('marsDb')

// const database = firebase.database();

// console.log(database);

document.querySelector('#signUpform').addEventListener('submit', (e)=>{
    e.preventDefault();


    const fullname = document.querySelector('#fullname');
    const email = document.querySelector('#email');
    const date = document.querySelector('#date');
    // const female = document.querySelector('#female');
    // const male = document.querySelector('#male');
    // const other = document.querySelector('#other');

    saveUser(fullname, email, date)


    // database.ref('/users/' + 'STUD1001').set({
    //     firstName: fullname.value,
    //     email: email.value,
    //     age: 17,
    //     gender: 'male',
    //     challengeWon: 0,
    //     challengeLost: 0,
    //     challengeMissed: 0,
    //     firstrunner: 0,
    //     secondrunner: 0,
    //     status: 'active',
    //     profilepic: '../images/profile.jpg',
    //     password: 1001,
    // })
})

const saveUser = (fullname, email, date) =>{
    var newUser = marsDB.push();

    newUser.set({
        fullname : fullname,
        email : email,
        date : date,
    });
    console.log('submit');
}

function seperateName() {
    if (nameIndex < fullname.length) {
        if (fullname.charAt(nameIndex) !== ' ') {
            firstname += fullname.charAt(nameIndex);
            nameIndex++
        } else {
            
        }

    }
}

let showed = 0;


     (()=>{
        if (showed == 0) {
            formContainer.style.opacity = 0;
            if (localStorage.getItem('logOrSign') == 'log') {
                setTimeout(() => {
                    formContainer.style.opacity = 1;
                }, 500);
            } else {
                setTimeout(() => {
                    formContainer.style.display = 'none';
                    sheet.style.display = 'flex';
                    setTimeout(() => {
                        sheet.style.opacity = 1;
                    }, 1000);
                }, 800);
            }
            setTimeout(() => {
                body.style.transition = 'all ease 3s';
                body.style.backgroundImage = "url('../images/star-background.jpg')";
            }, 500);
            showed++;
        } else {
            formContainer.style.opacity = 1;
            body.style.backgroundImage = "url('../images/star-background.jpg')";
        }
    })();
// })

function showme() {
    let check = Array.from(document.querySelectorAll('.gender-container'));
    check.forEach(che=>{
        console.log(che.querySelector('input').value);
        console.log(che.querySelector('label').innerText);
    })
}



let success = 0;
let number = 0;

see.addEventListener('click', (e)=>{
    if (see.classList.contains('fa-eye')) {
        password.type = 'password'
        see.classList.remove('fa-eye');
        see.classList.add('fa-eye-slash');
    } else {
        password.type = 'text'
        see.classList.add('fa-eye');
        see.classList.remove('fa-eye-slash');
    }
})

// 68089206-b6a8-47c1-8641-d9c48249ef30

var valer = '';
var baller = '';
var tChala = '';
let vacuum = [];

const dater = new Date();

// console.log(dater.getDate());

function dating() {
    const day = dater.getDate()
    const month = dater.getMonth();
    const year = dater.getFullYear();
    const hour = dater.getHours();
    baller = day + 1;
    valer = month + 1;
    tChala = year + 1;
    valkyrie = hour + 1;
    vacuum.push(baller)
    vacuum.push(valer)
    vacuum.push(tChala)
    vacuum.push(valkyrie)
    return vacuum
}

// localStorage.setItem('time', endDate)
// localStorage.removeItem('time')
// (()=>{
//     if (localStorage.getItem('time') == true) {
        
//     }
// })()
// console.log(endDate);


// localStorage.setItem('time', '0')

function clicked() {
    console.log(password.value);
    console.log(id.value);
    fetch('../javascript/studentStorage.json').then(res => res.json()).then(data=>{
        success = 0;
        for (let i = 0; i < data.length; i++) {
            if (number < 5) {
                if (data[i].id == id.value) {
                    if (data[i].password == password.value) {
                        document.querySelector('.successContainer').style.display = 'flex';
                        document.querySelector('.success').style.opacity = 0;
                        document.querySelector('.success').style.animation = 'fadeDown .8s';
                        setTimeout(() => {
                            document.querySelector('.success').style.animation = '';
                        }, 800);
                        document.querySelector('.success').style.opacity = 1;
                        document.querySelector('.successMessage').querySelector('span').innerHTML = data[i].nickname;
                        let varrying = data[i]
                        localStorage.setItem('person-details', JSON.stringify(varrying))
                        console.log(JSON.parse(localStorage.getItem('person-details')));
                        success++;
                    } else {
                        console.log('incorrect password');
                        password.value = '';
                        success = success + 2;
                        see.style.top = '37%'
                        number++;
                        incorrect.style.display = 'block';
                        tries.innerHTML = 5 - number;
                        console.log(number);
                        if (number == 5) {
                            see.style.top = '64%'
                            suspend.style.display = 'block';
                            let endDate = dating();
                            localStorage.setItem('time', endDate)
                            setInterval(() => {
                                checker();
                            }, 200);
                            document.querySelector('.submit').style.display = 'none';
                            // setTimeout(() => {
                                //     suspend.style.display = 'none';
                                //     document.querySelector('.submit').style.display = 'block';
                                //     id.value = '';
                            //     password.value = '';
                            // }, 86400000);
                            // 86400000
                            incorrect.style.display = 'none';
                            console.log('This account is locked');
                        }
                    }
                } else {
                    if (i == (data.length-1)) {
                        // console.log(i, data.length);
                        if (success == 0) {
                            console.log('This ID does not exist');
                        } else if (success == 2) {
                            console.log('');
                        }
                    }
                }
            } else {
                console.log('This account is locked');
            }
        }
        // console.log(data);
    })
}

function checker() {
    if (localStorage.getItem('time') == true || localStorage.getItem('time') !== '0') {
        let variying = localStorage.getItem('time')
        let tempCont = Array.from(variying)
        console.log(tempCont);
        let numberOne = parseInt(tempCont[0] + tempCont[1])
        let numberTwo = parseInt(tempCont[3] + tempCont[4])
        let numberThree = parseInt(tempCont[6] + tempCont[7])
        let numberFour = parseInt(tempCont[9] + tempCont[10])
        if (((dater.getDate() == numberOne) && (dater.getHours == numberFour)) || (dater.getMonth() == numberTwo && (dater.getHours == numberFour)) || (dater.getFullYear == numberThree && (dater.getHours == numberFour))) {
            console.log('Your time has ended');
            localStorage.setItem('time', '0')
            suspend.style.display = 'none'
            document.querySelector('.submit').style.display = 'none';
        } else {
            console.log('not yet');
            suspend.style.display = 'block'
            document.querySelector('.submit').style.display = 'none';
        }
    } else{
        console.log('not yet');
        suspend.style.display = 'none'
        document.querySelector('.submit').style.display = 'block';
    }
}
setInterval(() => {
    checker();
}, 200);

document.querySelectorAll('.submit')[0].addEventListener('click', (e)=>{
    e.preventDefault();
    clicked();
})


function sendRequest() {
    Email.send({
        SecureToken : "91342148-2c27-4472-9793-8643084cd19d",
        To : 'bajomichael06@gmail.com',
        From : complaint.value,
        Subject : "This Idividual forgot his MARS log in password",
        Body : `Student ID: ${id.value};    Email Address: ${complaint.value}`
    }).then(
      message => alert(message)
    );
}

document.querySelectorAll('.submit')[1].addEventListener('click', (e)=>{
    e.preventDefault();
    sendRequest();
})

forgot.addEventListener('click', ()=>{
    complaint.style.display = 'block';
    suspend.innerHTML = 'Type in your Email and student ID to request a change of password';
    suspend.style.color = 'rgb(55, 55, 58)';
    suspend.style.display = 'block';
    document.querySelectorAll('.submit')[1].style.display = 'block';
    password.style.display = 'none';
    document.querySelectorAll('.submit')[0].style.display = 'none';
    see.style.display = 'none';
    forgot.style.display = 'none';
    signUp.style.display = 'block';
})
sheet.style.display = 'none';
signUp.addEventListener('click', ()=>{
    formContainer.style.opacity = 0;
    setTimeout(() => {
        formContainer.style.display = 'none';
        sheet.style.display = 'flex';
        inputs.style.display = 'none';
        document.querySelector('.signOptions').querySelectorAll('button').forEach((option)=>{
            option.style.display = 'block';
        })
        document.querySelector('.grey').style.display = 'block';
        setTimeout(() => {
            sheet.style.opacity = 1;
        }, 1000);
    }, 800);
})
const logger = document.querySelector('.logger');
logger.addEventListener('click',()=>{
    sheet.style.cssText = 'animation: counter-fadeLeft .8s;';
    opening.style.animation = 'counter-fadeRight .8s';
    setTimeout(() => {
        sheet.style.opacity = 0;
        sheet.style.animation = '';
        opening.style.opacity = 0;
        opening.style.animation = '';
        formContainer.style.display =  'flex';
        setTimeout(() => {
            opening.style.display = 'none';
            sheet.style.display = 'none';
            formContainer.style.opacity =  1;
        }, 100);
    }, 800);
})

const manual = document.querySelector('.signOptions').querySelectorAll('button')[0];

manual.addEventListener('click',()=>{
    sheet.style.opacity = 1;
    sheet.style.display = 'flex';
    sheet.style.cssText = 'animation: fadeOut .8s;'
    setTimeout(() => {
        sheet.style.animation = '';
    }, 800);
    setTimeout(() => {
        inputs.style.display = 'block'
        sheet.style.cssText = 'right: -680px'
        opening.style.display = 'block'
        sheet.style.cssText = 'opacity: 0; animation: fadeRight .8s; opacity: 1; right: 0px;'
        opening.style.opacity = '0'
        opening.style.animation = 'fadeLeft .8s'
        setTimeout(() => {
            opening.style.animation = ''
            opening.style.opacity = '1'
            opening.style.left = '0px'
            sheet.style.animation = '';
        }, 800);
        document.querySelector('.signOptions').querySelectorAll('button').forEach((option)=>{
            option.style.display = 'none';
        })
        document.querySelector('.grey').style.display = 'none';
    }, 900);
})

showme();