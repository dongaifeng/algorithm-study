// import '../队列/queue.js'

class Graph {
  constructor(){
    this.vertexes= []; // 顶点
    this.edges = {}; // 边
  }

  // 添加顶点
  addVertex(v){
    this.vertexes.push(v)
    this.edges[v] = []
  }

  // 添加边
  addEdge(v1, v2){
    this.edges[v1].push(v2)
    this.edges[v2].push(v1)
  }

  toString(){
    let str = '';
    // 遍历各个顶点
    for(let i = 0; i < this.vertexes.length; i++){
      str += this.vertexes[i] + '->'
      let edges = this.edges[this.vertexes[i]]
      // 遍历当前顶点对应的边
      for(let j = 0; j < edges.length; j++ ){
        str += edges[j] + ' '
      }
      str += '\n'
    }
    return str
  }

  // 初始化各个顶点的颜色状态
  // 白色：未访问  灰色：未探测  黑色：已访问
  initializeColor(){
    let colors = [];
    for(let i = 0; i < this.vertexes.length; i++){
      colors[this.vertexes[i]] = 'white'
    }
    return colors
  }

  // 广度优先搜索
  bfs(initV, handler){

    // 初始化状态
    let colors = this.initializeColor()

    // 创建队列 将第一个顶点加入队列
    let queue = new Queue()
    queue.enqueue(initV);

    // 从队列头取出一个顶点，改变他的状态
    // 拿到他有边的顶点，遍历加入队列，然后执行回调，改变状态为已访问
    while(!queue.isEmpty()){
      let v = queue.dequeue();
      colors[v] = 'gray';
      let vList = this.edges[v];


      for(let i = 0; i < vList.length; i++){
        let e = vList[i]
        // 只有状态是 白色的才加入队列 防止重复加入队列
        if(colors[e] === "white") {
          colors[e] = 'gray'
          queue.enqueue(e)
        }
      }

      handler(v)
      colors[v] = 'black'
    }
  }

  // 深度优先搜索
  dfs(initV, handler){
    let colors = this.initializeColor()
    // 递归遍历
    this.dfsVisit(initV, colors, handler)
  }

  dfsVisit(vert, colors, handler){
    colors[vert] = 'gray'
    
    let edges = this.edges[vert]
    for(let i = 0; i < edges.length; i++){
      let edge_vert = edges[i]
      if(colors[edge_vert] == 'white'){
        this.dfsVisit(edge_vert, colors, handler)
      }
    }
    handler(vert)
    colors[vert] = 'black'
  }
}




