class LinkenList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // 添加
  append(data) {
    let newNode = new Node(data)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode

    }
    this.length += 1
  }

  // 插入节点
  insert(position, data) {
    if (position < 0 || position > this.length) return false
    let newNode = new Node(data)

    // 如果当前链表为空 就直接插入
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      // 然后判断position的位置 1 在头 2 在尾 3 在中间
      if (position === 0) {
        // 先将新链表的第一个node的prev指向newNode，然后newNode的next指向 链表第一个node，然后将head指向newNode
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      } else if (position === this.length) {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      } else {
        let current = this.head
        let index = 0
        while (index++ < position) { // 当index===position时 current 就是链表里position位置的node
          current = current.next
        }

        newNode.next = current
        newNode.prev = current.prev
        current.prev.next = newNode
        current.prev = newNode
      }

    }
    this.length += 1
    return true
  }

  get(position){
    if (position < 0 || position > this.length) return false
    let current = this.head
    let index = 0
    while(index++ < position){
      current = current.next
    }

    return current.data
  }

  indexOf(data){
    if (position < 0 || position > this.length) return false
    let current = this.head
    let index = 0
    while(current){
      if(current.data === data){
        return index
      }
      current = current.next
      index +=1
    }

    return -1
  }

  update(position,newData){
    if (position < 0 || position > this.length) return false
    let current = this.head
    let index = 0
    while(index++ < position){
      current = current.next
    }
    current.data = newData
    return true

  }

  removeAt(position){
    if(position < 0 || position> this.length) return null
    let index = 0
    let current = this.head

    if(this.length == 1){
      this.head = this.tail = null
    } else {
      if(position === 0) {
        this.head.next.prev = null
        this.head = this.head.next
      } else if(position === this.length-1) {
        this.tail.prev.next = null
        this.tail = this.tail.next
      } else {
        
        while(index++ < current){
          current = current.next
        }
        current.prev.next = current.next
        current.next.prev = current.prev
      }

      this.length -= 1
      return current
    }



  }

  remove(data) {
    let index = this.indexOf(data)
    return this.removeAt(index)
  }

  // 获取某节点
  get(position) {
    if (position < 0 || position > this.length) return false
    let flag = position > (this.length / 2)
    let current = flag ? this.tail : this.head
    let index = flag ? this.length : 0

    while (index < position) {
      index = flag ? --index : ++index
      current = flag ? current.prev : current.next
    }

    return current.data
  }
  toString() {
    return this.backwardString()
  }

  // 从前向后 输出字符串
  backwardString() {
    let current = this.head;
    let str = '';

    while (current) {
      str += current.data + ' '
      current = current.next
    }

    return str
  }

  // 从后向前 输出字符串
  forwardString() {
    let current = this.tail
    let str = ''

    while (current) {
      str += current.data + ' '
      current = current.prev
    }

    return str
  }
}

class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }

}