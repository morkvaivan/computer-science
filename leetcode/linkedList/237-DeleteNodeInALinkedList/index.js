/**
237. Delete Node in a Linked List
https://leetcode.com/problems/delete-node-in-a-linked-list/description/

Write a function to delete a node (except the tail) in a singly linked list,
given only access to that node.

Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node
with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Approach: Swap with Next Node
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
let deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};