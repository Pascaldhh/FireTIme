export default class Rectangle {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public color: string;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = "black";
  }

  draw(ctx: CanvasRenderingContext2D) {
    const oldStyle = ctx.fillStyle;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = oldStyle;
  }
}