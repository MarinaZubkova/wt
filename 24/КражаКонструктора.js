function Car() {
  this.drive =true;
  this.sound = function(){
  return "���� ������"
}
}


function Lada() {
  Car.call(this)
  this.model ="C����";
  
}


function Kalina(){
  Lada.call(this)
  this.year = 2004;
  this.color = "dark-red";
  
}

var lastochkaMoya = new Kalina()

alert(lastochkaMoya.sound())