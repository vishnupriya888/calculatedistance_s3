var mountainImg, mountain;
var gameState = "start";
function preload() {
  mountainImg = loadImage("mountain.png");
  personImg = loadImage("icestupa.png");
  rope1Img = loadImage("rope1.png");
}
function setup() {
  createCanvas(1500, 800);
  rope_clicked_times = 0;
  no_of_ropes = 0;
  mountain = createSprite(1110, 245, 10, 10);
  mountain.addImage("mountainImg", mountainImg);
  mountain.scale = 1.4;

  person = createSprite(400, 250, 10, 10);
  person.addImage("personImg", personImg);
  person.scale = 0.7;

  rope1 = createSprite(1120, 105, 10, 20);
  rope1.addImage("rope1Img", rope1Img);
  rope1.scale = 0.04;
  rope1.rotation = -47;
  rope1.visible = false;

  rope2 = createSprite(1070, 160, 10, 20);
  rope2.addImage("rope1Img", rope1Img);
  rope2.scale = 0.04;
  rope2.rotation = -47;
  rope2.visible = false;

  rope3 = createSprite(1018, 190, 10, 20);
  rope3.addImage("rope1Img", rope1Img);
  rope3.scale = 0.03;
  rope3.visible = false;

  rope4 = createSprite(950, 210, 10, 20);
  rope4.addImage("rope1Img", rope1Img);
  rope4.scale = 0.04;
  rope4.rotation = -30;
  rope4.visible = false;

  rope5 = createSprite(900, 250, 10, 20);
  rope5.addImage("rope1Img", rope1Img);
  rope5.scale = 0.04;
  rope5.rotation = -45;
  rope5.visible = false;

  rope6 = createSprite(845, 300, 10, 20);
  rope6.addImage("rope1Img", rope1Img);
  rope6.scale = 0.04;
  rope6.rotation = -44;
  rope6.visible = false;

  rope7 = createSprite(778, 320, 10, 20);
  rope7.addImage("rope1Img", rope1Img);
  rope7.scale = 0.04;
  rope7.visible = false;

  rope8 = createSprite(720, 355, 10, 20);
  rope8.addImage("rope1Img", rope1Img);
  rope8.scale = 0.04;
  rope8.rotation = -50;
  rope8.visible = false;

  rope9 = createSprite(660, 380, 10, 20);
  rope9.addImage("rope1Img", rope1Img);
  rope9.scale = 0.04;
  rope9.rotation = 0;
  rope9.visible = false;

  rope10 = createSprite(600, 380, 10, 20);
  rope10.addImage("rope1Img", rope1Img);
  rope10.scale = 0.04;
  rope10.rotation = 0;
  rope10.visible = false;

  // distance = createInput("").attribute("placeholder", "Total length of Rope ");
  // distance.position(1100, 700);

  // check = createButton("CHECK");
  // check.position(1300, 700);
  // check.mousePressed(win);
}
function win() {}
function draw() {
  background("chocolate");
  drawSprites();
  fill("white");
  text(
    "X " + World.mouseX + " , Y " + World.mouseY,
    World.mouseX,
    World.mouseY
  );
  text("Source Location", 1100, 50);
  textSize(20);
  text("Press R to display rope. \nEach rope is of length 10 m", 50, 50);
  if (keyDown("r")) {
    rope_clicked_times += 1;
    click(rope_clicked_times);
  }
  text("Number of Ropes Used is " + no_of_ropes, 1100, 650);
  textSize(15);
  fill("white");
  // if (rope1.visible === true) {
  //   text("10", 1109, 140);
  // }
  // if (rope2.visible === true) {
  //   text("20", 1052, 190);
  // }
  // if (rope3.visible === true) {
  //   text("30", 990, 210);
  // }
  // if (rope4.visible === true) {
  //   text("40", 910, 220);
  // }
  // if (rope5.visible === true) {
  //   text("50", 882, 290);
  // }
  // if (rope6.visible === true) {
  //   text("60", 825, 345);
  // }
  // if (rope7.visible === true) {
  //   text("70", 737, 355);
  // }
  // if (rope8.visible === true) {
  //   text("80", 655, 361);
  // }
  // if (rope9.visible === true) {
  //   text("90", 641, 440);
  // }
}
function click(x) {
  if (x == 1) {
    rope1.visible = true;
    no_of_ropes = no_of_ropes + 1;
  }
  if (x == 5) {
    rope2.visible = true;
    no_of_ropes = no_of_ropes + 1;
  }

  if (x == 8) {
    rope3.visible = true;
    no_of_ropes = no_of_ropes + 1;
  }

  if (x == 12) {
    rope4.visible = true;
    no_of_ropes = no_of_ropes + 1;
  }

  if (x == 16) {
    rope5.visible = true;
    no_of_ropes = no_of_ropes + 1;
  }

  if (x == 20) {
    rope6.visible = true;
    no_of_ropes = no_of_ropes + 1;
  }
  if (x == 24) {
    rope7.visible = true;
    no_of_ropes = no_of_ropes + 1;
  }

  if (x == 28) {
    rope8.visible = true;
    no_of_ropes = no_of_ropes + 1;
  }
  if (x == 32) {
    rope9.visible = true;
    no_of_ropes = no_of_ropes + 1;
  }
  if (x == 36) {
    rope10.visible = true;
    no_of_ropes = no_of_ropes + 1;
  }
}
