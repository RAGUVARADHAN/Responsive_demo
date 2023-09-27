const bar =document.querySelector(".bar");
const navlinks=document.querySelector(".navlinks");

bar.addEventListener("click",()=>
{
    if(navlinks.style.display=="block")
    {
        navlinks.style.display="none"
        bar.classList.toggle("fa-xmark");
        console.log(bar.classList);
    }
    else
    {
        navlinks.style.display="block";
        bar.classList.toggle("fa-xmark");
        console.log(bar.classList);
    }
})

//<i class="fa-solid fa-xmark"></i>