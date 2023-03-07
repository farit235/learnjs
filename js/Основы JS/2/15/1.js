function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Родители разрешили?");
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Родители разрешили?");
}

//отличий нет, тк если условие неверно ,все равно выполнится return
