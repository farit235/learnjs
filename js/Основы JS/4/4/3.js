let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; //нужно возвращать сам объект из каждого вызова
  },
  down() {
    this.step--;
    return this; //нужно возвращать сам объект из каждого вызова
  },
  showStep: function () {
    alert(this.step);
    return this; //нужно возвращать сам объект из каждого вызова
  },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0
