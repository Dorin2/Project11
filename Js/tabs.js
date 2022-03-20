'use strict'
const tabButtons = document.querySelectorAll('.design-list__item'),
      text = document.querySelectorAll('.design__descr'),
      tabImages = document.querySelectorAll('.design-images'),
      tabTitles = document.querySelectorAll('.section__title'),
      tabLeftImages = document.querySelectorAll('.feature__img'),
      title = document.querySelectorAll('.design__title');

const changeContent = (array, value) => {
    array.forEach((e) =>{
        if (e.dataset.tabsField === value){
            e.classList.remove('hidden');
        } else {
            e.classList.add('hidden');
        };
    });
};
  tabButtons.forEach((tabButton,index)=>{
  tabButton.addEventListener('click', (e) => {
    const dataValue = tabButton.dataset.tabsHandler;
    

    changeContent(text, dataValue);
    changeContent(tabLeftImages, dataValue);
    title.forEach((eventTitle, indexTitle) =>{
        if(index === indexTitle){
            document.title = eventTitle.innerText
        } else {
            document.title = document.title
        }
    });
    
    tabButtons.forEach((btn) => {
        if(btn == e.target){
        btn.classList.add('design-list__item_active')}
        else {
            btn.classList.remove('design-list__item_active')
        };
    });
    tabTitles.forEach((titles,indexTitle) =>{
        if(index === indexTitle){
            titles.classList.remove('hidden');
        } else {
            titles.classList.add('hidden');
        }
    })
   
  });
  
});

