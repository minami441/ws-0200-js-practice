/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort (array) {

  for(let i=0;i<array.length;i++){
    for(let p=0;p<array.length;p++){
      if(array[i]<array[p]){
        var tmp=array[i]
        array[i]=array[p]
        array[p]=tmp
      }
    }
  }

  return array
}

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort (array) {
  for(let i=0;i<array.length;i++){
    for(let p=0;p<i;p++){
      if(array[i]<array[p]){
        var tmp=i
        var box=array[i]
        while(p<=tmp){
          tmp--
          array[tmp+1]=array[tmp]
        }
        array[tmp+1]=box
        }
      }
    }
  return array
}

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort (arr) {

  var num=Math.floor(arr.length/2)
  var left=arr.slice(0,num)
  var right=arr.slice(num)
  
  arr=merge(left,right)
    return arr

}

function merge(left, right) {
  if(left.length>1){
    var num=Math.floor(left.length/2)
    var left_left=left.slice(0,num)
    var left_right=left.slice(num)

    var left=merge(left_left,left_right)
}
if(right.length>1){
    var num=Math.floor(right.length/2)
    var right_left=right.slice(0,num)
    var right_right=right.slice(num)
    var right=merge(right_left,right_right)

}

var arr=left.concat(right)
arr.sort((a, b) => a - b)

return arr
}

/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort (a, start = 0, end = (a.length -1)) {
  return a
};

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort
}
