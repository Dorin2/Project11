const acordeon = document.querySelector('.feature-list'),
      acordeonButtons = acordeon.querySelectorAll('.feature__link')

acordeonButtons.forEach((btn) =>{
    btn.addEventListener('click', ()=>{
        acordeonButtons.forEach((button) =>{
        button.classList.remove('feature__link_active');
        button.nextElementSibling.classList.add('hidden');
        });
       btn.classList.toggle('feature__link_active');
       btn.nextElementSibling.classList.toggle('hidden');
    })
})