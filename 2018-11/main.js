/*first-screen*/

let newOpacity, newOpacity2, temp, temp2, scrollTop, i
let firstScreen = document.getElementsByClassName('first-screen')[0]
let oArrow = firstScreen.getElementsByClassName('arrow-download')[0]
let aImg = firstScreen.getElementsByClassName('index-bg')
let aDoodles = firstScreen.getElementsByClassName('index-doodles-item')
let downLoad = firstScreen.getElementsByClassName('qb-btn-big')[0]
let oCon = firstScreen.getElementsByClassName('index-bg-w')[0]
let animated = true

document.body.onmousewheel = function (event) {
    scrollTop = document.documentElement.scrollTop
    if(scrollTop > 0) {
        console.log(oArrow.classList)
        oArrow.classList.remove('updown')
    }
}

indexBg = () => {
    if(aImg[1].classList.contains('active')) {
        temp = 0
        temp2 = 1
    } else {
        temp = 1
        temp2 = 0
    }
    newOpacity = aImg[temp].style.opacity
    newOpacity2 = aImg[temp2].style.opacity
    animated = true
    addOpacity = () => {
        if(aImg[temp].classList.contains('active')) {
            animated = false
        }
        if(animated) {
            if(temp == 0) {
                downLoad.classList.remove('green')
                downLoad.classList.add('blue')
                aDoodles[0].classList.add('active')
                aDoodles[1].classList.remove('active')
            } else {
                downLoad.classList.remove('blue')
                downLoad.classList.add('green')
                aDoodles[1].classList.add('active')
                aDoodles[0].classList.remove('active')
            }
            setTimeout(addOpacity, 1)
        }
        newOpacity = aImg[temp].style.opacity
        newOpacity = newOpacity == ''? 0 : parseFloat(aImg[temp].style.opacity)
        aImg[temp].style.opacity = newOpacity + (Math.random() / 100)
        if(aImg[temp].style.opacity >= 1) {
            aImg[temp].style.opacity = 1
            aImg[temp].classList.add('active')
        }
        newOpacity2 = aImg[temp2].style.opacity
        newOpacity2 = newOpacity2 == ''? 1 : parseFloat(aImg[temp2].style.opacity)
        aImg[temp2].style.opacity = newOpacity2 - (Math.random() / 80)
        if(aImg[temp2].style.opacity <= 0) {
            aImg[temp2].style.opacity = 0
            aImg[temp2].classList.remove('active')
        }
    }
    addOpacity()
}
let timer = setInterval(indexBg, 6000)
for(i = 0; i < aDoodles.length; i++) {
    aDoodles[i].index = i
    aDoodles[i].onmouseover = function () {
        if(this.index == 0) {
            aDoodles[0].classList.add('active')
            aDoodles[1].classList.remove('active')
            aImg[0].classList.add('active')
            aImg[1].classList.remove('active')
            downLoad.classList.add('blue')
            downLoad.classList.remove('green')
            aImg[0].style.cssText = ""
            aImg[1].style.cssText = ""
        } else {
            aDoodles[1].classList.add('active')
            aDoodles[0].classList.remove('active')
            aImg[1].classList.add('active')
            aImg[0].classList.remove('active')
            downLoad.classList.remove('blue')
            downLoad.classList.add('green')
            aImg[0].style.cssText = ""
            aImg[1].style.cssText = ""
        }
    }
}

firstScreen.onmouseover = function () {
    clearInterval(timer)
}

firstScreen.onmouseout = function () {
    timer = setInterval(indexBg, 6000)
}