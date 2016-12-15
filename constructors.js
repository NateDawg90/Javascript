class Cat{
  constructor(name, owner){
    this.name = name;
    this.owner = owner;
  }
}
Cat.prototype.cuteStatement = function(){

  let that = this;
  function callOut() {
    return "Everyone loves " + that.name;
  }
  return callOut();
};

Cat.prototype.meow = function(){
  return "Meow!!";
};

let blob = new Cat("Bob", "Nathan");
let g = new Cat("Geoge", "Sally");

g.meow = function() {
  return "RAWRRRRR";
};

let sam = new Cat("Sam", "Chuck");

console.log(g.meow());
console.log(sam.meow());
