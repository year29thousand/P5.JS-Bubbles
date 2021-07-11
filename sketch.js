let bubble = [];
let MaxNumOfBubbles;

function setup() {
  createCanvas(1500, 450);
  MaxNumOfBubbles = random(50);
  for (let i = 0; i < MaxNumOfBubbles; i++) {
    bubble.push(new Bubble());
  }
}

function draw() {
  background(220);
  for (let i = 0; i < MaxNumOfBubbles; i++) {
    bubble[i].DetectPositionOrInput();
    bubble[i].move();
    bubble[i].Display();
    bubble[i].KickStarter();
  }
}

class Bubble {
  constructor() {
    this.radius = random(20, 50);
    this.X = random(width);
    this.Y = random(height);
    this.SpeedY = random(-15, 15);
    this.SpeedX = random(-15, 15);
    this.R = random(255);
    this.G = random(255);
    this.B = random(255);
  }

  DetectPositionOrInput() {
    if (this.X >= width - this.radius) {
      this.SpeedX = this.SpeedX * -1;
      this.X -= 10;
    }
    if (this.X <= 0 + this.radius) {
      this.SpeedX = this.SpeedX * -1;
      this.X += 10;
    }
    if (this.Y >= height - this.radius) {
      this.SpeedY = this.SpeedY * -1;
      this.Y -= 10;
    }
    if (this.Y <= 0 + this.radius) {
      this.SpeedY = this.SpeedY * -1;
      this.Y += 10;
    }
    if (this.X + this.radius == mouseX || this.X - this.radius == mouseX) {
      if (this.Y + this.radius == mouseY || this.Y - this.radius == mouseY) {
        //still working on this mouseCollision detection Meanwhile.... let's make it change colors when you  click
        this.SpeedX = this.SpeedX * -1;
        this.SpeedY = this.SpeedY * -1;
      }
    }
    if (mouseIsPressed && mouseButton == RIGHT) {
      this.R = random(255);
      this.G = random(255);
      this.B = random(255);
    }
    if (mouseIsPressed && mouseButton == LEFT && mouseX <= this.X + this.radius && mouseX >= this.X - this.radius && mouseY >= this.Y - this.radius && mouseY <= this.Y + this.radius) {
      this.X = mouseX;
      this.Y = mouseY;
      this.SpeedX = random(-1,1);
      this.SpeedY = random(-1,1);
      print("Bubble is being held");
    }
  }

  move() {
    this.X += this.SpeedX;
    this.Y += this.SpeedY;
  }

  Display() {
    fill(this.R, this.G, this.B);
    ellipse(this.X, this.Y, this.radius, this.radius);
  }

  KickStarter() {
    if (this.SpeedY <= 5 && this.SpeedY >= -5) {
      this.SpeedY += random(-15, 15);
    }
    if (this.SpeedX <= 5 && this.SpeedX >= -5) {
      this.SpeedX += random(-15, 15);
    }
  }
}
