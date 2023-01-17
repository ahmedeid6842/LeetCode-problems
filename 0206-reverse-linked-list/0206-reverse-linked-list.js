/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
      let current = null;
    let nextNode = head;
    while (head != null) {
        console.log(nextNode.val);
        nextNode = nextNode.next;
        head.next = current;
        current = head;
        head = nextNode;
    }
    return current;
};