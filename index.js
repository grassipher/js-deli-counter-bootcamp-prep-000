var katzDeli = [];
function takeANumber(katzDeli, newPerson){
  katzDeli.push(newPerson);
  var position = katzDeli.indexOf(newPerson)+1;
  return `Welcome, ${newPerson}. You are number ${position} in line.`;
}
function nowServing(katzDeli){
  if (katzDeli.length>0){
    var firstPerson = katzDeli[0];
    delete katzDeli[0];
    return `Currently serving ${firstPerson}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(katzDeli){
  if (katzDeli.length>0){
    var line;
    for (var i = 0; i < katzDeli.length; i++){
      if (i === katzDeli.length){
        line = `${i}. ${katzDeli[i]}`;
      } else {
        line = `${i}. ${katzDeli[i]}, `;
      }
    }
    return `The line is currently: ${line}`;
  } else {
    return "The line is currently empty.";
  }
}