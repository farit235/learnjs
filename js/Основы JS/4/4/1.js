function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name); // Каким будет результат? - значение this внутри makeUser() равно undefined,
//потому что оно вызывается как функция
