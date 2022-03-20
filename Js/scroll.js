const links = document.querySelectorAll('.menu-list__link');
const btn = document.querySelector('.main__button');
const down = document.querySelector('.main__scroll');

const allLinks = [...links,btn,down];

allLinks.forEach((e)=>{
    e.addEventListener('click',(event)=>{
        event.preventDefault();

        const id = e.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        if (section){
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        };
    });
})