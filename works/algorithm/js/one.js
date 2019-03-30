/*
	排序算法
*/

let arr = [24,55,2,5,1,6,8,7,23,11]

//1 选择排序

/*selectSort = (arr) => {
    let temp = null
    let minIndex = null
    for(let i = 0; i<arr.length; i++) {
        minIndex = i
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

console.log(selectSort(arr))*/

//2.冒泡排序

/*bubbleSort = (arr) => {
    let lower = null
    for(let i = 0; i<arr.length; i++) {
        for(let j = 0; j<arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                lower = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = lower
            }
        }
    }
    return arr
}

bubbleSort2 = (arr) => {
    let lower = null
    for(let i = arr.length; i > 0; i--) {
        for(let j = i; j > 0; j--) {
            if(arr[j] < arr[j - 1]) {
                lower = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = lower
            }
        }
    }
    return arr
}

console.log(bubbleSort2(arr))*/

//3.插入排序

//直接插入排序

/*insertionSort = (arr) => {
    let preIndex, current
    for (let i = 1; i < arr.length; i++) {
        preIndex = i - 1
        current = arr[i]
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            console.log(preIndex)
            preIndex--
        }
        arr[preIndex + 1] = current
    }
    return arr
}

//折半插入排序（二分插入排序）

binarySearch = (arr) => {
    let newArr = []
    newArr.push(arr[0])
    for(let i = 1; i < arr.length; i++) {
        let temp = parseInt((newArr.length - 1) / 2)

    }
}

console.log(binarySearch(arr))*/

//4.希尔排序

/*shellSort = (arr) => {
    let len = arr.length,
        temp,
        gap = 1
    while(gap < len/3) {          //动态定义间隔序列
        gap = gap * 3 + 1
    }
    for (gap; gap> 0; gap = Math.floor(gap/3)) {
        for (let i = gap; i < len; i++) {
            temp = arr[i]
            for (var j = i - gap; j >= 0 && arr[j]> temp; j -= gap) {
                arr[j + gap] = arr[j]
            }
            arr[j + gap] = temp
        }
    }
    return arr;
}

console.log(shellSort(arr))*/

//5.归并排序

/*mergeSort = (arr) => {
    let 
}*/

//6.快速排序

/*quickSort = (arr) => {
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
    return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
}

quickSort(console.log(arr))*/