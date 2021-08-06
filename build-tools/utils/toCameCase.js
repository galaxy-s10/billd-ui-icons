function toCameCase(str) {
  const arr = str.split('-'); // spilt切割
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    // 循环遍历数组
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  }
  return arr.join(''); // 字符串给加起来
}

module.exports = toCameCase;
