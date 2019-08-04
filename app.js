var but = document.querySelector("button");
// var isPink = false;
// but.addEventListener("click", function () {

//     if (isPink) {
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "pink";
//     }
//     isPink = !isPink;
// });
but.addEventListener("click", function () {
    document.body.classList.toggle("pink")
});