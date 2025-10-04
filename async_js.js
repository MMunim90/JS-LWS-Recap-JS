// Asynchronous JavaScript

async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
  } catch (err) {
    console.log(err);
  }
}

function bigWork() {
  return getData();
}

(async function () {
  const result = await bigWork();
})();

console.log("need to use the response");
