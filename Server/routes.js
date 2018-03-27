const Records = require("./models/dataList");

module.exports = function(app) {

    app.get('/', (req, res) => {
        res.send('Hello World')
    });
    app.get('/demoList', (req, res) => {
        Records.getData((err, data) => {
            if (err) {
                console.error(err);
            }
            res.json(data);
        });
    });

    //delete Data
    app.delete('/demoList/:name', (req, res) => {
        let firstName = req.params.firstName;
        Records.deleteData(firstName, (err, employee) => {
            if (err) {
                console.error(err);
            }
            res.json(employee);
        });
    });

    //add Data
    app.post('/demoList', (req, res) => {
        var employee = req.body;
        Records.addData(employee, (err, employee) => {
            if (err) {
                res.json(err);
            }
            res.json(employee);
        });
    });

    // Update Data
    // app.put('/employee/:id',(req,res) =>{
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