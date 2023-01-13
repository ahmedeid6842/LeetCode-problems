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
var deleteDuplicates = function(head) {
    if (head == null) {
        return head;
    }
    let current = head;
    let nextNode = current.next;
    while (current.next != null) {
        if (current.val == nextNode.val) {
            current.next = nextNode.next;
            nextNode = nextNode.next ;
        } else {
            current = nextNode;
            nextNode = current.next;
        }
    }
    return head;
};