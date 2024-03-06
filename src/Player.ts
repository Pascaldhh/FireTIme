import PlayerController, { PlayerMovementX, PlayerMovementY } from "./PlayerController.js";
import Rectangle from "./Rectangle.js";

export default class Player extends Rectangle {
  public controller: PlayerController | null;

  public speed = 10;
  public speedAccel = 1;

  public velocityX: number;
  public velocityY: number;

  public movementX: PlayerMovementX;
  public movementY: PlayerMovementY;

  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height);
    this.velocityX = 0;
    this.velocityY = 0;
    this.movementX = PlayerMovementX.Idle;
    this.movementY = PlayerMovementY.Idle;
  }

  logic(): void {
    if(this.controller) this.controller.movement();

    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  attach(controller: PlayerController): void {
    this.controller = controller;
    controller.bind(this);
  }
}