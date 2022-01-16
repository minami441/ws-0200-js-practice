
/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

function linearSearch (array, target) {
  var ret=-1

  array.forEach((value, index, array) => {
    if(value==target){
      ret=index
    }
  });
  return ret
}

/**
 *  2.3.2 バイナリサーチ
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

function binarySearch (array, target) {
  var mid=Math.round(array.length/2)
  var high=array.length
  var low=1
  var ans=-1
  
  while(1){
  if(high==low)break
      if(target==array[mid-1]){
          ans=mid-1
          break;
      }
      else if(array[mid-1]<target){
          low=mid
          mid=Math.round((low+high)/2)
      }
      else if(target<array[mid-1]){
          high=mid
          mid=Math.round((low+high)/2)
      }
  }
  return ans
}

module.exports = {
  linearSearch,
  binarySearch
}
