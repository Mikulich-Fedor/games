// Mouse Jerry
var Jerry = new Jerry();

function Jerry() {
  this.coordX = 100;
  this.coordY = 500;
  this.width = 25;
  this.height = 25;
  this.name = "Jerry";
  this.sppedX = 15;
  this.sppedY = 15;

  this.state = function(edit) {
    if (edit === "top") {
      edit += this.sppedY;
    } else if (edit === "bottom") {
      edit += this.sppedY;
    } else if (edit === "left") {
      edit += this.sppedX;
    } else if (edit === "right") {
      edit += this.sppedX;
    }
  };
}
// Cat Tom
function Tomas() {
  this.cordX = 50;
  this.cordY = 50;
  this.width = 50;
  this.height = 50;
  this.name = "Tom";
  this.sppedX = 15;
  this.sppedY = 7.5;
  this.state = function(edit) {
    if (edit === "top") {
      edit += this.sppedY;
    } else if (edit === "bottom") {
      edit += this.sppedY;
    } else if (edit === "left") {
      edit += this.sppedX;
    } else if (edit === "right") {
      edit += this.sppedX;
    }
  };
}

var Tomas = new Tomas();

console.log(Tomas);

//копия
function makeClone(Tomas) {
  let clone = {}; // Создаем новый пустой объект
  for (let i in Tomas) {
    // Перебираем все свойства копируемого объекта
    if (Tomas.hasOwnProperty(i)) {
      // Только собственные свойства
      if ("Tomas" === typeof Tomas[i])
        // Если свойство так же объект
        clone[i] = makeClone(Tomas[i]);
      // Делаем клон свойства
      else clone[i] = Tomas[i]; // Или же просто копируем значение
    }
  }
  return clone;
}

console.log(makeClone(Tomas));

// var copy = JSON.parse(JSON.stringify(Tomas));
// console.log(copy);


// интервал
// setInterval(makeClone(), 5000);
