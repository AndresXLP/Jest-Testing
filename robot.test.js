const createRobot = require("./robot");

describe("Create robot", () => {
  test("Posición inicial", () => {
    expect(createRobot(0, 10).moveUp()).toEqual("Limite maximo Superior");
    expect(createRobot(10, 10).moveUp()).toEqual("Limite maximo Superior");
    expect(createRobot(0, 3).moveUp()).toEqual(4);
  });
  test("Posición Superior", () => {
    expect(createRobot(0, 10).moveUp()).toEqual("Limite maximo Superior");
    expect(createRobot(0, 0).moveUp()).toEqual(1);
  });
  test("Posición Inferior", () => {
    expect(createRobot(0, 0).moveDown()).toEqual("Limite maximo Inferior");
    expect(createRobot(0, 9).moveDown()).toEqual(8);
  });
  test("Posición Derecha", () => {
    expect(createRobot(0, 0).moveRight()).toEqual(1);
    expect(createRobot(10, 0).moveRight()).toEqual("Limite maximo Derecho");
    expect(createRobot(9, 0).moveRight()).toEqual(10);
  });
  test("Posición Izquiera", () => {
    expect(createRobot(0, 0).moveLeft()).toEqual("Limite maximo Izquierdo");
    expect(createRobot(4, 0).moveLeft()).toEqual(3);
  });
});
