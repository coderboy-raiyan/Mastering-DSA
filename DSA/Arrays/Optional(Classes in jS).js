/*
  it's important to add super if you extends  from another class 
  super just a method to use the extends classes constructors
*/

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  intro() {
    console.log(`My name is ${this.name} and I'm a ${this.type}`);
  }
}

class wizard extends Player {
  constructor(name, type, work) {
    super(name, type);
    this.work = work;
  }

  play() {
    console.log(`Start ${this.work} ${this.name}`);
  }
}

const electroWizard = new wizard(
  "Electro Wizard",
  "Wizard",
  "ElectroThundering"
);
const iceWizard = new wizard("Ice Wizard", "Wizard", "making Ice cream");

iceWizard.play();
electroWizard.play();
