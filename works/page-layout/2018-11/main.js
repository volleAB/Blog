/*first-screen && header*/

let i
let oHeader = document.getElementById('header')
let oSider_bar = document.getElementsByClassName('sider-bar')[0]
let oSider_bar_left = oSider_bar.getElementsByClassName('sider-left')[0]
let oSider_bar_right = oSider_bar.getElementsByClassName('sider-right')[0]
let oSider_bar_left_aItem = oSider_bar_left.getElementsByClassName('sider-switch-item')
let zixun = oSider_bar_left.getElementsByClassName('icon-zixun')[0]
let play = oSider_bar_left.getElementsByClassName('icon-play')[0]
let zhibo = oSider_bar_left.getElementsByClassName('icon-zhibo')[0]
let oSider_bar_aImg = oSider_bar_right.getElementsByTagName('img')
let headerDownLoad = oHeader.getElementsByClassName('download')[0]
let firstScreen = document.getElementsByClassName('first-screen')[0]
let oArrow = firstScreen.getElementsByClassName('arrow-download')[0]
let aImg = firstScreen.getElementsByClassName('index-bg')
let aDoodles = firstScreen.getElementsByClassName('index-doodles-item')
let downLoad = firstScreen.getElementsByClassName('qb-btn-big')[0]
let oCon = firstScreen.getElementsByClassName('index-bg-w')[0]
let oVideo = document.getElementsByClassName('skin-video')[0]
let scrollTop = document.documentElement.scrollTop
let animated = true

let map = [zixun, play, zhibo]

/*slide*/
indexBg = () => {
    let newOpacity, newOpacity2, temp, temp2
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
    aDoodles[i].onmouseout = function () {
        timer = setInterval(indexBg, 3800)
    }
    aDoodles[i].index = i
    aDoodles[i].onmouseover = function () {
        clearInterval(timer)
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

/*sider-bar*/

indexBg2 = () => {
    let newOpacity, newOpacity2, newOpacity3, temp, temp2, temp3
    if(oSider_bar_aImg[0].classList.contains('active')) {
        temp = 1
        temp2 = 0
        temp3 = 2
    } else if(oSider_bar_aImg[1].classList.contains('active')) {
        temp = 2
        temp2 = 1
        temp3 = 0
    } else if(oSider_bar_aImg[2].classList.contains('active')) {
        temp = 0
        temp2 = 2
        temp3 = 1
    } else {
        return
    }
    map[temp].classList.add('active')
    map[temp2].classList.remove('active')
    map[temp3].classList.remove('active')
    newOpacity = oSider_bar_aImg[temp].style.opacity
    newOpacity2 = oSider_bar_aImg[temp2].style.opacity
    newOpacity3 = oSider_bar_aImg[temp3].style.opacity
    animated = true
    addOpacity = () => {
        if(oSider_bar_aImg[temp].classList.contains('active')) {
            animated = false
        }
        if(animated) {
            // if(temp == 0) {
            //     aDoodles[0].classList.add('active')
            //     aDoodles[1].classList.remove('active')
            // } else {
            //     aDoodles[1].classList.add('active')
            //     aDoodles[0].classList.remove('active')
            // }
            setTimeout(addOpacity, 1)
        }
        newOpacity = oSider_bar_aImg[temp].style.opacity
        newOpacity = newOpacity == ''? 0 : parseFloat(oSider_bar_aImg[temp].style.opacity)
        oSider_bar_aImg[temp].style.opacity = newOpacity + (Math.random() / 100)
        if(oSider_bar_aImg[temp].style.opacity >= 1) {
            oSider_bar_aImg[temp].style.opacity = 1
            oSider_bar_aImg[temp].classList.add('active')
        }
        newOpacity2 = oSider_bar_aImg[temp2].style.opacity
        newOpacity2 = newOpacity2 == ''? 1 : parseFloat(oSider_bar_aImg[temp2].style.opacity)
        oSider_bar_aImg[temp2].style.opacity = newOpacity2 - (Math.random() / 100)
        if(oSider_bar_aImg[temp2].style.opacity <= 0) {
            oSider_bar_aImg[temp2].style.opacity = 0
            oSider_bar_aImg[temp2].classList.remove('active')
        }
        newOpacity3 = oSider_bar_aImg[temp3].style.opacity
        newOpacity3 = newOpacity3 == ''? 1 : parseFloat(oSider_bar_aImg[temp3].style.opacity)
        oSider_bar_aImg[temp3].style.opacity = newOpacity2 - (Math.random() / 100)
        if(oSider_bar_aImg[temp3].style.opacity <= 0) {
            oSider_bar_aImg[temp3].style.opacity = 0
            oSider_bar_aImg[temp3].classList.remove('active')
        }
    }
    addOpacity()
}
let timer2 = setInterval(indexBg2, 3800)

/*video*/

/*Scroll display*/

let scroll = (scrollTop) => {
    if(scrollTop > 120) {
        oSider_bar_left.classList.add('active')
        oSider_bar_right.classList.add('active')
        setTimeout(() => {
            oSider_bar_left.style.opacity = 1
        }, 800)
        setTimeout(() => {
            oSider_bar_right.style.opacity = 1
        }, 1000)
    }
}

if(scrollTop > 200 && scrollTop < 300) {
    scroll(scrollTop)
} else if(scrollTop > 560) {
    scroll(scrollTop)
} else {
    console.log(scrollTop)
}

document.body.onmousewheel = function (event) {
    console.log(scrollTop)
    scrollTop = document.documentElement.scrollTop
    if(scrollTop > 200) {
        oArrow.classList.remove('updown')
        headerDownLoad.classList.remove('hidden')
    } else if(scrollTop == 200) {
        oArrow.classList.add('updown')
        headerDownLoad.classList.add('hidden')
    } else {
        return
    }
    scroll(scrollTop)
}