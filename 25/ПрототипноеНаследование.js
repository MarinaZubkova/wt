function object(o){
	function F(){}
	F.prototype = o
	return new F()
}

var Lada ={
  model: "C����",
  year: 2004,
  color: "dark-red"
  }

var LadaVesta = object(Lada)
LadaVesta.model = "���������"
LadaVesta.year = 2015