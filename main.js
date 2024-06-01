//single element
//const form = document.getElementById('my-form');
//console.log(form);
//console.log(document.querySelector('.container'))

//Multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(doccument.getElementsByTagName('li'));


//const ul=document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent ='Hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML ='<h1>Hello</h1>';

//const btn = document.querySelector('.btn');
//btn.style.background = 'red';

//const btn = document.querySelector('.btn');

//btn.addEventListener('mouseout', (e) => {
   // e.preventDefault()
    //console.log(e.target.id);
    //document.querySelector('#my-form').style.background ='#ccccccc';
    //document.querySelector('body').classList.add('bg-dark');
    //document.querySelector('.items')
    //.lastElementChild.innerHTML = '<h1>Hello</h1>'
//});


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);


fction onSubmit(e){
    e.preventDefault();

    //console.log(nameInput.value);
    if(nameInput.value === '' ){

    }
}