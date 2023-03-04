export function height(num: number): number {
  return Math.ceil(Math.log(num + 1) / Math.log(2));
}
