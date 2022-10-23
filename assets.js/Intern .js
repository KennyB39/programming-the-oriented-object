const Employees = require ('./Employees');

class Intern extends Employees{
    constrtuctor({name, id, email}){
    super(name, id, email)
    this.school = school
}
getSchool(){
    return this.school
}
getRole(){
    return 'Intern'
}
}

module.exports = Intern;