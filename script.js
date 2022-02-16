document.querySelector("#open-popup").addEventListener("click",function(){
    document.body.classList.add("activepopup");
});

document.querySelector("#popup .close-popup").addEventListener("click",function(){
    document.body.classList.remove("activepopup");
});