---
layout: post
title:  "Leetcode Solution: Binary Search Iterator"
date:   2015-03-31
categories: leetcode
excerpt: ""
---

# Binary Search Iterator

### Initialization
Initializing a binary search iterator, to create a stack to store all the most left nodes.

### hasNext
When asking if there is a next smallest number, we can just ask for if the stack that we built is empty.  
If it's empty, then there is no more numbers.  
If it isn't, then we can find the next smallest number

### next
When asking for the next smallest number, the next smallest number is the last thing inserted into the stack. So pop the stack, `node = self.stack.pop()` , to get the next smallest number.  
But also, we take a subtree rooted at the right child of the node. And keep all the left most nodes of the subtree into our stack. This way, we are able to scanning the binary tree and always output the next smallest number.

--------
The code:  

{% highlight python linenos %}

# Definition for a  binary tree node
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class BSTIterator:
    # @param root, a binary search tree's root node
    def __init__(self, root):
        self.stack = []
        while root is not None:
            self.stack.append(root)
            root = root.left


    # @return a boolean, whether we have a next smallest number
    def hasNext(self):
        return self.stack


    # @return an integer, the next smallest number
    def next(self):
        node = self.stack.pop()
        x = node.right
        while x:
            self.stack.append(x)
            x = x.left
        return node.val
{% endhighlight %}
