--- 
layout: post
title:  "Javascript Study - 3"
date:   2015-07-04  
comments: true
---

# Objects

In addition to its name and value, each property has associated values that we'll call property attributes:

- The *writable* attribute specifies whether the value of the property can be set.
- The *enumerable* attribute specifies whether the property name is returned by a for/in loop.
- The *configurable* attribute specifies whether the property can be deleted and whether its attributes can be altered.

In addition to its properties, every object has 3 associated *object attributes*:

- *prototype* : a reference to another object from which properties are inherited.
- *class* : a string that categorizes the type of an object.
- *extensible* : flag specifies whether new properties may be added to the object.

There are 3 categories of JavaScript objects and 2 types of properties:

- *native object*: an object or class of objects defined by the ECMAScript specification. e.g. Arrays, functions, dates, and Regex.
- *host object*: an object defined by the host environmnet (such as web browser) within which the JavaScript interpreter is embedded. Host objects may also be native objects, as when the host environment defines methods that are normal JavaScript Function objects.
- *user-defined* : any object created by the execution of JavaScript code.
- *own property* : property defined directly on an object.
- *inherited property* : property defined by an object's prototype object.

## Creating Objects

----

### Object Literals

```
var empty = {};
var point = { x:0, y:0 };
```

A single object literal can create many new objects.

### Creating Objects with **new**

```
var o = new Object();
var a = new Array();
var d = new Date();
var r = new RegExp("js");
```

### Prototypes

property chain

### Object.create()

```
var o1 = Object.create({x:1, y:2});
var o2 = Object.create(null);
var o3 = Object.create(Object.prototype);
```

## Querying and Setting Properties

## Deleting Properties

## Testing Properties

```
var o = { x:1 };
"x" in o;
o.hasOwnProperty("x");
o.propertyIsEnumerable("x");
o.x !== undefined;
```

## Enumerating Properties

## Property Getters and Setters

## Property Attributes

## Object Attributes

## Serializing Objects

```
JSON.stringify(o);
JSON.parse(s);
```

-----

# Arrays


