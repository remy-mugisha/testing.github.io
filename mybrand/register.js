const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (event)=>{
  event.preventDefault();
  if(fullname.ariaValueMax.trim()== ''){
    error(fullname, 'full name can be empty');
  }
});

function error(element,msg){
    element.style.border = '2px red solid';
}