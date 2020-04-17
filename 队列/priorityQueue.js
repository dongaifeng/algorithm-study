class PriorityQueue {
  constructor() {
    this.items = []
  }

  enqueue(ele, priority) {
    let queueElement = new QueueElement(ele, priority)

    if (this.items.length === 0) {
      this.items.push(queueElement)
    } else {
      let added = false;
      for (var i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) {
        this.items.push(queueElement)
      }
    }
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
      str += this.items[i].element + ' '
    }
    return str
  }
}


class QueueElement {
  constructor(ele, priority) {
    this.element = ele;
    this.priority = priority
  }
}