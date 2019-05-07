angular.module('myApp').controller('controllerStep', function ($scope, companyService) {
    $scope.checkEmployees = { selected: {} };
    $scope.sDate = new Date();
    $scope.eDate = new Date();

    companyService.getManagers_proj(3).then(function (message) {
        $scope.managers = message.data;
        console.log($scope.managers);
    })
    $scope.addNewProject = function () {

        companyService.addProject($scope.name, $scope.sDate.toISOString(), $scope.eDate.toISOString(), $scope.description, $scope.manager.ID).then(function (message) {

            if (message.data.status == 'ok') {
                alert('new Project added succesfully');
            }
        })
    }
    companyService.getProjects().then(function (message) {
        $scope.projects = message.data;
        console.log($scope.projects);
    })

    $scope.changeTask_emp = function (ID) {
        $scope.tasks = "";
        $scope.employees = "";

        companyService.getTasks_by_PID(ID).then(function (message) {
            $scope.tasks = message.data;
            console.log($scope.tasks);
        })
        companyService.getEmployees_by_PID(ID).then(function (message) {
            $scope.employees = "";
            $scope.employees = message.data;
            console.log($scope.employees);
        })

    }

    $scope.addNewTeam = function () {
        Object.keys($scope.checkEmployees.selected).forEach(function (key) {
            console.log(key + '=' + $scope.checkEmployees.selected[key]);
            if ($scope.checkEmployees.selected[key]) {
                companyService.addTeam($scope.project.ID, $scope.task.ID, key).then(function (message) {
                    if (message.data.status == 'ok') {
                        alert('new Team added succesfully');
                    }
                })
            }
        })

    }

    companyService.getProjects().then(function (message) {
        $scope.projects = message.data;
        console.log($scope.projects);
    })


    $scope.addNewTask = function () {
        companyService.addTask($scope.name, $scope.sDate.toISOString(), $scope.eDate.toISOString(), $scope.project.ID).then(function (message) {

            if (message.data.status == 'ok') {
                alert('new Task added succesfully');
            }
        })
    }
})

angular.module('myApp').controller('controllerSetting', function ($scope, $rootScope,$state, companyService) {

    companyService.showInformation($rootScope.result.AppRole_ID).then(function (message) {
        console.log(message.data);

        $scope.resultAppRole = message.data[0];
        console.log($scope.resultAppRole.name);
        console.log($rootScope.result.AppRole_ID);

        $scope.a = "hi ";
        $scope.b = $rootScope.result.name;
        $scope.c = "you are ";
        $scope.d = $scope.resultAppRole.name;
        $scope.e = "so you ";
        $scope.f = $scope.resultAppRole.descript;

        
    })
    $scope.loginAdmin = function () {
        if ($rootScope.result.AppRole_ID != 3)
            $state.go('ceopage')
        else
            alert('Sorry; you can not access it');

    }


})

angular.module('myApp').controller('controllerlogin_via', function ($scope) {

})

angular.module('myApp').controller('controllerEmaillogin', function ($scope, $state, $rootScope, Authorization, companyService) {

    $scope.login = function () {
        $rootScope.result = null;
        companyService.checkPass($scope.userText, $scope.passText).then(function (message) {
            $rootScope.result = message.data[0];
            //console.log ($rootScope.result);
            //console.log ($rootScope.result.AppRole_ID);
            if ($rootScope.result) {
                //console.log($rootScope.result.name);
                Authorization.go('private');
                console.log("log in!!!")
                $state.go('home')
            }
            else
                alert('Sorry; Enter correct information');

        })

    }
})

angular.module('myApp').controller('controllerAddNewDepartment', function ($scope, companyService) {
    companyService.addDep($scope.name, $scope.employee.ID, $scope.branch.ID).then(function (message) {
        if (message.data.status == 'ok') {
            alert('new Branch added succesfully');
        }
    })

    $scope.addNewDep = function (ID) {
        companyService.getHeaders(ID).then(function (message) {
            $scope.employees = message.data;
            console.log($scope.employees);
        })
    }
})
/*angular.module('myApp').controller('controllerAddNewDepartment', function ($scope, companyService) {
    companyService.getBranches().then(function (message) {
        $scope.branches = message.data;
        console.log($scope.branches);
    })
    $scope.changeHeader = function (ID) {
        $scope.employees = "";
        companyService.getHeaders(ID).then(function (message) {
            $scope.employees = message.data;
            console.log($scope.employees);
        })
    }
})*/

