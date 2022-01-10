/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  var tmp=str.split('')
  
  var arrayempty = []

tmp.forEach((value, index, array) => {

var key=index+num

if(num<0){
  if(key<0){key=key+tmp.length}
}else{
  if(tmp.length-1<key){key=key-tmp.length}
}

arrayempty[key]=value
});
  return arrayempty.join('')
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  tmp=str.split('')
  newarr=[]
  tmp.forEach((value, index, array) => {
    const result = value.match(/[aiueo]/);
    if(!result){
      newarr.push(value)
    }
  });
  return newarr.join('')
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
let count = 0;
let idx = 0;
idx = s1.indexOf(s2);

while(idx != -1){
　count++; idx = s1.indexOf(s2, idx + 1);
}
return count
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  var rev=str.split('').reverse().join('')
  if(rev==str){
    return true
  }else{
    return false
  }
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
      if(num==1)return false
      if(num==2 || num==3){
        return true
      }else if(num%2!=0 && num%3!=0){
        return true
      }else{
      return false
      }
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  var count=0
  for(let i=0; i<array.length;i++){
    if(!(array[i]==4 || array[i-1]==4)){
      count=count+array[i]
     }
  }

  return count
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}
