function Stack(){
  this.items = []
}

// 压栈
Stack.prototype.push = function(ele){
 this.items.push(ele)
}
// 从栈中拿出元素
Stack.prototype.pop = function(){
 return this.items.pop()
}

// 查看栈顶元素
Stack.prototype.peek = function(){
 return this.items[this.items.length - 1]
}

// 判断是否为空
Stack.prototype.isEmpty = function(){
 return this.items.length === 0
}

// 
Stack.prototype.clear = function(){
 this.items.length = 0
}
// 获取元素个数
Stack.prototype.size = function(){
  return this.items.length
}
// toString 方法 再打印 stack时候会调用
Stack.prototype.toString = function(){
  let str = '';
  for(let i = 0; i < this.items.length; i++){
    str += this.items[i] + ','
  }
  return str;
}