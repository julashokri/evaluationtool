var url = "http://" + window.location.hostname + ":1880";

angular.module('myApp').service('Authorization', function ($state) {
    this.authorized = false;
    this.memorizedState = null;

    var
        clear = function () {
            this.authorized = false;
            this.memorizedState = null;
        },

        go = function (fallback) {
            this.authorized = true;
            var targetState = this.memorizedState ? this.memorizedState : fallback;
            $state.go(targetState);
        };

    return {
        authorized: this.authorized,
        memorizedState: this.memorizedState,
        clear: clear,
        go: go
    };
});
angular.module('myApp').factory('companyService', function ($http){

    return{
        showInformation: function(uid) {
            return $http.get(url + '/showInformation/'+uid)
        },
        //////////////////////////////
        getAppRoles: function () {
            return $http.get(url + '/getAppRoles')
        },
        //////////////////////////////
        getCompanies: function () {
            return $http.get(url + '/getCompanies')
        },
        /////////////////////////
        getBranches: function () {
            return $http.get(url + '/getBranches')
        },
        /////////////////////////
        getDepartments: function () {
            return $http.get(url + '/getDepartments')
        },
        
        getDepartments_by_ID: function (uid) {
            return $http.get(url + '/getDepartments/'+uid)
        },
        getHeaders: function (uid) {
            return $http.get(url + '/getHeaders/'+uid)
        },
        
        getRoles_by_ID: function (uid) {
            return $http.get(url + '/getRoles/'+uid)
        },
        getTasks_by_ID: function (uid) {
            return $http.get(url + '/getTasks/'+uid)
        },
        getEmployees_by_ID: function () {
            return $http.get(url + '/getEmployees/'+uid)
        },
        getTasks_by_PID: function (uid) {
            return $http.get(url + '/getPTasks/'+uid)
        },
        getEmployees_by_PID: function (uid) {
            return $http.get(url + '/getPEmployees/'+uid)
        },
        getEmployees: function () {
            return $http.get(url + '/getEmployees')
        },
        /////////////////////////
        getProjects: function () {
            return $http.get(url + '/getProjects')
        },
        getTasks: function () {
            return $http.get(url + '/getTasks')
        },
        /////////////////////////
        /////////////////////////
        getRoles: function () {
            return $http.get(url + '/getRoles')
        },

        /////////////////////////
        getManagers: function () {
            return $http.get(url + '/getManagers')
        },
        /////////////////////////
         getManagers_proj: function (uid) {
            return $http.get(url + '/getManagers_proj/'+uid)
        },
        checkPass : function(user,pass){
            return $http.get(url + '/checkPass/'+user+'/'+pass)
        },
        /*///////////////////////////
        checkPass: function (usr,pas) {
            var postData = {
                action: "checkPass",
                parameters:
                    {
                        user : usr,
                        pass : pas
                    }
            };
            return $http.post(url + '/post', postData);
        },
        /////////////////////////////////*/
        addEmployee: function (interId,pass, name, mail, birthdate, branch, dep, role,appRole) {
            var postData = {
                action: "addEmployee",
                parameters:
                    {
                        internal_ID: parseInt(interId, 10),
                        password: pass,
                        name: name,
                        email: mail,
                        birth_date: birthdate,
                        branch_ID: parseInt(branch, 10),
                        dep_ID: parseInt(dep, 10),
                        role_ID: parseInt(role, 10),
                        AppRole_ID: parseInt(appRole, 10)
                    }
            };
            return $http.post(url + '/post', postData);
        },
        ////////////////////////////

        addCompany: function (vat, name, bosID) {
            var postData = {
                action: "addCompany",
                parameters:
                    {
                        vat_number: parseInt(vat, 10),
                        name: name,
                        bossID: parseInt(bosID, 10),
                    }
            };
            return $http.post(url + '/post', postData);
        },

        /////////////////////////////
        addBranch: function (cntry, cty, state, street, pcod, phone, email, cmpny) {
            var postData = {
                action: "addBranch",
                parameters:
                    {
                        country: cntry, city: cty, state: state,
                        street: street, postal_code: parseInt(pcod, 10), phone: parseInt(phone, 10),
                        email: email, company_ID: cmpny1,
                    }
            };
            return $http.post(url + '/post', postData);
        },
        /////////////////////////////
        addDep: function (name,header,brnch) {
            var postData = {
                action: "addDep",
                parameters:
                    {
                        name: name, headofdep_ID: header,branch_ID: brnch,
                    }
            };
            return $http.post(url + '/post', postData);
        },

        ////////////////////////////
        addRole: function (name, mngID) {
            var postData = {
                action: "addRole",
                parameters:
                    {
                        name: name,
                        manager_ID: parseInt(mngID, 10),
                    }
            };
            return $http.post(url + '/post', postData);
        },

        ////////////////////////////
        addProject: function (name, start, end, des, mngr) {
            var postData = {
                action: "addProject",
                parameters:
                    {
                        name: name, start_date: start, end_date: end, description: des, manager_ID: mngr,
                    }
            };
            console.log(postData);
            return $http.post(url + '/post', postData);
        },
        ///////////////////////////////
        addTeam: function (pr,tsk, emp) {
            var postData = {
                action: "addTeam",
                parameters:
                    {
                        project_ID: parseInt(pr, 10), task_ID: parseInt(tsk,10), employee_ID: parseInt(emp, 10),                    }
            };
            return $http.post(url + '/post', postData);
        },
        ////////////////////////////
        addTask: function (name, start, end, prID) {
            var postData = {
                action: "addTask",
                parameters:
                    {
                        name: name, start_date: start, end_date: end,
                        project_ID: parseInt(prID, 10),
                    }
            };
            console.log(postData);
            return $http.post(url + '/post', postData);
        },
        ///////////////////////////////
        /*check: function (pass) {
         
            return $http.post(url + '/post', postData);
        },*/
        ///////////////////////////////////////
    }
})  
