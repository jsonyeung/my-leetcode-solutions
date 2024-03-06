/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // find midpoint for slow
    /*
        1 2 3 4
          ^   ^ 
        
        1 2 3 4 5
            ^      ^
    */
    let slow = head
    let fast = head.next

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // reverse second half
    /*
        1 -> 2 -> 3 -> null,  4 <- 5 
    */
    let second = slow.next
    let prev = null
    slow.next = null

    while (second) {
        let temp = second.next
        second.next = prev
        prev = second
        second = temp
    }

    // merge two halfs
    /*
        1 -> 5 -> 2 -> 4 -> 3 -> null,  
             |         |
    */
    let first = head
    second = prev

    while (second) {
        let temp1 = first.next
        let temp2 = second.next

        first.next = second
        second.next = temp1

        first = temp1
        second = temp2
    }
};