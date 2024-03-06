import { Canvas } from "./Canvas.js";

export const baseGrowth: number = 1000;

export const calculateGrowth = (num: number, base: number = baseGrowth) => {
  const canvasSize = Canvas.getSize();
  return (canvasSize.width / base) * num;
}