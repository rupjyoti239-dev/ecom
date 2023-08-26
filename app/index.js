const bar = document.getElementById('bar');
const nav = document.getElementById('nav-list');
const closeBtn = document.getElementById('close');


if(bar){
  bar.addEventListener('click', ()=>{
    nav.classList.add('active');
  })
}
if(closeBtn){
  closeBtn.addEventListener('click', ()=>{
    nav.classList.remove('active')
  })
}
