function TreeNode(val,left,right){
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const inorderTraversal = (root) => {
    let res = [];
    const bypassing = (node) => {
        if (node) {
            bypassing(node.left);
            res.push(node.val);
            bypassing(node.right);
        }
    };
    bypassing(root);
    return res;
};