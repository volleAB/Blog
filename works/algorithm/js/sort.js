/**
 * 插入排序
 * @param  {Array} array 需要排序的数组
 * @return {Array}       排序完之后的数组
 */
function insertionSort(array) {
    //Object.prototype.toString.call(array)是获得到[object Array]
    //.slice(8, -1)是为了获取到Array
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('1插入排序耗时：')
        for (let i = 1; i < array.length; i++) {
            let key = array[i]
            let j = i - 1
            while (key < array[j] && j >= 0) {
                array[j + 1] = array[j]
                j--
            }
            array[j + 1] = key
        }
        console.timeEnd('1插入排序耗时：')
        return array
    } else {
        return 'array is not an Array!'
    }
}
/**
 *  模拟v8 的插入排序源码，比上面的插入排序快一点
 * @param {Array} a    数组
 * @param {Number} from 起始位置
 * @param {Number} to   终点位置
 */
function insertionSort2(arr) {
    console.time('2插入排序耗时：')
    for (var i = 1; i < arr.length; i++) {
        var element = arr[i];
        for (var j = i - 1; j >= 0; j--) {
            var tmp = arr[j];
            var order = tmp - element;
            if (order > 0) {
                arr[j + 1] = tmp;
            } else {
                break;
            }
        }
        arr[j + 1] = element;
    }
    console.timeEnd('2插入排序耗时：')
    return arr;
}

/**
 * 快速排序
 * @param  {Array} arr 数组
 * @return {Array}     数组
 */
var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
    // 取数组的中间元素作为基准
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];

　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
    //使用递归
　　return quickSort(left).concat([pivot], quickSort(right));
};