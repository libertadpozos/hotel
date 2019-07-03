'use strict';

console.log("tab 2 :) ");

const optional = document.querySelector('.optional-title__container');
const arrowOneEl = document.querySelector('.arrow');
const arrowTwoEl = document.querySelector('.arrow2');
const arrowThreeEl= document.querySelector('.arrow3');
const subTabOpt= document.querySelector('.subTab-optional');
const moreInfoCont1= document.querySelector('.more1');
const moreInfoCont2=document.querySelector('.more2');
const moreInfoCollap= document.querySelector('.more-information__collapsible');
const moreInfoCollap2= document.querySelector('.more-collap2');
const moreInfoCollap3= document.querySelector('.more-collap3');

function openTab(event){
  event.currentTarget.nextElementSibling.classList.contains('hide')?
  event.currentTarget.nextElementSibling.classList.remove('hide'):
  event.currentTarget.nextElementSibling.classList.add('hide');
  changeArrow();
}
moreInfoCont1.addEventListener('click', openTab);
moreInfoCont2.addEventListener('click', openTab);
optional.addEventListener('click', openTab);

function changeArrow(){
  //mejora tu estancia
  if (subTabOpt.classList.contains('hide')) {
    arrowOneEl.classList.add('fa-chevron-up');
    arrowOneEl.classList.remove('fa-chevron-down');
  } else {
  
    arrowOneEl.classList.add('fa-chevron-down');
    arrowOneEl.classList.remove('fa-chevron-up');
  }
  //olvídese de la rutina
  if (moreInfoCollap.classList.contains('hide')) {
    arrowTwoEl.classList.add('fa-chevron-up');
    arrowTwoEl.classList.remove('fa-chevron-down');
  } else {
    
    arrowTwoEl.classList.add('fa-chevron-down');
    arrowTwoEl.classList.remove('fa-chevron-up');
  }
  //Experiencia y programa Spa con agua
  if (moreInfoCollap3.classList.contains('hide')) {
    arrowThreeEl.classList.add('fa-chevron-up');
    arrowThreeEl.classList.remove('fa-chevron-down');
  } else {
   
    arrowThreeEl.classList.add('fa-chevron-down');
    arrowThreeEl.classList.remove('fa-chevron-up');
  }
}