function Car() {
  this.drive =true;
}

Car.prototype.sound = function(){
  return "���� ������"
}

function Lada() {
  Car.call(this)
  this.model ="C����";
  
}

Lada.prototype =new Car()

function Kalina(){
  Lada.call(this)
  this.year = 2004;
  this.color = "dark-red";  
}

Kalina.prototype = new Lada()

var lastochkaMoya = new Kalina()

alert(lastochkaMoya.sound())
