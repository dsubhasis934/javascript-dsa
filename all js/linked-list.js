class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head //when we change tail value this also change in heads because heads gives his memory address also in object
        this.size = 1
    }
    appendNode(newVal) {
        this.newObj = {
            value: newVal,
            next: null
        }
        this.tail.next = this.newObj;
        this.tail = this.newObj
        this.size += 1
    }
    traverseNode() {
        let counter = 0;
        let newNode = this.head;
        while (counter < this.size) {
            console.log(newNode)
            newNode = newNode.next
            counter++;
        }
    }
    deleteNode(index) {
        let counter = 1;
        let lead = this.head;
        if (index == 1) {
            this.head = this.head.next
        } else {
            while (counter < index - 1) {
                lead = this.head.next
            }
            let nextNode = lead.next.next
            lead.next = nextNode
            counter++;
        }
    }
    insertNode(index, value) {
        let counter = 1;
        let currentNode = this.head;
        while (counter < index) {
            counter++;
            currentNode = currentNode.next
        }
        let nextNode = currentNode.next;
        currentNode.next = {
            value: value,
            next: nextNode
        }
    }
    searchNode(value) {
        let result = undefined
        let lead = this.head;
        let loop = true;
        while (loop) {
            if (loop && lead.value == value) {
                loop = false;
                result = lead
            } else {
                loop = false;
                console.log("your element not found")
            }
            lead = lead.next
        }
        console.log(result)
    }
}
let l1 = new LinkedList(10);
l1.appendNode(20)
l1.appendNode(30)
l1.appendNode(40)
l1.appendNode(50)
// l1.traverseNode()
l1.deleteNode(2)
l1.insertNode(2, 500)
l1.searchNode(50)
// console.log(l1)