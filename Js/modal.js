const modalButton = document.querySelectorAll('.more'),
      modal = document.querySelector('.modal'),
      overlay = modal.querySelector('.overlay'),
      closeButton = modal.querySelector('.modal__close');


modalButton.forEach((btn)=>{
    btn.addEventListener('click', () =>{
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
    });
})

overlay.addEventListener('click',() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';

});
closeButton.addEventListener('click',() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';

});