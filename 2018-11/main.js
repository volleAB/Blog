/*first-screen*/

let scrollTop
let oArrow = document.getElementsByClassName('arrow-download')[0]

document.body.onmousewheel = function (event) {
    scrollTop = document.documentElement.scrollTop
    if(scrollTop > 0) {
        console.log(oArrow.classList)
        oArrow.classList.remove('updown')
    }
}