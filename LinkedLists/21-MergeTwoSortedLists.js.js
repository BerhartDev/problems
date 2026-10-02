/*
21. Merge Two Sorted Lists
Easy
Topics
premium lock icon
Companies
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
 */

//-------------------------------------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Iterative version:
var mergeTwoLists = function(list1, list2) {
    // Step 1: dummy node and tail pointer
    const dummy = new ListNode();
    let tail = dummy;

    // Step 2: while both lists have nodes, compare the fronts
    while (list1 && list2) {
        // Step 3: attach the smaller one and move that list forward
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        // Step 4: move tail onto the node just attached
        tail = tail.next;
    }

    // Step 5: attach whatever is left (one list may still have nodes)
    tail.next = list1 || list2;

    // Step 6: the real list starts after the dummy
    return dummy.next;
};
/*
Runtime 0ms Beats 100%
Memory 57.54MB Beats 49.99%
*/

// Recursive version:
var mergeTwoLists2 = function(list1, list2) {
    if (!list1) return list2;   // base cases: one list is empty
    if (!list2) return list1;

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
/*
Runtime 0ms Beats 100%
Memory 57.54MB Beats 74.12%
*/