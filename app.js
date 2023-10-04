const bar =document.querySelector(".bar");
const navlinks=document.querySelector(".navlinks");

bar.addEventListener("click",()=>
{
    if(navlinks.style.display=="block")
    {
        navlinks.style.display="none"
        bar.classList.toggle("fa-xmark");
    }
    else
    {
        navlinks.style.display="block";
        bar.classList.toggle("fa-xmark");
    }
})

//<i class="fa-solid fa-xmark"></i>