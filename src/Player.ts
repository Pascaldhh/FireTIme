import PlayerController from "./PlayerController.js";
import Rectangle from "./Rectangle.js";

enum PlayerMovementX { Idle, Left, Right };
enum PlayerMovementY { Idle, Up, Down };

export default class Player extends Rectangle {
  public controller: PlayerController | null;

  public speed: number;
  public velocityX: number;
  public velocityY: number;

  public movementX: PlayerMovementX;
  public movementY: PlayerMovementY;

  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height);
  }

  logic(): void {
    if(this.controller) this.controller.movement();

    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  attach(controller: PlayerController): void {
    controller.bind(this);
  }
}