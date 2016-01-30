---
layout: post
title:  "Interview Tips From Palantir"
date:   2015-05-11
excerpt: "Some interview tips from Palantir blog"
comments: true
---


## System Design

- Concurrency: threads, deadlock, starvation, how to parallelize algoriths, consistency, coherence
- Networking: IPC, TCP/IP, difference between throughput and latency
- Abstraction: how an OS, file system and database work, various levels of caching in a modern OS
- Real-world Performance: relative performace of RAM ,disk, SSD and network
- Estimation
- Availability and Reliability: how things can fail in distributed environment, how to design a system to cope with network failures, durability

#### How to Prepare for the Interview
- Do mock design sessions
- Work on an actual system
- Do back-of-the-envelope calculations for something you are building and then write micro-benchmarks to verify them
- Study open source projects (Dig into the performace characteristics of an open source system)
- Learn how databases and operating systems work

##Coding Interview

####Clean and correct code
- Readable, maintainable and extensible
- Debugging ability, problem-solving and analytical skills, creativity, and an understanding of the ecosystem that surrounds production code

#### Suggestions
1. Before you start coding
	- Make sure you understand the problem. Clarify all the requirements with interviewers
	- Work through simple examples. It may help you recognize additional cases and patterns
	- Make a plan. Think about program's high-level structure
	- Choose your language. C++/Java/pseudo-code
2. While coding
	- Think out loud. Explain your thought process
	- Break the problem down and define abstractions.
	- Delay the implementation of your helper functions. Write down the signature. 1) It shows that you are familiar with abstractions; 2) It allows you to maintain momentum towards the overall solution; 3) It results in fewer context-switches for your brain; 4) Your interviewer may grant you the implementation for free
	- Don't get caught up in trivialities
3. Once you have a solution
	- Think about edge cases
	- Step through your code
	- Explain the shortcuts you took

Some books that are recommended:

- Clean Code: A Handbook of Agile Software Craftsmanship
- Code Complete: A Practical Handbook of Software Construction
- The Practice of Programming
- Design Patterns: Elements of Reusable Object-Oriented Software


## Algorithms Interview

An algorithm design question usually goes like "Gieven X, figure out an efficient way to do Y".

First, make sure you understand the problem. Try to make effort to clarify the question with interviewers. Once you understand the problem, try to come up with a solution. You have to demonstrate that you are making progress. It does two things, (1) it forces you to engage with the structure of the problem, priming your brain for improvements you can make later, (2) it gives you something in the bank.

Now it comes to the difficult part, optimization. To improve the algorithm.

- Start writing on the board
- Talk it through
- Think algorithms
	- Sorting( + searching / binary search)
	- Divide-and-conquer
	- Dynamic programming / memoization
	- Greediness
	- Recursion
	- Algorithms associated with a specific data structure
- Think data structures
	- Array
	- Stack/Queue
	- Hashset/Hashmap/Hashtable/Dictionary
	- Tree/binary tree
	- Heap
	- Graph
- Think about related problems you've seen before and how they were solved
- Modify the problem by breaking it up into smaller problems
- Don't be afraid to backtrack



#### References
[How to ace a system design interview](https://www.palantir.com/2011/10/how-to-ace-a-systems-design-interview/)    
[The coding interview](https://www.palantir.com/2011/10/the-coding-interview/)    
[How to ace an algorithm interview](https://www.palantir.com/2011/09/how-to-ace-an-algorithms-interview/)    
and you can see more useful posts from [Palantir blog](https://www.palantir.com/category/blogs/)
