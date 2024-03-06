export enum CanvasId {
  Player,
  Map
}

export class Canvas {
  public static wrapperId = "canvas-wrapper";
  private static canvasCollection: {id: CanvasId, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D}[] = [];

  public static create(id: CanvasId) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    this.onResize(canvas);
    addEventListener("resize", () => this.onResize(canvas));

    canvas.classList.add("absolute");
    canvas.classList.add("inset-0");

    document.getElementById(this.wrapperId)?.appendChild(canvas);
    this.canvasCollection.push({id, canvas, ctx})
    return {id, canvas, ctx};
  }

  public static get(id: CanvasId) {
    return this.canvasCollection.find(canvas => canvas.id === id) ?? false;
  }

  public static onResize(canvas: HTMLCanvasElement) {
    const wrapper = document.getElementById(this.wrapperId) as HTMLDivElement;
    canvas.width = wrapper.clientWidth;
    canvas.height = wrapper.clientHeight;
  }
}

export const CanvasPlayer = Canvas.create(CanvasId.Player);
export const CanvasMap = Canvas.create(CanvasId.Map); 