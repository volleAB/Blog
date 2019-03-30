// let allHeight = documrnt.
let search = document.getElementsByClassName('nav-search')[0]
let oInput = search.children[0]
let oImg = search.children[1]
let fPart = document.getElementsByClassName('advanhtages')[0]
let sPart = document.getElementsByClassName('explore')[0]
let tPart = document.getElementsByClassName('destinations')[0]
let foPart = document.getElementsByClassName('guides')[0]
let fiPart = document.getElementsByClassName('footer')[0]
let oPlay = sPart.getElementsByTagName('img')[0]
let arr = [fPart,sPart,tPart,foPart,fiPart]

oImg.onclick = () =>  {
	console.log(oInput.classList)
	if(search.style.backgroundColor == 'rgb(233, 233, 233)') {
		search.style.backgroundColor = 'transparent'
		oInput.style.display = 'none'
	}else {
		search.style.backgroundColor = 'rgb(233, 233, 233)'
		oInput.style.display = 'block'
	}
}

oPlay.onclick = () => {
	oPlay.classList.add('disappear')
}

window.onscroll = () =>{
	let top = document.documentElement.scrollTop
	showUp(top)
}

showUp = (top) => {
	console.log(top)
	for(let i=0; i<arr.length; i++) {
		if(top+140>arr[i].offsetTop) {
			arr[i].classList.add('showUp')
		}
	}
	if(top>3500) {
		fiPart.classList.add('showUp')
	}
}