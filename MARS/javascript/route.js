var app = angular.module("routeApp", ["ngRoute"]);

const main = document.querySelector('.block');

app.config(function ($routeProvider) {
  $routeProvider
    .when("/profile", {
      templateUrl: "admins/profile.html",
    })
    .when("/activities", {
      templateUrl: "admins/activities.html",
    })
    .when("/students", {
      templateUrl: "admins/students.html",
    })
    .when("/comments", {
      templateUrl: "admins/comments.html",
    })
    .when("/challenges", {
      templateUrl: "admins/challenges.html",
    })
    .when("/news",{
      templateUrl: "admins/news.html"
    })
    .otherwise({
      templateUrl: "admins/profile.html"
    });
});



    app.controller("routeController", function ($scope, $http) {
      $scope.dropdown = function () {
        if ($scope.class == "remove") {
          $scope.class = "";
        } else {
          $scope.class = "remove";
        }
      };
      $http.get('../javascript/studentStorage.json').then(function(response) {
        console.log(response.data);
          $scope.students = response.data;
          console.log("debug");
      });
    });

    window.addEventListener('load', ()=>{
      document.querySelector('.preloader').style.display = 'none'
  })

    function logger() {
      let casts = Array.from(document.querySelector('ng-view').querySelector('.container').querySelectorAll('.student-cast'));
      casts.forEach((cast)=>{
        cast.addEventListener('click', (e)=>{
          console.log(e.target.parentElement.children[1].innerHTML);
          document.querySelector('main').style.display = 'none';
          document.querySelector('.title').style.display = 'none';
          document.querySelector('.searchtab').style.display = 'none';
          document.querySelector('ng-view').querySelector('.container').querySelector('#' + e.target.parentElement.children[1].innerHTML).style.display = "block";
          document.querySelector('ng-view').querySelector('.container').querySelector('#' + e.target.parentElement.children[1].innerHTML).style.opacity = "1";
        })
      })
    }

    function cancel() {
      let views = document.querySelectorAll('.student-view');
      views.forEach(view =>{
        view.style.display = 'none';
      })
      document.querySelector('main').style.display = 'grid';
      document.querySelector('.title').style.display = 'block';
    }


    function adminDisplay() {
      document.querySelector('#profile-section').style.display = 'block';
      document.querySelector('main').style.display = 'none';
      document.querySelector('.quickMenu').style.display = 'none';
    }
    function closeAdmin() {
      document.querySelector('#profile-section').style.display = 'none';
      document.querySelector('.quickMenu').style.display = 'flex';
      document.querySelector('main').style.display = 'grid';
    }

    function dropStuff(index) {
      document.querySelectorAll('.editItem').forEach(edit=>{
        edit.querySelector('p').style.height = '0px';
      })
      let drop = document.querySelectorAll('.editItem').item(index).querySelector('p');
      if (drop.style.height == '0px') {
        drop.style.height = 'max-content';
        console.log(drop.style.height);
      } else if (drop.style.height == 'max-content') {
        drop.style.height = '0px';
        console.log(drop);
      }
    }


    function valueOne() {
      console.log('value');
      let color = document.querySelector('#font-color').value;
      let input = document.querySelector('.inner-grid').querySelector('h1').querySelector('input');
      input.style.color = color;
      document.querySelector('.for-color').querySelector('span').style.backgroundColor = color;
      document.querySelector('.for-color').querySelector('span').style.border = '0px';
    }
    function valueTwo() {
      console.log('value');
      let color = document.querySelector('#background-color').value
      let input = document.querySelector('.inner-grid').querySelector('h1').querySelector('input');
      input.style.backgroundColor = color;
      document.querySelectorAll('.for-color').item(1).querySelector('span').style.backgroundColor = color;
      document.querySelectorAll('.for-color').item(1).querySelector('span').style.border = '0px';
    }
    function valueThree() {
      console.log('value');
      let color = document.querySelector('#link-font-color').value;
      let input = document.querySelector('.news-slide').querySelector('#inputer');
      input.style.color = color;
      document.querySelectorAll('.for-color').item(2).querySelector('span').style.backgroundColor = color;
      document.querySelectorAll('.for-color').item(2).querySelector('span').style.border = '0px';
    }
    function valueFour() {
      console.log('value');
      let color = document.querySelector('#link-background-color').value
      let input = document.querySelector('.news-slide').querySelector('#inputer');
      input.style.backgroundColor = color;
      document.querySelectorAll('.for-color').item(3).querySelector('span').style.backgroundColor = color;
      document.querySelectorAll('.for-color').item(3).querySelector('span').style.borderColor = color;
      document.querySelectorAll('.for-color').item(3).querySelector('span').style.border = '0px';
    }


    function valour() {
      console.log('valor');
      let raw = document.querySelector('#font-size').value;
      console.log(raw);
      let input = document.querySelector('.inner-grid').querySelector('h1').querySelector('input');
      let size = raw * 0.5;
      input.style.fontSize = size + 'px';
    }

    let tempval = [];
    function checker() {
      tempval.push(document.querySelector('#inputer').value);
      console.log(tempval.length);
      if (tempval.length >= 32) {
        console.log('limit');
      }
    }
    
    function working(){
      document.querySelector('.showing').addEventListener('click', option)
      
      const spans = document.querySelector('.not-showing').querySelectorAll('span');
      spans.forEach((span)=>{
        span.addEventListener('click', swap)
        function swap() {
          let input = document.querySelector('.inner-grid').querySelector('h1').querySelector('input');
          let showing = document.querySelector('.showing');
          document.querySelector('.font-style').removeChild(showing);
          if (showing.innerHTML !== "Font-style") {
            document.querySelector('.not-showing').prepend(showing);
          }
          showing.classList.remove('showing');
          showing.removeEventListener('click', option);
          document.querySelector('.not-showing').removeChild(span);
          span.classList.add('showing');
          input.style.fontFamily = span.id;
          span.onclick = option();
          document.querySelector('.font-style').prepend(span);
        }
      })
    }

    function option() {
      if (document.querySelector('.not-showing').style.transform == 'translateY(0%)') {
        document.querySelector('.not-showing').style.transform = 'translateY(-100%)';
      } else {
        document.querySelector('.not-showing').style.transform = 'translateY(0%)';
        }
    }

    function editter(img) {
      if (img == 'pic') {
        document.querySelector('.news-slide').querySelector('.grid-container').querySelector('.possible').style.display = 'block';
      } else {
        document.querySelector('.news-slide').querySelector('.grid-container').querySelector('.possible').style.display = 'none';
      }
      if (document.querySelector('.news-slide').style.right == '-40%') {
        document.querySelector('.news-slide').style.right = '0%'
      } else {
        document.querySelector('.news-slide').style.right = '-40%'
      }
    }
    function backing() {
      document.querySelector('.end').querySelectorAll('button').item(0).addEventListener('click', ()=>{
        console.log(document.querySelector('.news-slide'));
        document.querySelector('.news-slide').style.right = '-140%'
      });
    }

    function dialogue() {
      if (document.querySelector('.ally').style.display == 'none') {
        document.querySelector('.ally').style.display = 'flex';
        document.querySelector('.overAll').style.display = 'none';
        document.querySelector('.ally').querySelector('.back').style.display = 'none';
        document.querySelector('.ally').querySelector('.cont').style.display = 'block';
        setTimeout(() => {
          document.querySelector('.ally').style.opacity = 1;
        }, 300);
      } else {
        document.querySelector('.ally').style.opacity = 0;
        setTimeout(() => {
          document.querySelector('.ally').style.display = 'none';
        }, 300);
        
      }
    }

    function preview() {
      let headVal = document.querySelector('.inner-grid').querySelector('h1').querySelector('input');
      let headCont = document.querySelector('.overAllHeading');
      let bodyVal = document.querySelector('textarea');
      let bodyCont = document.querySelector('.overAllDetails');
      let dateCont = document.querySelector('.overAll').querySelector('.date');
      let linkName = document.querySelector('#inputer');
      let linkVal = document.querySelector('#url');
      let linkCont = document.querySelector('.overAll').querySelector('a');

      let currentDay = new Date();

      console.log(currentDay.getDate());
      console.log(headCont);

      headCont.innerHTML = headVal.value;
      headCont.style.fontSize = headVal.style.fontSize;
      headCont.style.fontFamily = headVal.style.fontFamily;
      headCont.style.backgroundColor = headVal.style.backgroundColor;
      headCont.style.color = headVal.style.color;

      bodyCont.innerText = bodyVal.value;

      linkCont.innerText = linkName.value;
      linkCont.style.color = linkName.style.color;
      linkCont.style.backgroundColor = linkName.style.backgroundColor;
      linkCont.style.fontSize = linkName.style.fontSize;
      linkCont.href = linkVal.value;

      dateCont.innerHTML = currentDay.getDate() + "/" + currentDay.getMonth() + "/" + currentDay.getFullYear();

      document.querySelector('.ally').style.display = 'flex';
      document.querySelector('.ally').style.opacity = '1';
      document.querySelector('.ally').querySelector('.cont').style.display = 'none';
      document.querySelector('.overAll').style.display = 'block';
      document.querySelector('.ally').querySelector('.back').style.display = 'flex';
    }

    function closePreview() {
      document.querySelector('.ally').style.opacity = '0';
      setTimeout(() => {
        document.querySelector('.ally').style.display = 'none';
      }, 800);
    }

    let value = [];
    function search() {
      value.push(document.querySelector('#searching').value);
      console.log(value);
      let studArray = Array.from(document.querySelectorAll('.student'));
      if (value.includes("ST")) {
        console.log('val');
        studArray.forEach(stud =>{
          // console.log(stud.querySelector('p').innerText);
          let text = stud.querySelector('p').innerText;
          console.log(`${value[value.length-1]}`);
          if (text.toLowerCase().includes(value[value.length-1].toLowerCase())) {
            stud.style.display = 'flex';
          } else {
            stud.style.display = 'none';
          }
        })
        // console.log(studArray);
      } else {
        console.log('ex');
        studArray.forEach(stud =>{
          // console.log(stud.querySelector('p').innerText);
          let text = stud.querySelector('h4').innerText;
          console.log(`${value[value.length-1]}`);
          if (text.toLowerCase().includes(value[value.length-1].toLowerCase())) {
            stud.style.display = 'flex';
          } else {
            stud.style.display = 'none';
          }
        })
      }
    }

    function slideIn() {
      if (window.innerWidth <= 767) {
        if (document.querySelector('.nav').style.transform == 'translateX(0%)') {
          document.querySelector('.nav').style.transform = 'translateX(-100%)'
        } else {
          document.querySelector('.nav').style.transform = 'translateX(0%)'
          
        }
      }
    }


    function dropdown() {
      let dropdown = document.querySelector('.dropdown')
      if (dropdown.innerHTML == '<i class="fa-solid fa-angle-down"></i>') {
        dropdown.innerHTML = '<i class="fa-solid fa-angle-up"></i>';

        let dropNav = document.createElement('div');
        dropNav.classList.add('dropdownNav')
        dropNav.innerHTML = `
                                <a class="dropNavItem" href="./MARS.html#hero" onclick="remove(dropdown)">Home</a>
                                <a class="dropNavItem" href="./MARS.html#about" onclick="remove(dropdown)">About</a>
                                <a class="dropNavItem" href="./MARS.html#contact" onclick="remove(dropdown)">Contact Us</a>
                                <a class="dropNavItem" href="./MARSnews.html" onclick="remove(dropdown)">News</a>
                            `
        document.querySelector('body').appendChild(dropNav)
        setTimeout(() => {
            dropNav.style.top = '10%'
        }, 100);
      } else {
          dropdown.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
          document.querySelector('.dropdownNav').style.top = '-40%'
          setTimeout(() => {
              document.querySelector('body').removeChild(document.querySelector('.dropdownNav'))
          }, 500);
      }
    }

    function displayCurrent() {
      document.querySelector('.challengeCast').style.display = 'flex';
      setTimeout(() => {
        document.querySelector('.challengeCast').style.opacity = '1';
      }, 300);
    }
    function participants() {
      document.querySelector('.challenge').style.opacity = 0;
      setTimeout(() => {
        document.querySelector('.challenge').style.display = 'none';
        document.querySelector('.participantsCont').style.display = 'block';
        setTimeout(() => {
          document.querySelector('.participantsCont').style.opacity = 1;
        }, 400);
      }, 400);
    }

    function closeChallenge() {
      let challenges =  Array.from(document.querySelectorAll('.challenge'));

      challenges.forEach(challenge =>{
        challenge.style.transform = 'translateY(400%)';
        setTimeout(() => {
          document.querySelector('.challengeCast').style.opacity = '0';
          setTimeout(() => {
            document.querySelector('.challengeCast').style.display = 'none';
          }, 300);
        }, 300);
      })
    }

    function closeWindow() {
      document.querySelector('.challengeMenu').style.display = 'none';
      document.querySelector('.challengeCast').style.display = 'none';
      document.querySelector('.window').style.display = 'flex';
      document.querySelector('.link').style.display = 'block';
      setTimeout(() => {
        document.querySelector('.window').style.opacity = '1';
        document.querySelector('.link').style.opacity = '1';
      }, 100);
    }

    function copyLink(htmlElement) {
      if (!htmlElement) {
        return;
      }
      let elementText = htmlElement.innerText;

      let inputElement = document.createElement('input');
      inputElement.setAttribute('value', elementText);
      document.body.appendChild(inputElement);
      inputElement.select();
      document.execCommand('copy');
      inputElement.parentNode.removeChild(inputElement)
    }

    function getLink() {
      copyLink(document.querySelector('.container').querySelector('.link').querySelector('span'))
    }

    function scaleUp(a) {
      if (document.querySelectorAll('.updates').item(a).style.display == 'block') {
        document.querySelectorAll('.updates').item(a).style.animation = 'counter-scaleUp .6s';
        document.querySelectorAll('.updates').item(a).style.opacity = 0;
        setTimeout(() => {
            document.querySelectorAll('.updates').item(a).style.display = 'none';
        }, 600);
      } else {
        document.querySelectorAll('.updates').item(a).style.animation = 'scaleUp .6s';
        document.querySelectorAll('.updates').item(a).style.display = 'block';
        document.querySelectorAll('.updates').item(a).style.opacity = 1;
      }
    }

    function yesOrNo(a) {
      let current = document.querySelector('#allyItem');

      current.style.zIndex = '100';
      current.style.opacity = '1';

      let labels = Array.from(current.querySelectorAll('label'));
      labels.forEach(label=>{
        if (label.innerText == 'Yes') {
          label.addEventListener('click', ()=>{
            label.style.color = 'white';
            label.style.backgroundColor = 'limegreen';
            labels[1].style.color = 'rgb(247, 91, 91)';
            labels[1].style.backgroundColor = 'white';
          })
        } else {
          label.addEventListener('click', ()=>{
            label.style.color = 'white';
            label.style.backgroundColor = 'rgb(247, 91, 91)';
            labels[0].style.color = 'limegreen';
            labels[0].style.backgroundColor = 'white';
          })
        }
      })
    }