function ArrayList(arr = []) {

  this.arr = arr
}

ArrayList.prototype.insert = function (item) {
  this.arr.push(item)
}

ArrayList.prototype.toString = function () {
  return this.arr.join('-')
}

// 两个下标元素 互换位置
ArrayList.prototype.swap = function (m, n) {
  let temp = this.arr[m]
  this.arr[m] = this.arr[n]
  this.arr[n] = temp
}

// 冒泡排序
ArrayList.prototype.bubbleSort = function () {
  let length = this.arr.length

  // 反向遍历 设置内层循环的终点
  for (let k = length - 1; k >= 0; k--) {

    // 遍历 比较 i， i+1 位置的元素
    for (var i = 0; i < k; i++) {
      if (this.arr[i] > this.arr[i + 1]) {
        this.swap(i, i + 1)
      }
    }
  }

}

// 选择排序
ArrayList.prototype.selectSort = function () {
  let length = this.arr.length

  // 遍历找出最小的数，放到头部
  for (let k = 0; k < length - 1; k++) {

    var min_index = k;
    // 找出最小的，放到头部, 然后设置骑士遍历位置
    for (let i = k + 1; i < length; i++) {
      if (this.arr[min_index] > this.arr[i]) {
        min_index = i
      }
    }
    this.swap(k, min_index)
  }


}
// 插入排序
ArrayList.prototype.insertSort = function () {
  let length = this.arr.length

  // 从下标为1 开始，依次拿出 基数
  for (let i = 1; i < length - 1; i++) {
    let j = i; // 保存基数的位置
    let temp = this.arr[i] // 保存基数的值

    // 当基数的前一个位置比基数大，就互换。
    // 因为是j 跟j-1比较 所以j只能到 1
    while (j > 0 && this.arr[j - 1] > temp) {
      this.arr[j] = this.arr[j - 1]
      j--
    }
    // 将选出的位置放上 基数 完成互换
    this.arr[j] = temp
  }
}

// 希尔排序
ArrayList.prototype.shellSort = function () {
  let length = this.arr.length
  // 计算增量 步长
  let gap = Math.floor(length / 2)

  // 增量不断减小， 直到为1
  while (gap > 0) {

    // 插入排序 这里不是比较基数之前的数了，
    // 而是把 0， 0+gap， 0+gap+gap ...等拿出来依次比较
    // 相当于 基数跟 基数-gap比较大小互换，再跟 基数-2*gap比较
    for (var i = gap; i < length; i++) {
      let j = i // 保存基数的位置，也就是第一个增量的位置
      let temp = this.arr[i] // 保存基数值

      // 当基数比 基数-gap位置的值小，就互换，直到gap位置
      while (j > gap - 1 && this.arr[j - gap] > temp) {
        this.arr[j] = this.arr[j - gap]
        j -= gap
      }

      this.arr[j] = temp
    }
    // 重新计算步长，相当于减小步长
    gap = Math.floor(gap / 2)
  }

}


ArrayList.prototype.median = function (left, right) {
  // 计算出中间位置
  let center = Math.floor((left + right) / 2);

  // 比较 三个位置的数 排序
  if (this.arr[left] > this.arr[center]) { this.swap(left, center) }
  if (this.arr[center] > this.arr[right]) { this.swap(center, right) }
  if (this.arr[left] > this.arr[center]) { this.swap(left, center) }

  // 将中间项，也就是枢纽 移动到 倒数第二位置，因为倒数位置一定比中间的大
  this.swap(center, right - 1);

  // 返回枢纽值
  return this.arr[right - 1]
}

ArrayList.prototype.quickSort = function () {
  this.quick(0, this.arr.length - 1)
}

ArrayList.prototype.quick = function (i, j) {
  if (i < j) {
    let left = i;
    let right = j;
    let pivot = this.arr[left];
    while (i < j) {
      while (this.arr[j] >= pivot && i < j) {  // 从后往前找比基准小的数
        j--;
      }
      if (i < j) {
        this.arr[i++] =  this.arr[j];
      }
      while ( this.arr[i] <= pivot && i < j) {  // 从前往后找比基准大的数
        i++;
      }
      if (i < j) {
        this.arr[j--] =  this.arr[i];
      }
    }
    this.arr[i] = pivot;
    this.quick( left, i - 1);
    this.quick( i + 1, right);
  }














  // let pivot = this.median(left, right)
  // let i = left
  // let j = right - 1

  // while(i < j) {

  //   while(this.arr[i] < pivot) {
  //     i++
  //   }

  //   while(this.arr[j] > pivot) {
  //     j--
  //   }


  //   if(i < j) {
  //     this.swap(i, j)
  //   } else {
  //     break
  //   }


  // }
  // if(i < j) this.swap(i, right -1)

  // this.quick(left, i - 1)

  // this.quick(i + 1, right)




}