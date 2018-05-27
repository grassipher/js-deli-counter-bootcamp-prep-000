var katzDeli = [];
function takeANumber(katzDeli, newPerson){
  katzDeli.push(newPerson);
  var position = katzDeli.indexOf(newPerson)+1;
  return `Welcome, ${newPerson}. You are number ${position} in line.`;
}
