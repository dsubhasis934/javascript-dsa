class node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}
class bst {
    constructor() {
        this.root = null; //we set root null by default
    }
    isRootEmpty() {
        return this.root === null
    }
    addNode(value) {
        let newNode = new node(value);
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertOne(this.root, newNode)
        }

    }
    insertOne(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {

                root.left = newNode
            } else {
                this.insertOne(this.root.left, newNode)
            }
        } else {
            if (root.right === null) {

                root.right = newNode
            } else {
                this.insertOne(this.root.right, newNode)
            }
        }
    }
    searchNode(root, value) {
        console.log(root)
        if (root === null) {
            return false
        } else if (root.value == value) {
            return true
        } else if (value < root.value) {
            return this.searchNode(root.left, value) //if we dont use refturn statement,then it gives undefined
        } else {
            return this.searchNode(root.right, value)
        }
    }
    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left); //this recursion done until it not found root.left
            this.preOrder(root.right)//if he not found root.left then this recursion called
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    bfs(root) {
        let queue = [];
        queue.push(root)
        while (queue.length) {
            let current = queue.shift();
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
            console.log(current.value)
        }
    }
    minValue(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.minValue(root.left)
        }
    }
    maxValue(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.maxValue(root.right)
        }
    }
}
let b = new bst();
b.addNode(10);
b.addNode(5)
b.addNode(20)
b.addNode(9)
b.addNode(3)
b.addNode(11)
// console.log(b)
// b.preOrder(b.root)
// b.inOrder(b.root)
// b.postOrder(b.root)
// b.bfs(b.root)
// let a = b.minValue(b.root)
// let x = b.maxValue(b.root)
// console.log(x)

// b.searchNode(b.root, 9)
// console.log(b.searchNode(b.root, 3))
