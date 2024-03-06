import Player from "./Player.js";

export enum PlayerMovementX { Idle, Left, Right };
export enum PlayerMovementY { Idle, Up, Down };

export default class PlayerController {
  private player: Player;

  bind(player: Player): void {
    this.player = player;
    this.events();
  }

  public movement(): void {
    switch(this.player.movementX) {
      case PlayerMovementX.Idle:
        if(this.player.velocityX > 0) 
          this.player.velocityX -= this.player.speedAccel;
        if(this.player.velocityX < 0)
          this.player.velocityX += this.player.speedAccel;
        break;
      case PlayerMovementX.Left:
        if((this.player.speed * -1) < this.player.velocityX)
          this.player.velocityX -= this.player.speedAccel;
        break;
      case PlayerMovementX.Right:
        if(this.player.speed > this.player.velocityX)
          this.player.velocityX += this.player.speedAccel;
        break;
    }

    switch(this.player.movementY) {
      case PlayerMovementY.Idle:
        if(this.player.velocityY > 0) 
          this.player.velocityY -= this.player.speedAccel;
        if(this.player.velocityY < 0)
          this.player.velocityY += this.player.speedAccel;
        break;
      case PlayerMovementY.Up:
        if((this.player.speed * -1) < this.player.velocityY)
          this.player.velocityY -= this.player.speedAccel;
        break;
      case PlayerMovementY.Down:
        if(this.player.speed > this.player.velocityY)
          this.player.velocityY += this.player.speedAccel;
        break;
    }

  }

  private keyDown(event: KeyboardEvent): void {
    switch(event.code) {
      case "KeyW":
        this.player.movementY = PlayerMovementY.Up;
        break;
      case "KeyS":
        this.player.movementY = PlayerMovementY.Down;
        break;
      case "KeyA":
        this.player.movementX = PlayerMovementX.Left;
        break;
      case "KeyD":
        this.player.movementX = PlayerMovementX.Right;
        break;
    }
    console.log(`KeyDown[${event.code}]`)
  }

  private keyUp(event: KeyboardEvent): void {
    if(event.code === "KeyW" || event.code === "KeyS") 
      this.player.movementY = PlayerMovementY.Idle;

    if(event.code === "KeyA" || event.code === "KeyD") 
      this.player.movementX = PlayerMovementX.Idle;
    
    console.log(`KeyUp[${event.code}]`)
  }

  private events(): void {
    addEventListener("keydown", this.keyDown.bind(this));
    addEventListener("keyup", this.keyUp.bind(this));
  }
}