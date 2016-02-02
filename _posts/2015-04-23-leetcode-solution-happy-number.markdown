---
layout: post
title:  "Leetcode Solution: Happy Number"
date:   2015-04-23
excerpt: ""
comments: true
---

This is an easy question.

The trick to this question is that you have to realize when the number goes into loop.
Basically there are these few cases:

1. result is 1 => return True
2. result is a new number => don't know if the number is happy or not, continue
3. result is as same as one we had previously => it goes in loop, because it's going to repeat the number. However, 1 is not in the loop. Thus => return False

In this case, we can use a list to keep track of all the numbers

The solution:


~~~ python
class Solution:
    def isHappy(self, n):
        '''
        determine if an integer is happy

        @param {integer} n
        @return {boolean}
        '''
        table = []
        n = self.convert(n)
        while n != 1:
            if n in table:
                return False
            else:
                table.append(n)
                n = self.convert(n)
        return True

    def convert(self, n):
        '''
        convert a integer to the sum of the square of digits

        @param {integer} n
        @return {integer} sum of digits
        '''
        res = 0
        while n > 0:
            temp = n % 10
            res += temp * temp
            n = n // 10
        return res


sol = Solution()
print sol.isHappy(13)
# prints True
~~~
