
let color = document.querySelector('.color');
let text=document.querySelector('.text');
let size =document.querySelector('.num');
let police = document.querySelector('.police');

color.addEventListener('input', function() {
 
  text.style.color = this.value;
 
});
size.addEventListener('input', function() {

  text.style.fontSize = `${this.value}px`;

});
police.addEventListener('input', function() {

  text.style.fontFamily = `${this.value}`;

});