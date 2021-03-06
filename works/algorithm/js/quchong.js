let arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}]

// 利用ES6 Set 去重
/*let s = new Set()

function unique (arr) {
    return Array.from(new Set(arr))
}

arr.forEach(x => s.add(x))

console.log(unique(arr))
console.log(s)*/

//利用for嵌套for，然后splice去重
/*function unique(arr) {
    for(let i = 0; i<arr.length; i++) {
        for(let j = i + 1; j<arr.length; j++) {
            if(arr[i] == arr[j]) {
                arr.splice(j, 1)
                j--
            }
        }
    }
    return arr
}

console.log(unique(arr))    //NaN和{}没有去重，两个null直接消失了*/

//利用indexOf去重
function unique(arr) {
    if(!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let array = []
    for (let i = 0; i <arr.length; i++) {
        if(array.indexOf(arr[i]) === -1) {
            array.push(arr[i])
        }
    }
}