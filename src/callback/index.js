function sum(num1, num2) {
  return num1 + num2;
}
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

setTimeout(greeting(), 5000);
function greeting(name) {
    console.log(`Hola ${name} Javascript`)
}