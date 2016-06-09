/**
 * Created by zf on 2016/5/28.
 */

var student = require('./student')
var teacher = require('./teacher')

function insert(studentnames,teachername) {
    studentnames.forEach(function (item,index) {
        student.add(item)
    })
    teacher.add(teachername)
}
exports.add = insert