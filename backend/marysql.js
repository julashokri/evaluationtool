var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json());
var mysql = require('mysql')

//-------------------------
var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'evaluationtool'
});

// connect to database
connection.connect(function (error) {
    if (!!error) {
        console.log('Error: ' + error);
    } else {
        console.log('Connected to the database!');
    }
});


app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'authorization,Content-Type, X-Requested-With');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//addEmployee
app.post('/post', function (req, res) {
    console.log("Incoming request:");
    console.log(req.body);
    //create sql query string
    var sqlString;
    if (req.body.action == "addEmployee") {
        sqlString = "INSERT INTO employee(internal_ID,password, name,email,birth_date,branch_ID,created_at, updated_at,role_ID,dep_ID,AppRole_ID) VALUES (" + req.body.parameters.internal_ID + ",\"" + req.body.parameters.password + "\",\"" + req.body.parameters.name + "\",\"" + req.body.parameters.email + "\",\"" + req.body.parameters.birth_date + "\"," + req.body.parameters.branch_ID + ",\"" + req.body.parameters.created_at + "\",\"" + req.body.parameters.updated_at + "\"," + req.body.parameters.role_ID + "," + req.body.parameters.dep_ID + "," + req.body.parameters.AppRole_ID + ")";
    }
    else if (req.body.action == "addBranch") {
        sqlString = "INSERT INTO branch(country, city,state, street, postal_code, phone, email, company_ID) VALUES(\"" + req.body.parameters.country + "\",\"" + req.body.parameters.city + "\", \"" + req.body.parameters.state + "\", \"" + req.body.parameters.street + "\",\"" + req.body.parameters.postal_code + "\",\"" + req.body.parameters.phone + "\", \"" + req.body.parameters.email + "\"," + req.body.parameters.company_ID + ")";
    }
    else if (req.body.action == "addCompany") {
        sqlString = "INSERT INTO company(vat_number, name , bossID) VALUES (" + req.body.parameters.vat_number + ",\"" + req.body.parameters.name + "\"," + req.body.parameters.bossID + ")";
    }
    else if (req.body.action == "addRole") {
        sqlString = "INSERT INTO role(name, created_at, updated_at, manager_ID) VALUES (\"" + req.body.parameters.name + "\",\"" + req.body.parameters.created_at + "\",\"" + req.body.parameters.updated_at + "\"," + req.body.parameters.manager_ID + ")";
    }
    else if (req.body.action == "addProject") {
        sqlString = "INSERT INTO project(name,start_date,end_date, description,manager) VALUES (\"" + req.body.parameters.name + "\",\"" + req.body.parameters.start_date + "\",\"" + req.body.parameters.end_date + "\",\"" + req.body.parameters.description + "\"," + req.body.parameters.manager_ID + ")";
        console.log(sqlString);
    }
    else if (req.body.action == "addTask") {
        sqlString = "INSERT INTO task(name,start_date,end_date, project_ID) VALUES (\"" + req.body.parameters.name + "\",\"" + req.body.parameters.start_date + "\",\"" + req.body.parameters.end_date + "\"," + req.body.parameters.project_ID + ")";
    }
    else if (req.body.action == "addTeam") {
        sqlString = "INSERT INTO interimteam(project_ID,task_ID,employee_ID) VALUES (" + req.body.parameters.project_ID + "," + req.body.parameters.task_ID + "," + req.body.parameters.employee_ID + ")";
        console.log(sqlString);
    }
    else if (req.body.action == "addDep") {
        sqlString = "INSERT INTO department(name,headofdep__ID,created_at, updated_at,branch_ID) VALUES (\"" + req.body.parameters.name + "\"," + req.body.parameters.headofdep_ID + ",\"" + req.body.parameters.created_at + "\",\"" + req.body.parameters.updated_at + "\"," + req.body.parameters.branch_ID + ")";
        console.log(sqlString);
    }
    /*else if (req.body.action == "checkPass") {
        result = "select * from employee where ID = user and Password = pass", function (err, result) {
            if (err) throw err;
            res.send(result);
        }
    }*/


    /*else if (req.body.action == "addManager") {
        sqlString = "UPDATE employee SET manage_ID =  '1' WHERE 
    }*/

    //execute query
    var query = connection.query(sqlString, function (err, result) {
        if (err) throw err;
        var obj = JSON.parse("{\"status\":\"ok\"}");
        res.send(obj);
    });
    //}


})

