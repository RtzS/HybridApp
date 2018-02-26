const mongoose = require("mongoose");

let dataSchema = mongoose.Schema({
    "empId": {
        type: Number,
        required: [true, 'Users id is required']
    },
    "name": {
        type: String,
        required: [true, 'Users Name is required']
    }
});

let dataList = module.exports = mongoose.model('EmpList', dataSchema);

module.exports.getData = (callback, limit) => {
    dataList.find(callback).limit(limit);
}

module.exports.deleteData = (firstName, callback) => {
    let query = { "name": firstName };
    dataList.remove(query, callback);
}

module.exports.addData = (record, callback) => {
    dataList.create(record, callback);
}

//Update Employee
// module.exports.updateEmployeeData = (id, employee, options, callback) => {
//     var query = { "employee_id": id };
//     var update = {
//         "first_name": employee["first_name"],
//         "last_name": employee["last_name"],
//         "age": employee["age"],
//         "sex": employee["sex"],
//         "designation": employee["designation"],
//         "date_of_birth": employee["date_of_birth"],
//         "current_project": employee["current_project"],
//         "address": employee["address"],
//         "reporting_manager": employee["reporting_manager"],
//         "employee_id": employee["employee_id"],
//         "secondary_skills": employee["secondary_skills"],
//         "primary_skills": employee["primary_skills"]
//     }
//     EmployeesData.findOneAndUpdate(query, update, options, callback);
// }