function toCameCase(str) {
  console.log(str, 546);
  const arr = str.split('-'); // spilt切割,border,top,color
  console.log(arr); // [border,top,color]
  for (let i = 1; i < arr.length; i++) {
    // 循环遍历数组
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    console.log(arr[i]); // [border,Top,Color]
    console.log(33333333); // [border,Top,Color]
  }
  return arr.join(''); // 字符串给加起来
}

module.exports = toCameCase;
