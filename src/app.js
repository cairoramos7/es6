class People {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    toString() {
        return `
        Name: ${this.name}
        Email: ${this.email}
        Phone: ${this.phone}
        `;
    }
}

class Client extends People {
    constructor(id, name, email, phone) {
        super(name, email, phone);
        this.id = id;
    }

    toString() {
        return `
        Id: ${this.id}
        ${super.toString()}
        `;
    }
}

let test = new Client(1, "Cairo", "cairo.ramosoliveira4@gmail.com", "99 9999 9 999");
console.log(test.toString());