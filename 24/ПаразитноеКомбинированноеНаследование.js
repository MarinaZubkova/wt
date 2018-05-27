function object(o){
	function F(){}
	F.prototype = o
	return new F()
}

function inheritProtorype(subType, superType){
	var prototype = object(superType.prototype)
	prototype.constructor = subType
	subType.prototype = prototype
}
function Car() {
  this.drive =true;
}

Car.prototype.sound = function(){
  return "Биии Биииип"
}

function Lada() {
  Car.call(this)
  this.model ="Cедан";  
}

inheritProtorype(Lada, Car)

function Kalina(){
  Lada.call(this)
  this.year = 2004;
  this.color = "dark-red";  
}

inheritProtorype(Kalina, Lada)

var lastochkaMoya = new Kalina()

alert(lastochkaMoya.sound())
