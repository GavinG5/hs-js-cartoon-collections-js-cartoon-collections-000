var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];



function dwarfRollCall(array) {
    var line = [];
    var output = "";
    for(var i=0;i<array.length;i++) {
        line = `${i+1}. ${array[i]} `;
    output = output.concat(line);
    } return output
  }
  dwarfRollCall(dwarves);
  
  
   var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]

    function summonCaptainPlanet(array){
      var array2 = [];
      for(var i=0;i<array.length;i++) {
        array2.push(`${array[i]}!`.toUpperCase());
      } return array2;
  }
    summonCaptainPlanet(planeteerCalls);


function longPlaneteerCalls(array) {
  for(var i=0;i<array.length;i++) {
    if(array[i].length>4) {
    return true;
  } else {
    return false;
  }
}
}

var snacks = ["crackers", "gouda", "thyme"];
var soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"]
var noCheese = ['peanuts','soda'];

function findTheCheese(array) {
  for(var i=0;i<array.length;i++) {
    if(array[i]==="gouda"||"cheddar"||"camembert") {return array[i]}
  }
}
