/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */


function pairSum(head) {
   const arr = [];
    let max = 0;
    
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    
    for (let i = 0; i < arr.length / 2; i++) {
        const sum = arr[i] + arr[arr.length - 1 - i]
        max = Math.max(max, sum);
    }
    
    return max;
}