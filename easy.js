const menu = document.getElementById("menu");
const openmenu = document.getElementById("open");
const closemenu = document.getElementById("close");
const curtain = document.getElementById("curtain");
menu.addEventListener("click",()=>{
    menu.classList.toggle("active");
    if(menu.classList.contains('active')){
        openmenu.style.display="none";
        closemenu.style.display="block";
        curtain.style.display="block";
    }else{
        openmenu.style.display="block";
        closemenu.style.display="none";
        curtain.style.display="none";
    }
})