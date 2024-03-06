import Player from "./Player.js";
import Rectangle from "./Rectangle.js";
import { Canvas, CanvasId, CanvasPlayer } from "./utils/Canvas.js";

const {canvas, ctx} = CanvasPlayer;
const wrapper = document.getElementById(Canvas.wrapperId) as HTMLDivElement;
const rectangle = new Rectangle((canvas.width/2) - (wrapper.clientWidth/12 / 2), (canvas.height/2) - (wrapper.clientWidth/12 / 2), wrapper.clientWidth/12, wrapper.clientWidth/12);

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

addEventListener("resize", () => {
  rectangle.x = rectangle.x * (canvas.width / canvasWidth);
  rectangle.y = rectangle.y * (canvas.height / canvasHeight);
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
});

let speed = 2;
let speedX = speed;
let speedY = speed;
const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "black"];

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  rectangle.x += (canvas.width/1500) * speedX;
  rectangle.y += (canvas.width/1500) * speedY;
  rectangle.width = wrapper.clientWidth/12;
  rectangle.height = wrapper.clientWidth/12;

  if(rectangle.x + rectangle.width > canvas.width ||
    rectangle.x < 0) {
      speedX *= -1;
      const random = Math.round(Math.random() * (colors.length - 0 + 1));
      rectangle.color = colors[random];
    }

  if(rectangle.y + rectangle.height > canvas.height ||
    rectangle.y < 0) {
      speedY *= -1;
      const random = Math.round(Math.random() * (colors.length - 0 + 1));
      rectangle.color = colors[random];
    }

    rectangle.draw(ctx);
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);