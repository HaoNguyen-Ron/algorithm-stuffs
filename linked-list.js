/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode();
    let current = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    if (list1) {
        current.next = list1;
    } else if (list2) {
        current.next = list2;
    }

    return dummy.next;
};

const list1 = [1,2,5]
const list2 = [2,3,9]
const mergedList = mergeTwoLists(list1, list2);
console.log(mergedList);