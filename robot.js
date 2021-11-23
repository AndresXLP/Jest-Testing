function createRobot(px, py) {
  let x = px;
  let y = py;
  return {
    getX() {
      return x;
    },
    getY() {
      return y;
    },
    getPosition() {
      return x + "," + y;
    },
    moveUp() {
      y++;
      return validator() ? y : "Limite maximo Superior";
    },
    moveDown() {
      y--;
      return validator() ? y : "Limite maximo Inferior";
    },
    moveRight() {
      x++;
      return validator() ? x : "Limite maximo Derecho";
    },
    moveLeft() {
      x--;
      return validator() ? x : "Limite maximo Izquierdo";
    },
  };
  function validator() {
    if (x >= 0 && x < 11 && y >= 0 && y < 11) return true;
    else return false;
  }
}
module.exports = createRobot;
