function showNaturalNumbers(n) {
  if (n > 1) {
    nextVar: for (var i = 2; i <= n; i++) {
      for (var j = 2; j < i; j++) {
        if (i % j == 0) {
          continue nextVar;
        }
      }
      console.log(i);
    }
  }
}
showNaturalNumbers(121);
