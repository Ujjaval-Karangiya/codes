var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "home.html",
      controller: "HomeController"
    })
    .when("/about", {
      templateUrl: "about.html",
      controller: "AboutController"
    })
    .when("/contact", {
      templateUrl: "contact.html",
      controller: "ContactController"
    })
    .when("/login", {
      templateUrl: "login.html",
      controller: "LoginController"
    })
    .when("/signup", {
      templateUrl: "signup.html",
      controller: "SignupController"
    })
    .otherwise({
      redirectTo: "/home"
    });
});


app.controller("HomeController", function($scope) {
  $scope.message = "Welcome to the Home Page!";
});
app.controller("AboutController", function($scope) {
  $scope.message = "We are a team of AngularJS developers!";
});
app.controller("ContactController", function($scope) {
  $scope.message = "Use the form to contact us.";
  $scope.form = {};
  $scope.submitted = false;
  $scope.submitForm = function() {
    if ($scope.form.name && $scope.form.email && $scope.form.message) {
      $scope.submitted = true;
    }
  };
});
app.controller("LoginController", function($scope) {
  $scope.user = {};
  $scope.login = function() {
    if ($scope.user.email && $scope.user.password) {
      alert("Login successful!");
    }
  };
});
app.controller("SignupController", function($scope) {
  $scope.newUser = {};
  $scope.register = function() {
    if ($scope.newUser.email && $scope.newUser.password) {
      alert("Registration successful!");
    }
  };
});