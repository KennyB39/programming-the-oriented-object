class Employees{
    const( name, id, email ){
        this.name = name
        this.id = id
        this.email = email
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Email"
    }
    
}

module.exports = Employees