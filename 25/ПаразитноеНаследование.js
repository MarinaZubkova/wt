function object(o){
	function F(){}
	F.prototype = o
	return new F()
}

function createLadaVesta(original){
	var copy = object(original)
	copy.sound = function(){
        alert("���� ������")
    }
	return copy
}

var Lada ={
  model: "C����",
  year: 2004,
  color: "dark-red"
  }

var LadaVesta = createLadaVesta(Lada)
LadaVesta.sound()