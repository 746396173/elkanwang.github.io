---
layout: post
title:  "API Design的一点读书笔记"
date:   2015-06-19
categories: reading material 
comments: true
---

API就是application programming interface。说到底，api其实是很简单的东西，就是export给别人的一个interface，告诉他们怎么来使用你开发的软件或者工具。所以，api的设计就会直接影响到继续开发的难度。好的api设计可以让别的开发者很好地在基于你的工具上再次开发。

好的API设计是很subjective的一件事情，但是有几点是大家都达到共识的。

1. Easy to learn and memorize
2. Leads to readable code
3. Hard to misuse
4. Easy to extend
5. Complete


#### Easy to Learn and Memorize

一个很容易学习的API一般都有conssitent naming conventions andpatterns， economy of concepts 和 predictability的特征。一个小的API容易记住是因为它没有什么东西好记的，但是一个好的API容易被记住是因为他的convention使你很容易可以reapply已经学会的东西。

#### Leads to Readable Code

Code is only written once, but read by many other people. 所以说，code的可读性也是非常重要的。

#### Hard to Misuse

好的API设计应该是让client可以很容易的使用，并且在使用的时候不容易出错，比如没有按特定的顺序，或者是有特殊的side effect。

#### Easy to Extend

#### Complete


然后，就说说到底应该怎么来设计API。通常来说，API的设计都是在几个人的合作下，经过很长一段时间推敲出来的结果。

1. Know the Requirements
2. Write Use Cases Before Write Any Code
3. Look For Similar APIs in the Same Library
4. Define the API Before You Implement It
5. Have Your Peers Review Your API
6. Write Several Examples Against the API
7. Prepare For Extensions
8. Don't Publish Internal APIs without Review
9. When in Doubt, Leave It Out

There is no a set of strict rules that you have to follow. However, here are some guidelines that you may want to consider when you are desining your own APIs.

First, the naming of the functions.

1. Choose Self-explanatory Names and Signatures

It really helps make sure that your API leads to readable code. It also helps people learn how to use your API. So, choose names to be self-explanatory and also make sure they are consistent.

2. Choose Unambiguous Names for Related Things
3. Beware of False Consistency
4. Avoid Abbreviations
5. Prefer Specific Names to General Names
6. Don't Be a Slave of an Underlying API's Naming Practices

Then, the semantics of your API.

1. CHoose Good Defaults
2. Avoid Making Your APIs Overly Clever
3. Pay Attention to Edge Cases

Then, the structure of your API.

1. Stive for Property-based API

e.g. setSize, setStyle, etc.


The above are the notes that I've taken when reading the API design written by Jasmin Blanchette. 

I haven't yet had the opportunity to design a vast API for my own yet. But certainly it was good read to get to know more about API and the considerations that I need take into account when I design my own API.

API is used very extensively in web development. When you are using a framework, either front-end or back-end, you are interacting with the framework through the API. When you are browsing a website, many API calls are running behind the scene handling different requests.
