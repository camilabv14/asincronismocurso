const promise = new Promise(function (resolve, reject) {
  resolve("hey!");
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("There is no cows on the farm");
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("finally"));

function delay(time, message) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message);
      }, time);
  });
}
delay(5000, "Hello after 5s").then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error)
}).finally(() => {
  console.log("finally")
});
