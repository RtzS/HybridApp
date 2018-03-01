const Records = require("./models/dataList");

module.exports = function(app) {

    app.get('/', (req, res) => {
        res.send('Hello World')
    });
    app.get('/demoList', (req, res) => {
        Records.getData((err, employees) => {
            if (err) {
                console.error(err);
            }
            res.json(employees);
        });
    });

    //delete Employee Data
    app.delete('/demoList/:name', (req, res) => {
        let firstName = req.params.firstName;
        Records.deleteData(firstName, (err, employee) => {
            if (err) {
                console.error(err);
            }
            res.json(employee);
        });
    });

    //add Employees Data
    app.post('/demoList', (req, res) => {
        var employee = req.body;
        Records.addData(employee, (err, employee) => {
            if (err) {
                res.json(err);
            }
            res.json(employee);
        });
    });

    // Update Employee Data
    // app.put('/api/employee/:id',(req,res) =>{
    //     var id = req.params.id;
    //     var employee = req.body;
    //     Records.updateData(id,employee,{},(err,employee)=>{
    //         if(err){
    //             res.json(err);
    //         }
    //         res.json(employee);
    //     });
    // });
};