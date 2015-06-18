---
layout: post
title:  "Javascript Updates"
date:   2015-06-16
excerpt: "Some new stuff that I've leanrt for Javascript"
comments: true
---

很久很久都没有更新博客了。既然把他建立起来了，还是要经常更新的，也当做鼓励自己要好好的学习下去。    
近期都在忙着上课，考试，还有为了面试而刷题。等过了下周也可以把最近的面试题来总结一下。  

接下来，进入正题。这篇主要来update一下最近微信频道 前端大全 推荐的好文。

###Closure

首先就是面试卡壳的Javascript closure。

其主要有三大特性：

1. 函数嵌套函数
2. 函数内部可以饮用外部的参数和变量
3. 参数和变量不会被垃圾回收机制回收

closure是指有权利access另一个function scope里面的variable的function，创建closure最常见的方式就是在一个function里创建另一个function，然后通过里面的function来acces这个function的local variable。而其优点也是缺点就是可以吧local variable留在buffer里，避免使用global variable。主要是因为global variable容易pollute global environment，因为所有function都可以access。所以，推荐使用私有的，封装起来的local variable。因为在普通function被execute之后，local variable就会被garbage collector回收掉。存在memory里面的只有global variable。

下面就是一个closure的例子


```javascript
function fn() {
    var a = 0;
    function f() {
        console.log(a++);
    }
    return f;
}

b = fn()
b(); // 1
b(); // 2
b(); // 3
```

接下来，我们来看看里面到底发生了什么。首先我们得知道function f就是所谓的closure，我们看到它被wrap在function fn里面，而且访问了在它scope之外的variable a。这是为什么呢？原因在于function f被赋予了一个global variable b，导致永久存在于memory，而f is depended on fn，所以导致fn也始终存在于memory里，所以a不会被回收掉。

而下面这个例子就是一个bad example

```
list = []
for (var i=0; i<5; i++) {
    ~function(i) {
        list[i] = function(i) {
            console.log(i);
        }(i)
    }
}
```

如果不使用closure，print出来的永远都是6。
而正是因为这个原因，它可以用于：

1. modularization
2. setting private members


### 10个javascript性能提升的技巧

1. use local variable
当一个variable被引用的时候，js就会在作用域链重的不同的成员中查找这个variable。作用域链指在当前作用下可用的var的集合，通常分为global variable和local variable。  
简单地来说，如果js在作用域链中查找的深度越大，操作消耗的时间越多。引擎首先从this开始查找local variable，然后是function参数，本地定义的var，最后是所有的global var。因为局部变量在这条链的起端，所以速度是最快的。所以如果要用global var很多次的时候，最好是先定义成局部变量。比如：

```javascript
    var a = document.getElementById('myID');
    var b = document.getElementById('yourID');
```

就应该改写成

```javascript
    var doc = document,
    a = doc.getElementById('myID'),
    b = doc.getElementById('yourID');
```

2. 不要使用with()
with()会再作用域链最前端添加额外的变量。

3. 小心使用closure
包括 closure variable, global variable, local variable

4. 对象属性和数组元素都比变量慢
一般来说，js的data一般有四种方式来access：数值，变量，对象属性，数组元素

5. 不要在数组中挖很深

6. 不要使用for-in

7. 在loop的时候把控制条件和控制变量合并起来

8. 为HTML集合对象定义数组

9. 不要碰DOM

10. 修改css类，而不是style
