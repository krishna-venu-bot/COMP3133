class Customer {

    firstName: string;
    lastName: string;

    greeter() {
        console.log("Hello " + this.firstName + " " + this.lastName);
    }
}

let customer = new Customer();

customer.firstName = "Krishna";
customer.lastName = "Venu";

customer.greeter();