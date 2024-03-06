import Player from "./Player.js";

export default class PlayerController {
  private player: Player;

  bind(player: Player): void {
    this.player = player;
    this.events();
  }

  public movement(): void {
    
  }

  private keyDown(event: KeyboardEvent): void {

  }

  private keyUp(event: KeyboardEvent): void {
    
  }

  private events(): void {
    addEventListener("keydown", this.keyDown.bind(this));
    addEventListener("keyup", this.keyUp.bind(this));
  }
}