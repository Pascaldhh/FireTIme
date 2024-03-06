import { Canvas } from "./utils/Canvas.js";
import { calculateSize } from "./utils/Sizer.js";

export default class Rectangle {
  static rectangleCollection: Rectangle[] = [];

  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public color: string;

  constructor(x: number, y: number, width: number, height: number, color: string = "black") {
    this.x = x;
    this.y = y;
    
    this.width = calculateSize(width);
    this.height = calculateSize(height);
    this.resize();

    this.color = color;
    Rectangle.rectangleCollection.push(this);
  }

  resize(): void {
    const size = Canvas.getSize();
    const multiplier = (size.width / Canvas.previousSize.width);
    this.x *= multiplier;
    this.y *= multiplier;
    this.width *= multiplier;
    this.height *= multiplier;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const oldStyle = ctx.fillStyle;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = oldStyle;
  }
}