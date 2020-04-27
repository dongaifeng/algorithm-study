function ArrayList(arr = []){

  this.arr = arr
}

ArrayList.prototype.insert = function(item) {
  this.arr.push(item)
}

ArrayList.prototype.toString = function(){
  return this.arr.join('-')
}