function printBadges(employeeNames) {
  for(i = 0; i < employeeNames.length; i++) {
    console.log(`Welcome ${employeeNames[i]}! You are employee #${i + 1}.`)
  }
  return employeeNames
}

function tailsNeverFails() {
  let tailsCounter = 0

  while (Math.random() >= 0.5) {
    tailsCounter++
  }

  return `You got ${tailsCounter} tails in a row!`
}