---
layout: post
title:  "Javascript Study - 1"
date:   2015-06-27  
comments: true
---

Inspired by one of the blog posts that I've read recently, I've decided probably I should read a book to gain a much deeper understanding of javascript so that I can write better code. The auther recommended JavaScript: the Definitive Guide.

This is the part 1 of the study notes and it will cover the core JavaScript part of the book.

#Lexical Structure

This part covers the lexical structure of JavaScript, i.e. the language itself. Some important things to note:

- JS is case sentive, but HTML is not


#Types, Values, and Variables

- primitive types: numbers, strings, boolean, null, undefined
- object types

object is an unordered collection of named values.
Special objects: Arrays, functions
Classes: Arrays, functions, Date's, RegExp and Error

Mutable types: arrays, functions, objects
Immutable types: numbers, strings, null, undefined, boolean

Lexical scoping: variables declared outside of a function are global variables and are visible everywhere

##Numbers


The syntax for floating is `[digits][.digits][(E|e)[(+|-)]digits]`  

There's no distinction between integers and floating point values. In JS, all numbers are represented as floating-point values (64bit). However, certain operations (e.g. array indexing and bitwise operations) are performed with 32-bit integers.

Besides the arithmetic operators like +, -, \*, \/, and %, JavaScript supports more complex mathematical operations through a set of functions and constants defined as properties of the Math object. The example functions provided are: pow, round, ceil, floor, abs, max, min, random, PI, E, sqrt, pow, sin, log, exp. [full list](https://docs.python.org/3/library/math.html)

Arithmetic in JS doesn't raise errors in case of **overflow, underflow, or division by zero**. Instead, it produces *Infinity* or *-Infinity* for overfulow and underflow. When the underflow happens closer to zero than the smallest representable number, JS returns *0* or *negative 0*. Division devided 0 returns *Inifinity* or *-Inifinity* or special case *NaN* when 0 is divided by 0. *NaN* also raises when infinity is divided by infinity, sqrt a negative number or use arithmetic operators with non-numeric operands. 

The *NaN* has an unusual feature. It doesn't compare equal to any other value, including itself. When trying to determine if the variable is not-a-number, you should do *x != x* or *isNaN()*. There's a similar function *isFinite()* to determine if the number is finite. There's some interesting behavior for zeros.

```
var zero = 0;
var negz = -0;
zero === negz; // => True
1/zero === 1/negz; // => False, Inifinity != -Infinity
```

p.s. because of floating-point precision issue, try to avoid calculations in decimals. Use integers instead.

Dates and Times are also supported by JS. Here're some exmples

```
var then = new Date(2010, 0, 1);
var later = new Date(2010, 0, 1, 17, 10, 30);
var now = new Date();
var elapsed = now - then;

later.getFullYear();
later.getMonth();
later.getDay();
later.getHours();
later.getUTCHours();
later.toString();
later.toUTCString();
later.toLocaleDateString();
later.toLocaleTimeString();
later.toISOString();
```

##Text

A string is an imutable ordered sequence of 16-bit values, each of which typically represents a Unicode char - strings are JS's type for representing text. 

ECMAScript 5 allows multi-line string literal. 

```
"two\nlines"
"one\
long\
line"
```

JS supports built-in concatenation of strings. `mag = "Hello" + " " + "World"`

Other functions are:

```
var s = "Hello, world!"
s.length;
s.charAt(0);
s.charAt(s.length-1);
s.substring(1,4);
s.slice(1,4);
s.slice(-3);
s.indexOf("l");
s.indexOf("l", 3);
s.lastIndexOf("l");
s.split(", ");
s.replace("h", "H");
s.toUpperCase();

// because strings are immutable, they return a new string

```

Pattern matching: JS defines a *RegExp()* constructor for creating objects that represent textual patterns. Like Dates, they are simply a specialized kind of object, with a useful API.
Example:

```
var text = "testing: 1, 2, 3";
var pattern = /\d+/g;
pattern.test(text);
text.search(pattern);
text.match(pattern);
text.replace(pattern, "#");
text.split(/\D+/);
```

##Boolean Values

Falsy values: undefined, null, 0, -0, NaN, ""

##The Global Object

##Wrapper Objects
The temporary objects created when you access a property of a string, number, or boolean are known as wrapper objects. You just need to know that string, number, and boolean values differ from objects in that their properties are read-only and that you can't define new properties on them. Wrapper objects can be created explicitly by invoking String(), Number(), or Boolean() constructors. 
```
var s = "test";
var S = new String(s);
s == S;  // => True
s === S; // => False
```

##Immutable Primitive Values and Mutable Object References

There is fundamental difference in JS between primitive values (undefined, booleans, numbers and strings) and objects (arrays and functions).

two primitive values are equal iff their values are equal.
two objects are equal if they are referencing to the same object.

##Type Conversions

##Variable Declaration

##Variable Scope

block scope v.s. function scope: variables are visible within the function in which they are defined and within any functions that are nested within that function.

Hoisting: variables are visible even before they are declared.

For block scope: declare variables near their first use
For function scope: declare variables at the beginnning

Scope Chain: JavaScript is a *lexically scoped* language: the scope of a variable can be thought of as the set of source code lines for which the variable is defined. Every chunk of JS code (global code or functions) has a scope chain associated with it. This scope chian is a list or chain of objects that defines the variables that are "in scope" for that code.
It is important to understand how this chain of objects is created. When a function is defined, it stores the scope chain then in effect. When that function is invoked, it creates a new object to store its local variables, and adds that new object to the stored scope chain to create a new, longer, chain that represents the scope for that function invocation. This becomes more interesting for nested functions because each time the outer function is called, the inner function is defined again. Since the scope chain dffers on each invocation of the outer function, the inner function will be subtly different each time it is defined - the scope of the inner function wil be identical on each invocation of the outer function, but the scope chain associated with that code will be different. The notion of a scope chain is helpful for understanding the **with** statement and **closures**.


