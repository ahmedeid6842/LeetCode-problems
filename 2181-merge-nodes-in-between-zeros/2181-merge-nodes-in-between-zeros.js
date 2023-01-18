class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let current = head.next;
    let newlist = new LinkedList();
    let sum = 0;
    while (current !== null) {
        sum += current.val;
        if (current.val == 0) {
            newlist.push(sum);
            sum = 0;
        }
        current = current.next;
    }
    return newlist.head;
};