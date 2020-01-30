let data = [
    { id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" }
];
data.forEach(item => {
    console.log(`${item.id} ${item.name}, ${item.city}`);
});
let Employee = function (id, name, dept, city) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.city = city;
};
Employee.prototype.writeDept = function () {
    console.log(`${this.name} works in ${this.dept}`);
};
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
let data2 = [
    { id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
    salesEmployee
];
console.log("\nAdding a Type alias");
data2.forEach(item => {
    if ("dept" in item) {
        item.writeDept();
    }
    else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
class Employee2 {
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
let salesEmployee2 = new Employee2("wale", "Wale", "Engineering", "Paris");
let data3 = [
    { id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
    salesEmployee2
];
console.log("\n Using Classes\n");
data3.forEach(item => {
    if (item instanceof Employee2) {
        item.writeDept();
    }
    else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
console.log(salesEmployee2.dept);
class Employee3 {
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
let salesEmployee3 = new Employee3("wunmi", "Wunmi", "Political Science", "United Kingdom");
salesEmployee3.writeDept();
class Person4 {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
}
class Employee4 extends Person4 {
    constructor(id, name, dept, city) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
console.log("\n Using class Inheritance");
let data4 = [new Person4("bsmith", "Bob Smith", "London"), new Employee4("fvega", "Fidel Vega", "Sales", "Paris")];
data4.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    if (item instanceof Employee4) {
        console.log(item.writeDept());
    }
});
class Customer extends Person4 {
    constructor(id, name, city, creditLimit) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
    }
}
class Supplier extends Person4 {
    constructor(id, name, city, companyName) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.companyName = companyName;
    }
}
let data5 = [new Employee4("fvega", "Fidel Vega", "Sales", "Paris"), new Customer("ajones", "Alice Jones", "London", 500)];
data5.push(new Supplier("dpeters", "Dora Peters", "New York", "acme"));
data5.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    if (item instanceof Employee4) {
        item.writeDept();
    }
    else if (item instanceof Customer) {
        console.log(`Customer ${item.name} has ${item.creditLimit} limit`);
    }
    else if (item instanceof Supplier) {
        console.log(`Supplier ${item.name} works for ${item.companyName}`);
    }
});
class Person5 {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    getDetails() {
        return `${this.name}, ${this.getSpecificDetails()}`;
    }
}
class Employee5 extends Person5 {
    constructor(id, name, dept, city) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    getSpecificDetails() {
        return `works in ${this.dept}`;
    }
}
class Customer5 extends Person5 {
    constructor(id, name, city, creditLimit) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
    }
    getSpecificDetails() {
        return `has ${this.creditLimit} limit`;
    }
}
class Supplier5 extends Person5 {
    constructor(id, name, city, companyName) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.companyName = companyName;
    }
    getSpecificDetails() {
        return `works for ${this.companyName}`;
    }
}
console.log("\n Using Abstract Classes");
let data6 = [new Employee5("fvega", "Fidel Vega", "Sales", "Paris"), new Customer5("ajones", "Alice Jones", "London", 500)];
data6.push(new Supplier5("dpeters", "Dora Peters", "New York", "Acme"));
data6.forEach(item => console.log(item.getDetails()));
console.log("Type Guarding an Abstract Class");
class Customer52 {
    constructor(id, name, city, creditLimit) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
    }
}
let data7 = [
    new Employee5("fvega", "Fidel Vega", "Sales", "Paris"),
    new Customer52("ajones", "Alice Jones", "London", 500)
];
data7.forEach(item => {
    if (item instanceof Person5) {
        console.log(item.getDetails());
    }
    else {
        console.log(`Customer 52: ${item.name}`);
    }
});
class Employee6 {
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
}
class Customer6 {
    constructor(id, name, city, creditLimit) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
    }
    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
}
let data8 = [
    new Employee6("fvega", "Fidel Vega", "Sales", "Paris"),
    new Customer6("ajones", "Alice Jones", "London", 500)
];
console.log("\nImplementing Multiple Interfaces");
data8.forEach(item => console.log(item.getDetails()));
class Customer7 {
    constructor(id, name, city, creditLimit, dogName) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
        this.dogName = dogName;
    }
    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
    getDogDetails() {
        return `${this.name} has a dog named ${this.dogName}`;
    }
}
let alice = new Customer7("ajones", "Alice Jones", "London", 500, "Fido");
let dogOwners = [alice];
dogOwners.forEach(item => console.log(item.getDogDetails()));
console.log("Extending Interfaces");
let data9 = [new Employee6("fvega", "Fidel Vega", "Sales", "Paris"), alice];
data9.forEach(item => console.log(item.getDetails()));
console.log("Optional Interface Properties and Methods");
class AbstractDogOwner {
    getDogDetails() {
        if (this.dogName) {
            return `${this.name} has a dog called ${this.dogName}`;
        }
    }
}
class DogOwningCustomer extends AbstractDogOwner {
    constructor(id, name, city, creditLimit, dogName) {
        super();
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
        this.dogName = dogName;
    }
    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
}
let aliceDog = new DogOwningCustomer("aliceDog", "Alice Jones Dog", "London", 500, "Fido Dido");
if (aliceDog.getDogDetails) {
    console.log(aliceDog.getDogDetails());
}
console.log("Type Guarding an Interface");
class Employee8 {
    constructor(name, company) {
        this.name = name;
        this.company = company;
    }
    getDetails() {
        return `${this.name} works for ${this.company}`;
    }
}
class SportsProduct {
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
console.log("\n Type Guarding an Interface");
let data10 = [new Employee8("Bob Smith", "Acme"), new SportsProduct("Running Shoes", "Running", 90.50), new Employee8("Dora Peters", "BigCo")];
data10.forEach(item => {
    if ("getDetails" in item) {
        console.log(`Person ${item.getDetails()}`);
    }
    else {
        console.log(`Product: ${item.name}, ${item.price}`);
    }
});
class ProductGroup {
    constructor(...initialProducts) {
        initialProducts.forEach(p => this[p[0]] = p[1]);
    }
}
let group = new ProductGroup(["shoes", new SportsProduct("Shoes", "Running", 90.50)]);
group.hat = new SportsProduct("Hat", "Skiing", 20);
Object.keys(group).forEach(k => console.log(`Property Name: ${k}`));
