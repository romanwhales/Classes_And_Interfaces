type Person = {
    id: string,
    name: string,
    city: string
}

let data: Person[] = [
    {id:"bsmith",name:"Bob Smith",city:"London"},
    {id: "ajones",name:"Alice Jones",city:"Paris"},
    {id:"dpeters",name:"Dora Peters",city:"New York"}
]

data.forEach(item => {
    console.log(`${item.id} ${item.name}, ${item.city}`)
})

type Employee = {id:string,name:string,dept:string,city:string,writeDept:() => void}

let Employee = function(id:string,name:string,dept:string,city:string){
    this.id = id
    this.name = name
    this.dept = dept
    this.city = city
}

Employee.prototype.writeDept = function(){
    console.log(`${this.name} works in ${this.dept}`)
}

let salesEmployee = new Employee("fvega","Fidel Vega","Sales","Paris");

let data2:(Person | Employee)[] = [
    {id:"bsmith",name:"Bob Smith",city:"London"},
    {id: "ajones",name:"Alice Jones",city:"Paris"},
    {id:"dpeters",name:"Dora Peters",city:"New York"},
    salesEmployee
]

console.log("\nAdding a Type alias")

data2.forEach(item => {
    if("dept" in item){
        item.writeDept()
    }else{
        console.log(`${item.id} ${item.name}, ${item.city}`)
    }
})

class Employee2{
    id: string
    name: string
    dept: string
    city: string
    constructor(id:string,name:string,dept:string,city:string){
        this.id = id
        this.name = name
        this.dept = dept
        this.city = city
    }
    writeDept(){
        console.log(`${this.name} works in ${this.dept}`)
    }
}

let salesEmployee2 = new Employee2("wale","Wale","Engineering","Paris")

let data3 : (Person | Employee2)[] = [
    {id:"bsmith",name:"Bob Smith",city:"London"},
    {id: "ajones",name:"Alice Jones",city:"Paris"},
    {id:"dpeters",name:"Dora Peters",city:"New York"},
    salesEmployee2
]

console.log("\n Using Classes\n")
data3.forEach(item => {
    if(item instanceof Employee2){
        item.writeDept()
    }else{
        console.log(`${item.id} ${item.name}, ${item.city}`)
    }
})

console.log(salesEmployee2.dept)

class Employee3{
    constructor(public readonly id: string,public name: string,private dept: string,public city:string){

    }
    writeDept(){
        console.log(`${this.name} works in ${this.dept}`)
    }
}

let salesEmployee3 = new Employee3("wunmi","Wunmi","Political Science","United Kingdom")
salesEmployee3.writeDept()

class Person4{
    constructor(public id:string,public name: string,public city:string){

    }
}

class Employee4 extends Person4{
    constructor(public readonly id:string,public name: string,private dept:string,public city:string){
        super(id,name,city);
    }
    writeDept(){
        console.log(`${this.name} works in ${this.dept}`)
    }
}

console.log("\n Using class Inheritance");

let data4 = [new Person4("bsmith","Bob Smith","London"),new Employee4("fvega","Fidel Vega","Sales","Paris")]

data4.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    if(item instanceof Employee4){
        console.log(item.writeDept())
    }
})

class Customer extends Person4{
    constructor(public readonly id: string,public name: string,public city:string,public creditLimit:number){
        super(id,name,city);
    }
}

class Supplier extends Person4{
    constructor(public readonly id: string,public name:string,public city:string,public companyName:string){
        super(id,name,city);
    }
}

let data5:Person4[] = [new Employee4("fvega","Fidel Vega","Sales","Paris"),new Customer("ajones","Alice Jones","London",500)];
data5.push(new Supplier("dpeters","Dora Peters","New York","acme"));

data5.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    if(item instanceof Employee4){
        item.writeDept();
    }else if(item instanceof Customer){
        console.log(`Customer ${item.name} has ${item.creditLimit} limit`)
    }else if(item instanceof Supplier){
        console.log(`Supplier ${item.name} works for ${item.companyName}`)
    }
})

abstract class Person5{
    constructor(public id:string,public name:string,public city:string){

    }
    getDetails():string{
        return `${this.name}, ${this.getSpecificDetails()}`
    }
    abstract getSpecificDetails():string;
}

class Employee5 extends Person5{
    constructor(public readonly id: string,public name:string,private dept:string,public city:string){
        super(id,name,city)
    }
    getSpecificDetails(){
        return `works in ${this.dept}`
    }
}

class Customer5 extends Person5{
    constructor(public readonly id: string,public name:string,public city:string,public creditLimit:number){
        super(id,name,city)
    }
    getSpecificDetails(){
        return `has ${this.creditLimit} limit`
    }
}

