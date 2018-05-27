var katzDeliLine = [];
function takeANumber(katzDeliLine, newPerson){
  katzDeli.push(newPerson);
  var position = katzDeli.indexOf(newPerson)+1;
  return `Welcome, ${newPerson}. You are number ${position} in line.`;
}
function nowServing(katzDeliLine){
  if (katzDeli.length>0){
    var firstPerson = katzDeliLine[1];
    delete katzDeliLine[1];
    return `Currently serving ${firstPerson}`;
  } else {
    return "There is nobody waiting to be served!";
  }
}