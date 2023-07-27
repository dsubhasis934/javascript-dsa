let queue = [];
let queueSize = queue.length;
let maxSize = 5;
function enqueue(item) {
    if (queueSize <= maxSize) {
        queue[queueSize] = item;
        queueSize = queueSize + 1
        console.log(queue)
    }
}
function dequeue() {
    for (let i = 0; i < queue.length - 1; i++) {
        queue[i] = queue[i + 1];
        queueSize = queueSize - 1
        queue.length = queueSize
        console.group(queue)
    }
}
enqueue(10);
enqueue(20)
dequeue()
enqueue(40)
