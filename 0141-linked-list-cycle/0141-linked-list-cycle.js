class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.visited = false;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return node;
    }
}

var hasCycle = function(head) {
     let current = head;
    while (current !== null) {
        if (current.visited == true) {
            return true;
        }
        current.visited = true;
        current = current.next;
    }
    return false;
};