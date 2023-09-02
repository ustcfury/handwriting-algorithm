function countWaysToSplit(arr) {
  let count = 0;

  function backtrack(start, group, product) {
    if (group === 3) {
      if (product > 1) count++;
      return;
    }

    for (let i = start; i < arr.length; i++) {
      // 将当前元素加入到当前组，并更新乘积
      const newProduct = product * arr[i];
      if (newProduct > 1) {
        // 如果当前组的乘积大于1，继续搜索下一组
        backtrack(i + 1, group + 1, newProduct);
      }
    }
  }

  // 从数组的第一个元素开始搜索，当前处于第1组
  backtrack(0, 1, 1);

  return count;
}

// 示例
const arr = [2, 3, 4, 5, 6];
console.log(countWaysToSplit(arr)); // 输出：10
