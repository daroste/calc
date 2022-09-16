function appendOperation(operation) {
  document.getElementById("Sum").innerHTML += operation;
}

function calculateResult() {
  let container = document.getElementById("Sum");
  let result = eval(container.innerHTML);
  container.innerHTML = result;
}

function deleteLast() {
  let container = document.getElementById("Sum");
  if (container.innerHTML.endsWith("")) {
    container.innerHTML = container.innerHTML.slice(0, -1);
  } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
  }
}

function deleteAll() {
  let container = document.getElementById("Sum");
  if (container.innerHTML.endsWith("")) {
    container.innerHTML = container.innerHTML.slice(0, -9);
  } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
  }
}
