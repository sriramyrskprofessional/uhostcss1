var backdrop=document.querySelector(".backdrop");
var modal=document.querySelector(".modal");
var modalNobutton=document.querySelector(".modal__action--negative");
var ClickPlanButtons=document.querySelectorAll(".plan button");
var navBUtton=document.querySelector(".toggle-button");
var navBar=document.querySelector(".mobile-nav");
// console.dir(navBar)
for(var i = 0;i < ClickPlanButtons.length; i++){
    ClickPlanButtons[i].addEventListener("click",function() {
        // backdrop.style.display="block";
        // modal.style.display="block";
        // backdrop.className="open";//this wont work since it will not add new class but overwrite the previous class
        //to add a new class and not overwrite we can use class list which takes class values as list
        backdrop.classList.add("open");
        modal.classList.add("open");
    })
}                              

backdrop.addEventListener("click",closemodal)
if(modal){
    modalNobutton.addEventListener("click",closemodal)
}


navBUtton.addEventListener("click",function() {
    // backdrop.style.display="block";
    // navBar.style.display="block";
    backdrop.classList.add("open");
    navBar.classList.add("open");
    }
)

function closemodal(){
    // backdrop.style.display="none";
    // modal.style.display="none";
    // navBar.style.display="none";
    backdrop.classList.remove("open");
    if (modal) {
        modal.classList.remove("open");
    }
    navBar.classList.remove("open");
    
   
}

