import { Size } from "../types/Size.js";

export enum CanvasId {
  Player,
  Map
}

export class Canvas {
  public id: number;
  public instance: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;

  constructor(id: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.id = id;
    this.instance = canvas;
    this.ctx = ctx;

    this.resize();
  }

  public resize(): void {
    const size = Canvas.getSize();
    this.instance.width = size.width;
    this.instance.height = size.height;
    Canvas.previousSize = size;
  }

  public static wrapperId = "canvas-wrapper";
  public static canvasCollection: Canvas[] = [];
  public static previousSize: Size = this.getSize();

  public static create(id: CanvasId): Canvas {
    const canvasInstance = document.createElement("canvas");
    const ctx = canvasInstance.getContext("2d") as CanvasRenderingContext2D;

    const canvas = new Canvas(id, canvasInstance, ctx);

    canvasInstance.classList.add("absolute");
    canvasInstance.classList.add("inset-0");

    document.getElementById(this.wrapperId)?.appendChild(canvasInstance);
    this.canvasCollection.push(canvas);
    return canvas;
  }

  public static get(id: CanvasId): Canvas | null {
    return this.canvasCollection.find(canvas => canvas.id === id) ?? null;
  }

  public static getSize(): Size {
    const wrap = document.getElementById(this.wrapperId);
    return wrap 
      ? {width: wrap.clientWidth, height: wrap.clientHeight}
      : {width: 0, height: 0};
  }
}

export const CanvasPlayer = Canvas.create(CanvasId.Player);
export const CanvasMap = Canvas.create(CanvasId.Map); 