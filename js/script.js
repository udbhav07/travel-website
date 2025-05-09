const menus=document.querySelector('nav ul');
const header=document.querySelector('header');
const menuBtn=document.querySelector('.menu-btn');
const closeBtn=document.querySelector('.close-btn');


menuBtn.addEventListener('click',()=>{
    menus.classList.add("display");
});

closeBtn.addEventListener('click',()=>{
    menus.classList.remove("display");
});

window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop>20){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }

})

//animate static icon numbers

const counterEL = document.querySelectorAll(".number");

counterEL.forEach((counter) => {
    counter.textContent = "0";
    const updateCounter = () => {
        const dataCeil = +counter.getAttribute("data-Ceil");
        let currentNum = +counter.textContent;
        const increment = Math.ceil(dataCeil / 25);

        if (currentNum < dataCeil) {
            counter.textContent = `${Math.min(currentNum + increment, dataCeil)}`;
            setTimeout(updateCounter, 80);
        } else {
            counter.textContent = `${dataCeil}`; 
        }
    };

    updateCounter();
});
