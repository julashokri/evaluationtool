
'use strict';
var myApp = angular.module('myApp', ['ui.router']);

///////////////////////////////////////////
myApp.run(function ($transitions, $rootScope, $state, Authorization) {
    $transitions.onSuccess({}, function (event) {
        if (!Authorization.authorized) {
            //console.log("Successful Transition from " + event.$from() + " to " + event.$to());
            if (event.$to().data.authorization) {
                $state.go(event.$to().data.redirectTo);
            }
        }
    });

    $rootScope.onLogout = function () {
        console.log("log out!!!");
        Authorization.clear();
        $state.go('login_via');
        Authorization.clear();
        $rootScope.result = {};


        
    };
})
// create the module and name it scotchApp
myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
   
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    .state('logout',{
        url : '/logout',
        templateUrl: 'views/login_via.html',
            controller: 'controllerLogOut',
            data: {
                authorization: false
            }
    })
        // route for the home page
        .state('login', {
            url: '/Emaillogin',
            templateUrl: 'views/sign_in_up.html',
            controller: 'controllerEmaillogin',
            data: {
                authorization: false
            }
        })

        ////////////////////////////////////////
        .state('admin', {
            url: '/admin',
            templateUrl: 'views/admin.html',
            controller: 'controllerAdmin',
            data: {
                authorization: false
            }
        })
        ////////////////////////////////////////////
        .state('us', {
            url: '/about-us',
            templateUrl: 'views/mary.html',
            controller: 'controllerMary',
            data: {
                authorization: false
            }
        })

        /////////////////////////////
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'controllerSetting',
            data: {
                authorization: false
            }
        })

        /////////////////////////////
        .state('login_via', {
            url: '/login',
            templateUrl: 'views/login_via.html',
            controller: 'controllerlogin_via',
            data: {
                authorization: false
            }
        })

        /////////////////////////////
        
        .state('autoevaluation', {
            url: '/selfevaluation',
            templateUrl: 'views/evaluation1.html',
            controller: 'controllerevaluation',
            data: {
                authorization: true,
                redirectTo: 'login',
                memory: true
            }
        })

        ////////////////////////////////////////
        .state('addnewDep', {
            url: '/newDepartment',
            templateUrl: 'views/department.html',
            controller: 'controllerAddNewDepartment',
            data: {
                authorization: true,
                redirectTo: 'home',
                memory: true
            }
        })

        ////////////////////////////////////////
        .state('addnewRole', {
            url: '/addnewRole',
            templateUrl: 'views/addnewRole.html',
            controller: 'controlleraddnewRole',
            data: {
                authorization: true,
                redirectTo: 'home',
                memory: true
            }
        })

        ////////////////////////////////////////
        .state('addnewRolGr', {
            url: '/addnewRolGr',
            templateUrl: 'views/addnewRolGr.html',
            controller: 'controlleraddnewRolGr',
            data: {
                authorization: true,
                redirectTo: 'home',
                memory: true
            }
        })

        ////////////////////////////////////////
        .state('addCompany', {
            url:'/addCompany',
            templateUrl: 'views/addCompany.html',
            controller: 'controlleraddCompany',
            data: {
                authorization: true,
                redirectTo: 'home',
                memory: true
            }
        })
        ////////////////////////////////////////
        .state('addBranch', {
            url: '/addBranch',
            templateUrl: 'views/branch.html',
            controller: 'controlleraddBranch',
            data: {
                authorization: true,
                redirectTo: 'home',
                memory: true
            }
        })

        ////////////////////////////////////////

        .state('addProject', {
            url: '/addProject',
            templateUrl: 'views/defineProject.html',
            controller: 'controlleraddProject',
            data: {
                authorization: true,
                redirectTo: 'home',
                memory: true
            }
        })
        ////////////////////////////////////////
        .state('addTeam', {
            url: '/addTeam',
            templateUrl: 'views/interimTeam.html',
            controller: 'controllerinterimTeam',
            data: {
                authorization: true,
                redirectTo: 'home',
                memory: true
            }
        })

        ////////////////////////////////////////
        .state('ceopage', {
            url: '/ceopage',
            templateUrl: 'views/ceopage.html',
            controller: 'controllerceopage',
            data: {
                authorization: true,
                redirectTo: 'home',
                memory: true
            }
        })
        ////////////////////////////////////////
        .state('searchboss', {
            url: '/searchbyboss',
            templateUrl: 'views/searchbyboss.html',
            controller: 'controllersearch',
            data: {
                authorization: true,
                redirectTo: 'home',
                memory: true
            }
        })
        // route for the about page
        .state('about', {
            url: '/aboutMyJob',
            templateUrl: 'views/about.html',
            controller: 'controllerAbout',
            data: {
                authorization: true,
                redirectTo: 'home',
                memory: true
            }
        })

        ///////////////////////////////
        .state('directeva', {
            url: '/directevaluation',
            templateUrl: 'views/directeva.html',
            controller: 'controllerDirecteva',
            data: {
                authorization: true,
                redirectTo: 'login',
                memory: true
            }
        })


        ////////////////////////////////////////
        .state('addnewTask', {
            url: '/addnewTask',
            templateUrl: 'views/defineTask.html',
            controller: 'controllerTask',
            data: {
                authorization: true,
                redirectTo: 'home',
                memory: true
            }
        })

        /*/ route for the contact page
        .state('insert', {
            url: '/insert',
            templateUrl: 'views/insert.html',
            controller: 'controllerContact',
            data: {
                authorization: true,
                redirectTo: 'home',
                memory: true
            }
        })
        /////////////////////////*/
        .state('step', {
            url: '/step',
            templateUrl: 'views/step.html',
            controller: 'controllerStep',
            data: {
                authorization: true,
                redirectTo: 'home',
                memory: true
            }
        });
    ////////////////////////////
}])


