declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare let data: Person[];
declare type Employee = {
    id: string;
    name: string;
    dept: string;
    city: string;
    writeDept: () => void;
};
declare let Employee: (id: string, name: string, dept: string, city: string) => void;
declare let salesEmployee: any;
declare let data2: (Person | Employee)[];
declare class Employee2 {
    id: string;
    name: string;
    dept: string;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare let salesEmployee2: Employee2;
declare let data3: (Person | Employee2)[];
declare class Employee3 {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare let salesEmployee3: Employee3;
declare class Person4 {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
}
declare class Employee4 extends Person4 {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare let data4: Person4[];
declare class Customer extends Person4 {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
}
declare class Supplier extends Person4 {
    readonly id: string;
    name: string;
    city: string;
    companyName: string;
    constructor(id: string, name: string, city: string, companyName: string);
}
declare let data5: Person4[];
declare abstract class Person5 {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
    getDetails(): string;
    abstract getSpecificDetails(): string;
}
declare class Employee5 extends Person5 {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    getSpecificDetails(): string;
}
declare class Customer5 extends Person5 {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
    getSpecificDetails(): string;
}
declare class Supplier5 extends Person5 {
    readonly id: any;
    name: string;
    city: string;
    companyName: string;
    constructor(id: any, name: string, city: string, companyName: string);
    getSpecificDetails(): string;
}
declare let data6: Person5[];
declare class Customer52 {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
}
declare let data7: (Person5 | Customer52)[];
interface Person6 {
    name: string;
    getDetails(): string;
}
declare class Employee6 implements Person6 {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    getDetails(): string;
}
declare class Customer6 implements Person6 {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
    getDetails(): string;
}
declare let data8: Person6[];
interface DogOwner {
    dogName: string;
    getDogDetails(): string;
}
declare class Customer7 implements Person6, DogOwner {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    dogName: string;
    constructor(id: string, name: string, city: string, creditLimit: number, dogName: string);
    getDetails(): string;
    getDogDetails(): string;
}
declare let alice: Customer7;
declare let dogOwners: [DogOwner];
declare let data9: Person6[];
interface Person7 {
    name: string;
    getDetails(): string;
    dogName?: string;
    getDogDetails?(): string;
}
declare abstract class AbstractDogOwner implements Person7 {
    abstract name: string;
    abstract dogName?: string;
    abstract getDetails(): any;
    getDogDetails(): string;
}
declare class DogOwningCustomer extends AbstractDogOwner {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    dogName: any;
    constructor(id: string, name: string, city: string, creditLimit: number, dogName: any);
    getDetails(): string;
}
declare let aliceDog: DogOwningCustomer;
interface Person8 {
    name: string;
    getDetails(): string;
}
interface Product {
    name: string;
    price: number;
}
declare class Employee8 implements Person8 {
    name: string;
    company: string;
    constructor(name: string, company: string);
    getDetails(): string;
}
declare class SportsProduct implements Product {
    name: string;
    category: string;
    price: number;
    constructor(name: string, category: string, price: number);
}
declare let data10: (Person8 | Product)[];
declare class ProductGroup {
    constructor(...initialProducts: [string, Product][]);
    [propertyName: string]: Product;
}
declare let group: ProductGroup;