angular.module('myApp').controller('controllerLogOut', function ($scope, $rootScope, $state, Authorization) {
    $rootScope.onLogout = function () {
        console.log("log out!!!");
        Authorization.clear();
        $state.go('login_via');
        Authorization.clear();



    };
})
angular.module('myApp').controller('controlleraddnewRole', function ($scope, companyService) {
    //add role
    $scope.addNewRole = function () {
        companyService.addRole($scope.name, $scope.manager.ID).then(function (message) {
            if (message.data.status == 'ok') {
                alert('new role added succesfully');
            }
        })
    }
})

angular.module('myApp').controller('controlleraddnewRolGr', function ($scope) {
})

angular.module('myApp').controller('mainController', function ($scope) {
})

//angular.module('myApp').controller('contactController', function ($scope) {
//})

angular.module('myApp').controller('controllerevaluation', function ($scope) {
})

//angular.module('myApp').controller('controllerContact', function ($scope) {
//})

angular.module('myApp').controller('controllersearch', function ($scope) {
})
angular.module('myApp').controller('controllerMary', function ($scope) {
})
angular.module('myApp').controller('controllerAdmin', function ($scope) {
})
//controllerCEOpage
angular.module('myApp').controller('controllerceopage', function ($scope, companyService) {

    companyService.getAppRoles().then(function (message) {
        $scope.appRoles = message.data;
        console.log($scope.appRoles);
    })
    //------------/////////////////////////////////////////
    companyService.getBranches().then(function (message) {
        $scope.branches = message.data;
        console.log($scope.branches);
    })
    $scope.changeDepart = function (ID) {
        $scope.departments = "";
        $scope.roles = "";
        companyService.getDepartments_by_ID(ID).then(function (message) {
            $scope.departments = message.data;
            console.log($scope.departments);
        })
    }
    $scope.changeRole = function (ID) {
        $scope.roles = "";
        companyService.getRoles_by_ID(ID).then(function (message) {
            $scope.roles = message.data;
            console.log($scope.roles);
        })
    }
    //addcompany
    companyService.getEmployees().then(function (message) {
        $scope.employees = message.data;
        console.log($scope.employees);
    })
    //add company
    $scope.addNewCompany = function () {
        companyService.addCompany($scope.vat_number, $scope.name, $scope.employee.ID).then(function (message) {
            if (message.data.status == 'ok') {
                alert('new company added succesfully');
            }
        })
    }
    //add employee
    $scope.addNewEmployee = function () {
        companyService.addEmployee($scope.internal_ID, $scope.password, $scope.name, $scope.email, $scope.birth_date, $scope.branch.ID, $scope.dep.ID, $scope.role.ID, $scope.approle.ID).then(function (message) {
            if (message.data.status == 'ok') {
                alert('new employee added succesfully');
            }
        })
    }
})
//controlleraddCompany
angular.module('myApp').controller('controlleraddCompany', function ($scope, companyService) {
    companyService.getEmployees().then(function (message) {
        $scope.employees = message.data;
        console.log($scope.employees);
    })

})
//controllerBranch
angular.module('myApp').controller('controlleraddBranch', function ($scope, companyService) {
    companyService.getCompanies().then(function (message) {
        $scope.companies = message.data;
        console.log($scope.companies);
    })
    $scope.addNewBranch = function () {
        companyService.addBranch($scope.country, $scope.city, $scope.state, $scope.street, $scope.postal_code, $scope.phone_number, $scope.email, $scope.company.ID).then(function (message) {
            if (message.data.status == 'ok') {
                alert('new Branch added succesfully');
            }
        })
    }
})