---
layout: post
title:  "Some Learning Points for AngularJS"
date:   2015-04-01  
categories: angularjs
excerpt: AngularJS is one of the most popular front-end javascript framework at this time. It is great to be used to develop a single page web application.
comments: true
---

AngularJS is one of the most popular front-end javascript framework at this time. It is great to be used to develop a single page web application. It extends HTML attributes with **Directives**, and binds data to HTML with **Expressions**. It's well-known for its **"Data Binding"**.  

----

## ng-directives

####ng-app
The directive defines an AngularJS aplication

####ng-model
The directive binds the value of HTML controls (input, select, textarea, etc.) to application data. It can be useful in:  

* Provide type validation for application data
* Provide status for application data
* Provide CSS classes for HTML elements
* Bind HTML elements to HTML forms

####ng-bind
The directive binds application data to the HTML view

```html
<div ng-app="my-app">
	<p><input type="text" ng-model="name"></p>
	<p ng-bind="name"></p>
</div>
```

###More
####ng-init
The directive that initializes AngularJS application variable. However, this is uncommon. It is a better prace to initialize variables in controllers.
####ng-repeat
The directive that repeats an HTML element: `ng-repeat= "name in names"`

--------

## AngularJS Expressions

The AngularJS Expressions are written in double brackets: `{5+5}`, ` { { name } } `

----

## Angular Applications

AngularJS modules define applications, controllers control applications   

```html
<div ng-app="myApp" ng-controller="myCtrl">
	First Name: <input type="text" ng-model="firstName"><br>
	Last Name: <input type="text" ng-model="lastName"><br>
	<br>
	Full Name: {{firstName + " " + lastName}}
</div>

<script>
	var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
	    $scope.firstName= "John";
	    $scope.lastName= "Doe";
	});
</script>
```

###AngularJS Controllers
AngularJS applications are controlled by controllers. And controllers are defined by **ng-control**.  
AngularJS controller is an JavaScript object. An example is provided above.

----

###More AngularJS Features
####AngularJS Filters
Filters can be added to **expressions** and **directives** by using a pipe character `|`.  

* uppercase:  ` { { lastName | uppercase } } `
* lowercase:  ` { { lastName | lowercase } } `
* currency:  ` { { price | currency } } `
* in directives: `ng-repeat = " name in names | orderBy:'country' " `

####AngularJS XMLHttpRequest
This allows you to obtain data from remote server.

```javascript
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
	$http.get("http://www.w3schools.com/angular/customers.php")
	.success(function(response) {$scope.names = response.records;});
});
```


####Resources:
* [w3schools](http://www.w3schools.com/angular/angular_directives.asp)
