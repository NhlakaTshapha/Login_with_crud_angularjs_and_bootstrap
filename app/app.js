var app = angular.module('myapp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'login.html',
        controller: 'logincontroller'
    }).when('/dashboard', {
        templateUrl: 'dashboard.html',
    }).when('/index', {
        templateUrl: 'index.html',
     controller: 'mycontroller'
    }).when('/Main', {
        templateUrl: 'Main.html',
    }).otherwise({
        redirectTo: '/'
    });
});

//user controller operations 
app.controller('mycontroller', function ($scope) {
    console.log("In mycontroller");

    //variable storing new user info
    $scope.newuser = {};
    $scope.message = "";

    //varible for editing users
    $scope.clickednewuser = {};

    $scope.users = [
        {username:"nhlaka",fullname:"Nhlakanipho Tshapha",email:"nhlakatshapha@gmail.com"},
        { username: "Mshazi", fullname: "Mluleki Nzuza", email: "mluleki@gmail.com" },
        { username: "sbusiso", fullname: "Sbusiso Ndlovu", email: "sbundlovu@gmail.com" }
    ];

    // this is a save button 
    $scope.saveUser = function () {

        if ($scope.newuser.username != null && $scope.newuser.email != null && $scope.newuser.fullname != null) {
            // adding a newuser to the list of users
            $scope.users.push($scope.newuser);
            // pass a successful message 
            $scope.message = "New user added Successfully";

            $scope.newuser = {};
        }
        else {
            alert('please fill in required fields');
        }
      
    }


    //this function for selecting a user to update
    $scope.selectuser = function (user) {
        console.log(user);
        //stores information of the cliked user
        $scope.clickednewuser = user;
    }

    //this is button for updating user info
    $scope.updateuser = function () {
        console.log("updating...");
        $scope.message = "User updated successfully";
    }

    //this is for deleting a selected user
    $scope.deleteuser = function (user) {
        $scope.users.splice($scope.users.indexOf($scope.clickednewuser), 1);
        $scope.message = "User Deleted successfully";
    }


    $scope.clearmessage = function () {
        $scope.message = "";
    }
});

//Login controller operations
app.controller('logincontroller', function ($scope, $location) {
    console.log("function login");

    //login function     when a user press login button this function will be called
    $scope.login = function () {
        var username = $scope.username;
        var password = $scope.password;

        //if your login details are as follows password = Nhlaka02 and password =123 redirect to the index page else to main page 
        if ($scope.username == 'Nhlaka02' && $scope.password == '123') {
            console.log("login-index");
            $location.path('index');
        }
        else if ($scope.username == 'Admin' && $scope.password == '1234') {
            console.log('login-dashboard');
            $location.path('Main');
        }
        else {
            alert("Please proide correct login details");
            $location.path('dashboard');
        }
    }
})