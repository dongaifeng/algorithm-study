class HashTable {
  constructor() {
    this.storage = []
    this.count = 0
    this.limit = 7
  }

  // 添加
  put(key, value) {
    // 通过哈希函数 得到哈希值
    const index = this.hashFunc(key, this.limit);

    // 找到对应位置的 桶（bucket 也是一个数组）
    let bucket = this.storage[index];
    // 如果桶不存在局创建一个桶
    if (bucket === undefined) {
      bucket = []
      this.storage[index] = bucket
    }

    // 遍历查找key 对应的元组（tuple 也是数组）
    // 如果找到就覆盖 找不到就直接push
    let overide = false
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value
        overide = true
      }
    }

    if (!overide) {

      bucket.push([key, value])
      this.count++;
      // 当数组长度大于某个数值后 就扩容
      if (this.count > this.limit * 0.75) {
        this.resize(this.getPrime(this.limit * 2))
      }
    }
  }

  get(key) {
    const index = this.hashFunc(key, this.limit)

    const bucket = this.storage[index]

    // 如果桶不存在直接返回null 如果存在就遍历桶
    if (bucket === undefined) { return null }

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) { return tuple[1] }
    }

    return null;

  }

  remove(key) {
    const index = this.hashFunc(key, this.limit);
    const bucket = this.storage[index];
    if (bucket === undefined) { return null };

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      bucket.splice(i, 1)
      this.count--;

      // 当删除元素后 数组的长度小于某个值时候 缩小 数组长度
      if (this.limit > 8 && this.count < this.limit * 0.25) {
        this.resize(Math.floor(this.getPrime(this.limit / 2)))
      }
      return tuple[1]
    }
  }

  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count;
  }

  resize(newLimit) {
    let oldStorage = this.storage
    this.limit = newLimit
    this.storage = []
    this.count = 0

    oldStorage.forEach(bucket => {
      if (bucket === null) { return }
      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    })
  }

  // 哈希函数
  hashFunc(str, max) {
    let hashCode = 0;

    for (let i = 0; i < str.length; i++) {
      hashCode = 31 + hashCode + str.charCodeAt(i)
    }

    hashCode = hashCode % max
    return hashCode
  }

  // 获取质数
  getPrime(num) {
    while (!this.isPrime(num)) {
      num++
    }
    return num
  }

  // 验证是不是质数
  isPrime(num) {
    let temp = Math.ceil(Math.sqrt(num));
    for (let i = 2; i < temp; i++) {
      if (num % i === 0) {
        return false
      }
    }

    return true
  }
  // isPrime(num){
  //   for(let i = 0; i < num; i++){
  //     if(num % i === 0){
  //       return false
  //     }
  //   }
  //   return true
  // }
}