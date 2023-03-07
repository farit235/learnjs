function AskName() {
  let response = prompt("Каково «официальное» название JavaScript?", "");
  let message;

  if (response == "EcmaScript") {
    message = "Верно!";
  } else {
    message = "Не знаете? «EcmaScript»!";
  }

  alert(message);
}
AskName();
