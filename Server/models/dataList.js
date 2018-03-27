const mongoose = require("mongoose");

let dataSchema = mongoose.Schema({
    "_id" : mongoose.Schema.Types.ObjectId,
	"id": {
        type: Number,
		required: [true, 'Users id is required']
    },
    "firstName": {
        type: String,
		required: [true, 'Users name is required']
    },
    "lastName": {
        type: String,
		required: [true, 'Users last_name is required']
    },
    "designation": {
        type: String
    }
},{ collection : 'demoList' });

let dataList = module.exports = mongoose.model('dataList', dataSchema);

module.exports.getData = (callback, limit) => {
    dataList.find(callback).limit(limit);
}

module.exports.deleteData = (firstName, callback) => {
    let query = { "firstName": firstName };
    dataList.remove(query, callback);
}

module.exports.addData = (record, callback) => {
    dataList.create(record, callback);
}

//Update Data
// module.exports.updateEmployeeData = (id, employee, options, callback) => {
//     var query = { "employee_id": id };
//     var update = {
//	        "id" : employee["id"],
//         "first_name": employee["first_name"],
//         "last_name": employee["last_name"],   
//         "designation": employee["designation"]
//     }
//     EmployeesData.findOneAndUpdate(query, update, options, callback);
// }