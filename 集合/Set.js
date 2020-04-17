class Set {
  constructor(){
    this.items = {}
  }

  add(val){
    if(this.has(val)) return false

    this.items[val] = val
    return true
  }

  has(val){
    return this.items.hasOwnProperty(val)
  }

  remove(val){
    if(!this.has(val)) return false

    delete this.items[val]
    return true
  }
  clear(){
    this.items = {}
  }

  values(){
    return Object.keys(this.items)
  }

  size(){
    return Object.keys(this.items).length
  }

  union(otherSet){
    let set =  new Set()
    let values = this.values()

    for(var i = 0; i < values; i++){
      set.add(values[i])
    }

    values = otherSet.values()
    for(var i = 0; i < values; i++){
      set.add(values[i])
    }

    return set
  }
}