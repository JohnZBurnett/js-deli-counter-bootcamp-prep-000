var katzDeli = [];

var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`


}

function nowServing(katzDeliLine) {
  return `Currently serving ${katzDeliLine[0]}.`
  katzDeliLine.unshift
}
