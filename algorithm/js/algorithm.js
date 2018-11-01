/*
    0,0.9207355,1,0.9397933,2,0.9445135,3,0.9456909
*/

/*
  0.40,0.41075,0.55,0.57815,0.65,0.69675,0.80,0.88811,0.90,1.02652,1.05,1.253820
*/


// let arr = [0,0.9207355,1,0.9397933,2,0.9445135,3,0.9456909]

let oSelect = document.getElementsByTagName('select')[0]
let sub = document.getElementsByTagName('a')[0]
let arr = document.getElementsByTagName('input')[0]
let arrValue = ''
let value = 'Newton'

function newton (arr) {
    let res = document.getElementsByClassName('textarea')[0]
    let n = arr.length/2
    console.log(n)
    let m = n + 1
    let l = n - 1
    let x = []
    let y = []
    let o = 0
    let datas = []

    for (let i = 0; i < n; i++) {
        x[i] = parseFloat(arr[2 * i])
        y[i] = parseFloat(arr[2 * i + 1])
    }

    for (let i = 0; i < n*m; i++) {
        datas[i] = o.toFixed(5)
    }

    // 把已有数据放入表单
    for (let i = 0; i < n; i++) {
        datas[i * m + 0] = x[i].toFixed(5)
        datas[i * m + 1] = y[i].toFixed(5)
    }

    //从第二开始跟前一个值做newton差商
    //后一阶差商用的前一阶差商计算
    for (let i = 2; i < m; i++) {
        for (let j = i - 1; j < n; j++) {
            //f(x)的值相减
            datas[j * m + i] = (datas[j * m + i - 1] - datas[(j - 1) * m + i - 1]).toFixed(5)
            //上面算出来的值除以对应的x相减的值
            datas[j * m + i] = (datas[j * m + i]/(x[j] - x[j - (i - 1)])).toFixed(5)
            if(i>2) {
                console.log(((x[j] - x[j - (i - 1)])).toFixed(5))
            }
        }
    }

    res.innerText = datas
}

function romberg (arr) {

    let res = document.getElementsByClassName('textarea')[0]
    let n = arr.length/2
    let m = n + 1
    let o = 0
    let x = []
    let y = []
    let datas = []

    for (let i = 0; i < n; i++) {
        x[i] = parseFloat(arr[2 * i])
        y[i] = parseFloat(arr[2 * i + 1])
    }

    //初始化表单
    for (let i = 0; i < n*m; i++) {
        datas[i] = o.toFixed(7)
    }

    // 把已有数据放入表单
    for (let i = 0; i < n; i++) {
        datas[i * m + 0] = x[i]
        datas[i * m + 1] = y[i].toFixed(7)
    }

    //计算S/C/R的值
    for (let i = 2; i < m; i++) {
        if (i == 2) {
            for (let j = i - 1; j < n; j++) {
                datas[j * m + i] = ((4 / 3) * datas[j * m + i - 1] - (1 / 3) * datas[(j - 1) * m + i - 1]).toFixed(7)
                console.log(datas[(j - 1) * m + i - 1])
            }
        } else if (i == 3) {
            for (let j = i - 1; j < n; j++) {
                datas[j * m + i] = ((16 / 15) * datas[j * m + i - 1] - (1 / 15) * datas[(j - 1) * m + i - 1]).toFixed(7)
            }
        } else {
            for (let j = i - 1; j < n; j++) {
                datas[j * m + i] = ((64 / 63) * datas[j * m + i - 1] - (1 / 63) * datas[(j - 1) * m + i - 1]).toFixed(7)
            }
        }
    }

    res.innerText = datas

}

oSelect.onchange = function () {
    let index = oSelect.selectedIndex
    let text = oSelect.options[index].text
    value = oSelect.options[index].value
}

arr.onchange = function () {
    arrValue = arr.value.split(',')
    console.log(arrValue)
}

sub.onclick = function () {
    if (value == 'Newton'&& arrValue != '') {
        newton(arrValue)
    } else if (value == 'Romberg'&& arrValue != '') {
        romberg(arrValue)
    } else {
        alert('输入错误！！！')
    }
}