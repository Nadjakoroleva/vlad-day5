let hero;
let hero2;
let x = 0;
let y = 0;
let dx = 5;

function setup() {
  createCanvas(800, 400);
  hero.resize(0, 200);
  hero2.resize(0, 200);
  y = random(50, 200);
}

function preload() {
  // preload() runs once
  hero = loadImage("hero.png");
  hero2 = loadImage("hero2.png");
}

function draw() {
  background(0);
  // 2. Спавним персонажа на х = 50 и y - рандомно

  if (x > width - 50 || x < 0) {
    dx = -dx;
  }

  if (dx > 0) {
    image(hero, x, y);
  } else {
    image(hero2, x, y);
  }

  x = x + dx;
}
// 3. Персонаж должен двигаться вправо до конца экрана

// 4. Когда персонаж достигает конца экрана, он идет обратно.
//    Оттуда снова разворачивается и идет вперед.
