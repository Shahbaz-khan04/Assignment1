class Human {
  constructor(name, age, height, color, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.color = color;
    this.weight = weight;
  }

  sing() {
    return this.name + " sings songs";
  }
  game() {
    return this.name + " plays games";
  }
}

//----------------------------------------------------------------

let human1 = new Human("Shahbaz", 18, 65, "brown", 50);
let human2 = new Human("Asad", 25, 70, "brown", 57);

console.log(human1);
console.log(human1.sing());
console.log(human1.game());
console.log(human2);
console.log(human2.sing());
console.log(human2.game());
