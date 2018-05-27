function Car() {
  this.drive =true;
}

Car.prototype.sound = function(){
  return "Биииииииип"
}
function Lada() {

  this.model ="Cедан";
}

Lada.prototype =new Car()

function Kalina(){
  this.year = 2004;
  this.color = "dark-red";
}

Kalina.prototype = new Lada()

var lastochkaMoya = new Kalina()

alert(lastochkaMoya.sound())