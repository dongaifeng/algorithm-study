class Queue {
  constructor() {
    this.items = []
  }
  // 添加
  enqueue(ele) {
    this.items.push(ele)
  }
  // 从前删除一个元素
  dequeue() {
    return this.items.shift()
  }
  // 查看前端的元素
  front() {
    return this.items[0]
  }
  // 是否为空
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }

  toString() {
    let str = ''
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' '
    }
    return str
  }

}