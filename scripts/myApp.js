var myApp = angular.module('myApp', ['ui.router', "ngAnimate"]);

myApp.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/profile');

  // Now set up the states
  $stateProvider

    .state('profile', {
      url:'/profile',
      templateUrl: "templates/profile.html"
    })

    .state('blog', {
      url: "/blog",
      templateUrl: "templates/blog.html"
    })

    .state('projects', {
      url: "/projects",
      templateUrl: "templates/projects.html"
    })

    .state('work', {
      url: "/work",
      templateUrl: "templates/work.html"
    })

    .state('courses', {
      url: "/courses",
      templateUrl: "templates/courses.html"
    })

});