function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const mergeTwoLists = (list1, list2) => {
    let head = null;
    if (!list1 || !list2){
        return list1 || list2;
    }
    if (list1.val < list2.val){
        head = list1;
        head.next = mergeTwoLists(list1.next, list2);
    }   else    {
        head = list2;
        head.next = mergeTwoLists(list1,list2.next)
    }
    return head;
};
console.log(mergeTwoLists([1,2,4],[1,3,4]))
