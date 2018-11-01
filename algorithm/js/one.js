/*
	排序算法
*/

//1 选择排序

selectSort = (arr) => {
    let temp = null
    let minIndex = null
    for(let i = 0; i<arr.length - 1; i++) {
        minIndex = i
        for(let j = i + 1; j < arr.length - 1; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    console.log(arr)
    return arr
}

let arr = [2,5,1,6,7,8,55,23,11]

// selectSort(arr)

//2.冒泡排序

bubbleSort = (arr) => {
    let lower = null
    for(let i = 0; i<arr.length - 1; i++) {
        for(let j = i + 1; j<arr.length - 1 - i; j++) {
            if(arr[j] < arr[i]) {
                lower = arr[j]
                arr[j] = arr[i]
                arr[i] = lower
            }
        }
    }
    console.log(arr)
    return arr
}

// bubbleSort(arr)

//3.插入排序

// insertionSort = (arr) => {
//     let newArr = []
//     let nowMin = null
//     for(let i = 0; i < arr.length - 1 - i; i++) {
//         nowMin = i
//         for(let j = i + 1; j < arr.length - i; j++) {
//             if(arr[j] < arr[nowMin]) {
//                 nowMin = j
//             }
//         }
//         newArr.push(arr[nowMin])
//         console.log(nowMin)
//     }
//     // console.log(newArr)
//     return newArr
// }

insertionSort = (arr) => {
    let len = arr.length
    let preIndex, current
    for (let i = 1; i < len; i++) {
        preIndex = i - 1
        current = arr[i]
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex]
            preIndex--
            console.log(preIndex)
        }
        arr[preIndex+1] = current
    }
    console.log(arr)
    return arr
}

// insertionSort(arr)

//4.希尔排序

shellSort = (arr) => {  //???
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3) {          //动态定义间隔序列
        gap =gap*3+1;
    }
    for (gap; gap> 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j > 0 && arr[j]> temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
        console.log(gap)
    }
    console.log(arr)
    return arr;
}

// shellSort(arr)

//5.归并排序

mergeSort = () => {

}

//6.快速排序

quickSort = () => {
    if(arr.length<=1) {
        return arr;
    }

    let leftArr = [];
    let rightArr = [];
    let q = arr[0];
    for(let i = 1,l=arr.length; i<l; i++) {
        if(arr[i]>q) {
            rightArr.push(arr[i]);
        }else{
            leftArr.push(arr[i]);
        }
    }
    let a = [].concat(quickSort(leftArr),[q],quickSort(rightArr))
    console.log(a)
    return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
}

quickSort(arr)