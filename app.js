const mainSection= document.querySelector('.main');
const thanksSection= document.querySelector('.thank-you')
;
const submit=document.querySelector('.submit-btn');
const rating=document.getElementById('rating')
const ratingsClicked=document.querySelectorAll('.btn')


submit.addEventListener('click',() => {
thanksSection.classList.remove('unseen')
mainSection.style.display='none'

});

ratingsClicked.forEach((rate) => {
  rate.addEventListener('click',() => {
    rating.innerHTML=rate.innerHTML
  })
})

