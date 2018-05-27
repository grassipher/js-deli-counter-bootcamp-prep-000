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
    return `Currently serving ${firstPerson}`;
  } else {
    return "There is nobody waiting to be served!";
  }
}