let message_1;
let login = "Сотрудник";

if (login == "Сотрудник") {
  message_1 = "Привет";
} else if (login == "Директор") {
  message_1 = "Здравствуйте";
} else if (login == "") {
  message_1 = "Нет логина";
} else {
  message_1 = "";
}

console.log(message_1);

let message_2 =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";

console.log(message_2);
