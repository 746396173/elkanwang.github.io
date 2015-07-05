---
layout: post
title:  "Javascript Study - 2"
date:   2015-07-04  
comments: true
---

# Expressions and Operators

An *expression* is a phrase of JavaScript that a JavaScript interpreter can *evaluate* to produce a value. 

## Primary Expression

- Constant values

```
1.23
"hello"
/pattern/
```

- Some of JavaScript's reserved words

```
true
false
null
this  // Evaluate to the "current" object
```

- variable reference

```
i
sum
undefined // undefined is a global variable, not a keyword like *null*
```

## Object and Array Initializers

Also known as "object literals" and "array literals".


```
var a = [];
var b = [1+2, 3+4];
var matrix = [[1,2,3], [4,5,6], [7,8,9]];
var sparseArray = [1,,,,5];

var p = { x:2.3, y:-1.3 };
```

## Function Definition Expressions

A function definition expression is a "function literal".

```
var square = function(x) { return x*x; };
```

## Property Access Expressions

```
expression . identifier
expression [ expression ]
```

## Invocation Expressions

An *invocation expression* is JavaScript's syntax for executing a function or method.

```
f(0);
Math.max(x,y,z);
a.sort();
```

1. the function expression is evaluated
2. the argument expressions are evaluated to produce a list of argument values
3. if the value of the function expression is not callable, a TypeError is thrown. 
4. the argument values are assigned, in order, to the parameter names specified when the function was defined
5. the body of the function is executed
6. if the function uses **return** statment to return a value, then that value becomes the value of the invocation expression. Otherwise, the value of the invocation expression is **undefined**.

Invocation expressions that are not method invocations use the global object or undefined as the value of **this** keyword.

## Object Creation Expression

An *object creation expression* creates a new object and invokes a function (constructor) to initialize the properties of that object.

```
new Object()
new Point(2,3)
new Object
new Date
```

## eval()

## void


# Statements

## Expression statements
## Compound and Empty Statements
## Declaration Statements
## Miscellaneous Statements

- with

```
with (object)
    statement
```

The **with** statement is used to temporarily extend the scope chain. This statement adds object to the front of the scope chain, executes statement, and then restores the scope chain to its original state.
**with** statment should be avoided.

```
with(document.forms[0]){
    name.value = "";
    address.value = "";
    email.value = "";
}

// this can be avoided by:

var f = document.forms[0];
f.name.value = "";
f.address.value = "";
f.email.value = "";
```

note: with statment only provides a shortcut for reading properties, not for creating new properties.

- debugger

```
function f(o) {
    if (o === undefined) debugger;
    ...
}
```

- "use strict"

"use strict" is a *directive*. Directives are not statements. Two major differences:

1. It does not include any language keywords
2. It can only appear only at the start of a script of at the start of a function body, before any real statements have appeared.

Strict code is executed in *strict mode*. The differences between strict mode and non-strict mode are the following:

1. The **with** statement is not allowed in strict mode
2. In strict mode, all variables must be declared: a ReferenceError is thrown if you assign a value to an identifier that is not a declared variable, function, function parameter, catch clause parameter, or property of the global object.
3. functions invoked as functions (rather than as methods) have a this value of undefined. When a function is invoked with call() or apply(), the this value is exactly the value passed as the first argument.
4. Assignments to nonwritable properties and attempts to create new properties on nonextensible objects throw a TypeError.
5. Code passed to **eval()** cannot declare variables or define functions in the caller's scope as it can in non-strict mode. Instead, variable and function definitions live in a new scope created for the **eval()**. This scope is discarded when the **eval()** returns.
6. The **arguments** object in a function holds a static copy of the values passed to the function. In non-strict mode, the **arguments** object has "magical" behavior in which elements of the array and named function parameters both refer to the same value.
7. A SyntaxError is thrown if the **delete** operator is follwed by an unqualified identifier such as a variable, function, or function parameter.
8. An attempt to delete a nonconfigurable property throws a TypeError.
9. It is a syntax error for an object literal to define two or more properties by the same name.
10. It is a syntax error for a function declaration to have two or more parameters with the same name.
11. Octal integer literals are not allowed.
12. The identifiers **eval** and **arguments** are treated as keywords, and you are not allowed to change their value. You cannot assign a value to these identifiers, declare them as variables, use them as function names, use them as function parameter names, or use them as the identifier of a **catch** block.
13. The ability to examine the call stack is restricted. **arguments.caller** and **arguments.callee** both throw a TypeError. 
