class Queue {
    constructor(size) {
        this.max = size;
        this.items = new Array(size);
        this.front = -1;
        this.rear = -1;
        this.current = 0;
    }
    enqueue(val) {
        if (this.current != this.max) {
            if (this.rear == this.max - 1) {
                this.rear = 0;
            } else {

                this.rear = this.rear + 1;
            }
            this.items[this.rear] = val;
            this.current = this.current + 1;
            if (this.front == -1) {
                this.front = this.rear
            }
        }
    }
    dequeue() {
        if (this.current != 0) {
            this.items[this.front] = null;
            if (this.front == this.max - 1) {
                this.front = 0;
            } else {
                this.front = this.front + 1;
            }
            this.current = this.current - 1;
        } else {
            this.front = -1;
            this.rear = -1;
            alert("queue is empty")
        }
    }
}
let q = new Queue(5);
q.enqueue(20);
console.log(q)