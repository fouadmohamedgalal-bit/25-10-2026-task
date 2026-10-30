


// var w= window.innerWidth;
// var h = window.innerHeight;


// document.querySelector("#Demo").innerHTML = " your width is " + w + "and your hight is" + h  ;




window.addEventListener("scroll", function () {

    var scrollvalue = window.scrollY;

    var navbar = document.querySelector(".navbar");

    if (scrollvalue > 300) {
        navbar.setAttribute("class", "navbar md:navbar-expand bg-primary");
    } else {
        navbar.setAttribute("class", "navbar md:navbar-expand bg-danger");
    }
});



// document.querySelector("#tryme").addEventListener("click",function(){

//     window.location.href="https://www.google.com";
// })






// document.querySelector("#tryme").innerHTML=navigator.appVersion ;



// if (navigator.platform.indexOf("Win") !== -1) {
//     document.body.innerHTML = "";
// }




var coc = setInterval(clock, 1000);

function clock() {

    var tata = new Date();

    document.querySelector("#tryme").innerHTML = tata;
}








 var xox = setTimeout(Bow, 2000);

function Bow() { 

    Swal.fire({
        title: "Good job!",
        text: "Well Done",
        icon: "success"
    });  


}
