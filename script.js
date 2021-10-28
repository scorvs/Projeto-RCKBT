

var menubtn = document.getElementById("menubtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menubtn.onclick = function(){
    if( sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        document.getElementById('menubtn').src = "images/menu2.png"
    }else{
        sideNav.style.right = "-250px";
        document.getElementById('menubtn').src = "images/menu.png"
    }
}

var photos = document.getElementById('btn-photos');
photos.onclick = function() {
    document.getElementById("content-1").style.display = "block";
    document.getElementById("content-2").style.display = "none";
} 

var eps = document.getElementById('btn-eps');
eps.onclick = function() {
    document.getElementById("content-2").style.display = "block";
    document.getElementById("content-1").style.display = "none";

} 

var sidenavItem = document.querySelectorAll("#sidenav-content a");
for (var i = 0; i < sidenavItem.length; i++) {
    sidenavItem[i].addEventListener("click", function (e) {
        if(this.innerHTML == 'PHOTOS'){
            document.getElementById("content-1").style.display = "block";
            document.getElementById("content-2").style.display = "none";

        }else if(this.innerHTML == 'EPs'){
            document.getElementById("content-2").style.display = "block";
            document.getElementById("content-1").style.display = "none";


        }else{

        };
    })
}



const links = document.querySelectorAll(".scroll");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

