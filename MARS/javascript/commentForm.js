const form = document.querySelector('form');
const body = document.querySelector('.cast');

(()=>{
    form.style.opacity = 0
    setTimeout(() => {
        form.style.opacity = 1
    }, 2000);
    setTimeout(() => {
        body.style.transition = 'all ease 3s'
        body.style.backgroundImage = "url('../images/star-background.jpg')"
    }, 3000);
})();