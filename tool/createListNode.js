function ListNode(val) {
    this.val = val;
    this.next = null;
}
let a = new ListNode(-129)
let b = a.next = new ListNode(-129)

module.exports = function (arr) {
    let result = res = {
        next: null
    }
    while (arr.length) {
        res = res.next = new ListNode(arr.shift())
    }
    return result.next
}