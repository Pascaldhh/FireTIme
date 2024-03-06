import Player from "./Player.js";
import PlayerController from "./PlayerController.js";
import Rectangle from "./Rectangle.js";
import { Canvas, CanvasPlayer } from "./utils/Canvas.js";

export default class Game {
  private updatesEachSecond = 60;
  private player: Player;

  /**
   * Gets called one time
   */
  start(): void {
    this.player = new Player(200, 200, 100, 100);
    this.player.attach(new PlayerController());

    this.events();
    setInterval(this.update.bind(this), 1000/this.updatesEachSecond);
    requestAnimationFrame(this.draw.bind(this));
  }

  /**
   * Runs every second x amount of times.
   * Specified in the variable updatesEachSecond.
   */
  update(): void {

  }

  /**
   * Runs at the frequence of the screens refresh-rate.
   */
  draw(): void {
    this.player.draw(CanvasPlayer.ctx);
    requestAnimationFrame(this.draw.bind(this));
  }

  /**
   * Gets triggered on resize canvas
   */
  resize(): void {
    Rectangle.rectangleCollection.forEach(rect => rect.resize());
    Canvas.canvasCollection.forEach(canvas => canvas.resize());
  }

  /**
   * Contains all global eventlisteners
   */
  events(): void {
    addEventListener("resize", this.resize.bind(this));
  }
}