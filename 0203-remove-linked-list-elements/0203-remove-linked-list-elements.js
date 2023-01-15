/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
        let pre = head, current = head;

    while (current && current.val === val) {
        current = current.next;
        head.next = null;
        head = current
    }

    while (current !== null) {
        if (current.val == val) {
            pre.next = current.next;
            current.next = null
            current = pre.next;
        } else {
            pre = current;
            current = current.next;
        }
    }
    return head;
};