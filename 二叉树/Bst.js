class Bst {
  constructor() {
    this.root = null;
  }

  // 插入
  insert(key) {
    const newNode = new Node(key);
    if (this.root === null) { this.root = newNode }
    else { this.insertNode(this.root, newNode) }
  }

  // 递归方法 一层一层向下遍历 直到某个节点为null，就把newNode给他
  // key值大于根节点向右边遍历，相反向左
  insertNode(node, newNode) {
    if (newNode.key > node.key) {
      if (node.right == null) { node.right = newNode }
      else { this.insertNode(node.right, newNode) }
    } else {
      if (node.left === null) { node.left = newNode }
      else { this.insertNode(node.left, newNode) }
    }
  }

  // 删除节点
  remove(key) {
    //  查找要删除的节点 如果没有不需要删除
    let current = this.root
    let parent = null
    let isLeftChild = true
    while (current.key != key) {
     
      parent = current
      if (key > current.key) {
        current = current.right
        isLeftChild = false
      } else {
        current = current.left
        isLeftChild = true
      }
      if (current == null ) { return false }
    }

    console.log(current, 'curerent')


    // 找到了 current
    // 1 叶子节点  让其父节点的指引 = null
    if (current.right == null && current.left == null) {
      if (current === this.root) {
        this.root = null
      } else if (isLeftChild) {
        parent.left = null
      } else {
        parent.right = null
      }
    }
    // 2 有一个节点 让其父节点 指向其 子节点
    else if (current.right === null) {
      if (current === this.root) {
        this.root = current.left
      } else if (isLeftChild) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    }

    else if (current.left === null) {
      if (current == this.root) {
        this.root = current.right
      } else if (isLeftChild) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    }

    // 3 有两个子节点
    else {
      // 使用后继法 找到 右边可以替代要删除的元素的元素（是delNode右边部分最小的元素） 叫做T
      // T的右边部分 连接到 delNOde 的右边部分
      // 还有前承发 找到delNode左边最大的元素

      let succssor = this.getSuccssor(current)
      if(current == this.root){
        this.root = succssor
      } else if (isLeftChild){
        parent.left = succssor
      } else {
        parent.right = succssor
      }

      succssor.left = current.left
    }

    return true
  }

  getSuccssor(delNode){
    let succssorParent = delNode;
    let succssor = delNode;
    let current = delNode.right;
    // 寻找节点
    while(current != null){
      succssorParent = succssor
      succssor = current
      current = current.left
    }
    // 如果后继节点不是删除节点的右节点
    if(succssor != delNode.right){
      succssorParent.left = succssor.right
      succssor.right = delNode.right
    }

    return succssor
  }

  // 查找书里面有没有某元素 递归
  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (node === null) return false;
    if (key < node.key) { this.searchNode(node.left, key) }
    else if (key > node.key) { this.searchNode(node.right, key) }
    else { return true }
  }

  // 查找书里面有没有某元素 循环
  search2(key) {
    let node = this.root;

    while (node !== null) {
      if (key > node.key) {
        node = node.right
      } else if (key < node.key) {
        node = node.left
      } else {
        return true
      }
    }

    return false
  }

  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);

  }
  preOrderTraverseNode(node) {
    if (node === null) return;
    console.log(node.key);
    this.preOrderTraverseNode(node.left);
    this.preOrderTraverseNode(node.right)
  }

  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  inOrderTraverseNode(node) {
    if (node === null) return;
    this.inOrderTraverseNode(node.left);
    console.log(node.key);
    this.inOrderTraverseNode(node.right);
  }

  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  postOrderTraverseNode(node) {
    if (node === null) return;
    this.postOrderTraverseNode(node.left);
    this.postOrderTraverseNode(node.right);
    console.log(node.key);
  }

  min() {
    let node = this.root;
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }

  max() {
    return this.maxNode(this.root)
  }
  maxNode(node) {
    if (node.right === null) { return node.key };
    return this.maxNode(node.right)
  }




























}

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}