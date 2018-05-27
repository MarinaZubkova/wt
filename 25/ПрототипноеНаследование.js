function object(o){
	function F(){}
	F.prototype = o
	return new F()
}

var Lada ={
  model: "Cедан",
  year: 2004,
  color: "dark-red"
  }

var LadaVesta = object(Lada)
LadaVesta.model = "Универсал"
LadaVesta.year = 2015