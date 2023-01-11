class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

 class ListNode {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let node = new Node(value);
        if (this.head == null) {
            this.head = node
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }   
}

 
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let currentList1 = list1, currentList2 = list2;
    let newList = new ListNode();
    while (currentList1 !== null && currentList2 !== null) {
        if (currentList1.val < currentList2.val) {
            newList.push(currentList1.val);
            currentList1 = currentList1.next
        } else if (currentList1.val > currentList2.val) {
            newList.push(currentList2.val);
            currentList2 = currentList2.next
        } else {
            newList.push(currentList1.val);
            currentList1 = currentList1.next
            newList.push(currentList2.val);
            currentList2 = currentList2.next
        }
    }
    while (currentList1 !== null) {
        newList.push(currentList1.val);
        currentList1 = currentList1.next
    }
    while (currentList2 !== null) {
        newList.push(currentList2.val);
        currentList2 = currentList2.next
    }
    return newList.head;
};