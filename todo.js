let button=document.querySelector('.button');
let name=document.querySelector('.name');
let content=document.querySelector('.content');
let ul=document.querySelector('.ul');
button.disabled=true;
name.addEventListener('input',function (){
    if (content.value.length!==0 ){
        button.disabled=false;
    }
});
content.addEventListener('input',function (){
    if (name.value.length!==0){
        button.disabled=false;
    }
});


function submit(){
   ul.innerHTML+=`<li class="list-group-item "><span class="item"><button  onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)"><i class="fa fa-trash"></i></span>${name.value}: ${content.value}  </li>`;
   button.disabled=true;
   name.value='';
   content.value='';
}