function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const isSameTree = (p,q) => {
    return JSON.stringify(p) === JSON.stringify(q);
}