app.get('/', function (req, res) {
    console.log("Incoming request:");
})
//get all orojects in DB
app.get('/getProjects', function (req, res) {
    var query = connection.query("Select * from project", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})
//get all companies in DB
app.get('/getCompanies', function (req, res) {
    var query = connection.query("Select * from company", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})


//get all deps in DB
app.get('/getDepartments', function (req, res) {
    console.log(req.body);


    var query = connection.query("Select * from department", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})
//check user&pass/////////////////
app.get('/checkPass/:user/:pass', function (req, res) {
    var Qstring = "select * from employee where internal_ID ='" + req.params.user+"'" + " and password ='" + req.params.pass+"'";
    //var Qstring = "select * from employee where internal_ID = " + req.params.user + " and password ='" + req.params.pass+"'";

    var query = connection.query(Qstring, function (err, result) {
        if (err) throw err;
        res.send(result);
    });

})

//get All of AppRole/////////////
app.get('/getAppRoles', function (req, res) {
    console.log(req.body);
    var query = connection.query("Select * from approle", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})
//get appRole Descryption of user
app.get('/showInformation/:uid', function (req, res) {
    var Qstring = "Select * from approle where ID =  " + req.params.uid;
    var query = connection.query(Qstring, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})
//get departments of one branch of a company
app.get('/getDepartments/:uid', function (req, res) {
    var Qstring = "Select * from department where branch_ID = " + req.params.uid;
    var query = connection.query(Qstring, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})
//get all roles in DB
app.get('/getRoles', function (req, res) {
    var query = connection.query("Select * from role", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})
//get roles of one department of a company
app.get('/getRoles/:uid', function (req, res) {
    var Qstring = "Select * from role where manager_ID in(select ID from manager where dep_ID =" + req.params.uid + ")";
    console.log(Qstring);
    var query = connection.query(Qstring, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})
//get employee as department header//
app.get('/getHeaders/:uid', function (req, res) {
    var Qstring = "Select * from employee where branch_ID =" + req.params.uid;
    console.log(Qstring);
    var query = connection.query(Qstring, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
}) 

//get all employees in DB
app.get('/getEmployees', function (req, res) {
    console.log(req.body);
    var query = connection.query("Select * from employee", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})
//get managers for spacial project
app.get('/getManagers_proj/:uid', function (req, res) {
    var Qstring = "Select * from employee where branch_ID in(select ID from branch where company_ID =" + req.params.uid + ")";
    console.log(Qstring);

    var query = connection.query(Qstring, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})
//get employees of one branch of a company
app.get('/getEmployees/:uid', function (req, res) {
    var Qstring = "Select * from role where manager_ID in(select ID from manager where dep_ID= " + req.params.uid + ")";
    var query = connection.query(Qstring, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})

//get all managers in DB
app.get('/getManagers', function (req, res) {
    console.log(req.body);
    var query = connection.query("Select * from manager", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})

//get tasks
app.get('/getTasks', function (req, res) {
    console.log(req.body);
    var query = connection.query("Select * from task", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})
//get task of one project
app.get('/getPTasks/:uid', function (req, res) {
    var Qstring = "Select * from task where project_ID = " + req.params.uid;
    var query = connection.query(Qstring, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})
//get employees of one project
app.get('/getPEmployees/:uid', function (req, res) {
    var Qstring = "Select * from employee where ID in(select employee_ID from task where project_ID = " + req.params.uid + ")";
    // var Qstring = "Select * from employee where branch_ID = "+req.params.uid;
    //console.log(Qstring);
    var query = connection.query(Qstring, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})

//get all branches in DB
app.get('/getBranches', function (req, res) {
    console.log(req.body);
    var query = connection.query("Select * from branch", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})
//get branchs of one company
app.get('/getBranches/:uid', function (req, res) {
    var Qstring = "Select * from branch where company_ID = " + req.params.uid;
    var query = connection.query(Qstring, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})


console.log('Example app listening on port 1880!')
app.listen(1880, function () {
})
