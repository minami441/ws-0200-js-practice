
/**
 *  数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */

function sumSequence (n, sum = 0) {
  if(n==0)return 0
    return n + sumSequence(n-1)
}

/**
 *  フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */

function fibonacci (num, index = 0, array = []) {
  if(num==index){
    return array
  }
  
  if(index<2){
    array.push(1)
  }else{
    array.push(array[index-2]+array[index-1])
  }

  return fibonacci(num,index+1,array)
}


/**
 *  2.4.2 ディレクトリに含まれるファイルサイズの合計
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 *
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0,
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0,
 *          children: [
 *            {
 *              type: 'folder',
 *              size: 0,
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]
 *    }
 *    => 38
 */

function fileSize (node, sum = 0) {
  if(node['type']=='folder'){
    node['children'].forEach((value, index, array) => {
        if(value['type']=='folder'){
            sum=sum+fileSize(value)
        }
        if(value['type']=='file'){
            sum=sum+value['size']
        }
    });
  }else if(node['type']=='file'){
      sum=sum+node['size']
  }
return sum

}


module.exports = {
  sumSequence,
  fibonacci,
  fileSize
}
