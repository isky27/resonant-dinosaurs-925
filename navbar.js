let checkflag = JSON.parse(localStorage.getItem("authentication"));


function openDropDown(){
    if (document.querySelector(".dropdown-content").style.display=="block"){
        document.querySelector(".dropdown-content").style.display = "none";
    }else{
        document.querySelector(".dropdown-content").style.display = "block";
    } 
}
function handleLogOut(){
    localStorage.setItem("authentication","false");
    window.location.href="index.html";
}

if(checkflag==true){
    document.querySelector("#tagname").innerText=localStorage.getItem("name")
}