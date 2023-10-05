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






// product search
function search(){
  let filter = document.getElementById('myInput').value.toUpperCase();
   let productContainer = document.getElementById('products');

  let card = productContainer.children;
  console.log(card);


  for(let i=0;i<card.length;i++){
    let p = card[i].getElementsByClassName('catagory')[0]
    console.log(p);

    if(p){
      let textValue = p.textContent || p.innerHTML;

      if(textValue.toUpperCase().indexOf(filter) >-1){
          card[i].style.display = "";
        }else{
          card[i].style.display = "none";
        }
    }

    

  }

}






// product filter
(
  ()=>{
    const buttons = document.querySelectorAll('.filter-btn')
    const storeData = document.querySelectorAll('.card')


   buttons.forEach((button)=>{


    button.addEventListener('click', (e)=>{
      e.preventDefault();
      const filter = e.target.dataset.filter;


      
    storeData.forEach((item)=>{
      if(filter === "all"){
        item.style.display = "block"
      }
      else{
        if(item.classList.contains(filter)){
          item.style.display = "block"
        }
        else{
          item.style.display = "none"
        }
      }


    })





    })
   })

  }
)()











// image gallery
let mainImg = document.getElementById('main_img');
let smallImg = document.getElementsByClassName('small_img');

smallImg[0].onclick = function(){
  mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
  mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
  mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
  mainImg.src = smallImg[3].src;
}

