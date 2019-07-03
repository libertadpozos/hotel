'use strict';

console.log("tab 1 :) ");

'use strict'

/***** TAB 1 ********/
const listEl1 = document.querySelector('.opt1');
const listEl2 = document.querySelector('.opt2');
const listEl3 = document.querySelector('.opt3');
const listEl4 = document.querySelector('.opt4');
const listEl5 = document.querySelector('.opt5');
const inputEl1=document.querySelector('.l1');
const inputEl2=document.querySelector('.l2');
const inputEl3=document.querySelector('.l3');
const inputEl4=document.querySelector('.l4');
const inputEl5=document.querySelector('.l5');

function ischecked(){
  inputEl1.checked===true?
  listEl1.classList.add('selected'):
  listEl1.classList.remove('selected');
  inputEl2.checked===true?
  listEl2.classList.add('selected'):
  listEl2.classList.remove('selected');
  inputEl3.checked===true?
  listEl3.classList.add('selected'):
  listEl3.classList.remove('selected');
  inputEl4.checked===true?
  listEl4.classList.add('selected'):
  listEl4.classList.remove('selected');
  inputEl5.checked===true?
  listEl5.classList.add('selected'):
  listEl5.classList.remove('selected');
}

inputEl1.addEventListener('click', ischecked);
inputEl2.addEventListener('click', ischecked);
inputEl3.addEventListener('click', ischecked);
inputEl4.addEventListener('click', ischecked);
inputEl5.addEventListener('click', ischecked);