class Supplier5 extends Person5{
    constructor(public readonly id, public name: string,public city:string,public companyName:string){
        super(id,name,city)
    }
    getSpecificDetails(){
        return `works for ${this.companyName}`
    }
}


console.log("\n Using Abstract Classes")
let data6 : Person5[] = [new Employee5("fvega","Fidel Vega","Sales","Paris"),new Customer5("ajones","Alice Jones","London",500)]
data6.push(new Supplier5("dpeters","Dora Peters","New York","Acme"))

data6.forEach(item => console.log(item.getDetails()))


console.log("Type Guarding an Abstract Class")

class Customer52{
    constructor(public readonly id: string, public name:string,public city:string,public creditLimit:number){

    }
}

let data7: (Person5 | Customer52)[] = [
    new Employee5("fvega","Fidel Vega","Sales","Paris"),
    new Customer52("ajones","Alice Jones","London",500)
]

data7.forEach(item => {
    if (item instanceof Person5){
        console.log(item.getDetails())
    }else{
        console.log(`Customer 52: ${item.name}`)
    }
})

interface Person6{
    name: string;
    getDetails():string;
}

class Employee6 implements Person6{
    constructor(public readonly id:string,public name:string,private dept:string,public city:string){

    }
    getDetails(){
        return `${this.name} works in ${this.dept}`
    }
}

class Customer6 implements Person6{
    constructor(public readonly id: string,public name:string,public city:string,public creditLimit:number){

    }
    getDetails(){
        return `${this.name} has ${this.creditLimit} limit`
    }
}

let data8: Person6[] = [
    new Employee6("fvega","Fidel Vega","Sales","Paris"),
    new Customer6("ajones","Alice Jones","London",500)
]
console.log("\nImplementing Multiple Interfaces");
data8.forEach(item => console.log(item.getDetails()))

interface DogOwner{
    dogName:string;
    getDogDetails():string;

}

class Customer7 implements Person6,DogOwner{
    constructor(public readonly id:string,public name:string,public city:string,public creditLimit:number,public dogName:string){

    }
    getDetails(){
        return `${this.name} has ${this.creditLimit} limit`
    }
    getDogDetails(){
        return `${this.name} has a dog named ${this.dogName}`
    }
}

let alice = new Customer7("ajones","Alice Jones","London",500,"Fido")
let dogOwners: [DogOwner] = [alice]
dogOwners.forEach(item => console.log(item.getDogDetails()))


console.log("Extending Interfaces")

let data9: Person6[] = [new Employee6("fvega","Fidel Vega","Sales","Paris"),alice]
data9.forEach(item => console.log(item.getDetails()))


console.log("Optional Interface Properties and Methods");

interface Person7{
    name:string
    getDetails(): string;

    dogName?:string;
    getDogDetails?():string
}

abstract class AbstractDogOwner implements Person7{
    abstract name: string;
    abstract dogName?: string;


    abstract getDetails();
    getDogDetails(){
        if(this.dogName){
            return `${this.name} has a dog called ${this.dogName}`
        }
    }
}

class DogOwningCustomer extends AbstractDogOwner{
    constructor(public readonly id: string, public name:string,public city:string,public creditLimit:number,public dogName){
        super()
    }
    getDetails(){
        return `${this.name} has ${this.creditLimit} limit`
    }
}

let aliceDog = new DogOwningCustomer("aliceDog","Alice Jones Dog","London",500,"Fido Dido");
if(aliceDog.getDogDetails){
    console.log(aliceDog.getDogDetails())
}

console.log("Type Guarding an Interface")
interface Person8{
    name: string;
    getDetails():string;
}

interface Product{
    name:string;
    price: number;
}

class Employee8 implements Person8{
    constructor(public name:string,public company:string){
        
    }
    getDetails(){
        return `${this.name} works for ${this.company}`
    }
}

class SportsProduct implements Product{
    constructor(public name:string,public category:string,public price:number){

    }
}
console.log("\n Type Guarding an Interface")
let data10: (Person8 | Product)[] = [new Employee8("Bob Smith","Acme"),new SportsProduct("Running Shoes","Running",90.50),new Employee8("Dora Peters","BigCo")]

data10.forEach(item => {
    if("getDetails" in item){
        console.log(`Person ${item.getDetails()}`)
    }else{
        console.log(`Product: ${item.name}, ${item.price}`)
    }
})

class ProductGroup{
    constructor(...initialProducts:[string,Product][]){
        initialProducts.forEach(p => this[p[0]] = p[1])
    }
    [propertyName:string]:Product
}

let group = new ProductGroup(["shoes",new SportsProduct("Shoes","Running",90.50)])
group.hat = new SportsProduct("Hat","Skiing",20);
Object.keys(group).forEach(k => console.log(`Property Name: ${k}`))


