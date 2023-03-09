const btn1 = document.querySelector('.btn1');
const body1= document.querySelector('.body1');


btn1.addEventListener('click', function (e) {
    body1.classList.remove('body1');
    body1.classList.add('darkTheme');
});
