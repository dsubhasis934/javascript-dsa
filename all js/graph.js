class Graph {
    constructor() {
        this.vertices = {}
    }
    addVertices(node) {
        if (!this.vertices[node]) {
            this.vertices[node] = []
        }
    }
}
let v1 = new Graph();
v1.addVertices("a");
v1.addVertices("b")
console.log(v1)