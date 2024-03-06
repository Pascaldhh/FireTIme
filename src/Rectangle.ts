import { Canvas } from "./utils/Canvas.js";
import { calculateGrowth } from "./utils/Sizer.js";

export default class Rectangle {
  static rectangleCollection: Rectangle[] = [];

  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public color: string;

  constructor(x: number, y: number, width: number, height: number, color: string = "black") {
    this.x = calculateGrowth(x);
    this.y = calculateGrowth(y);
    
    this.width = calculateGrowth(width);
    this.height = calculateGrowth(height);
    this.resize();

    this.color = color;
    Rectangle.rectangleCollection.push(this);
  }

  /**
   * Resizes the rectangle based on the width of canvas
   */
  resize(): void {
    const size = Canvas.getSize();
    const multiplier = (size.width / Canvas.previousSize.width);
    this.x *= multiplier;
    this.y *= multiplier;
    this.width *= multiplier;
    this.height *= multiplier;
  }

  /**
   * Draws the rectangle on canvas
   * @param ctx The canvas rendering context to draw on
   */
  draw(ctx: CanvasRenderingContext2D): void {
    const oldStyle = ctx.fillStyle;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = oldStyle;
  }
}