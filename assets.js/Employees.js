class Employee{
    const( name, id, email ){
        this.name = name
        this.id = id
        this.email = email
    }
    getname(){
        return `${this.name}`
    }
    getid(){
        return`${this.id}`
    }
    getemail(){
        return `${this.email}`
    }
    getrole(){
        return `Email`
    }
    
}

module.exports = Employee;