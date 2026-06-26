// Class Parent
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    work() {
        console.log(`${this.name} is working.`);
    }

    showDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}

// Class Developer 
class Developer extends Employee {
    constructor(id, name, language) {
        super(id, name);
        this.language = language;
    }

    writeCode() {
        console.log(`${this.name} is writing code in ${this.language}.`);
    }

    
    work() {
        console.log(`${this.name} is developing software using ${this.language}.`);
    }
}

// Class FrontendDeveloper 
class FrontendDeveloper extends Developer {
    constructor(id, name, language, framework) {
        super(id, name, language);
        this.framework = framework;
    }

    buildUI() {
        console.log(`${this.name} is building UI using ${this.framework}.`);
    }

    work() {
        console.log(
            `${this.name} is developing frontend applications using ${this.language} and ${this.framework}.`
        );
    }
}

class Manager extends Employee {
    constructor(id, name, teamSize) {
        super(id, name);
        this.teamSize = teamSize;
    }

    conductMeeting() {
        console.log(
            `${this.name} is conducting a meeting with ${this.teamSize} team members.`
        );
    }

    work() {
        console.log(`${this.name} is managing a team of ${this.teamSize} employees.`);
    }
}

const employee = new Employee(101, "A");
const frontendDev = new FrontendDeveloper(
    102,
    "B",
    "JavaScript",
    "React"
);
const manager = new Manager(103, "C", 10);


employee.work();
employee.showDetails();

console.log();

frontendDev.work();
frontendDev.writeCode();
frontendDev.buildUI();

console.log();

manager.work();
manager.conductMeeting();