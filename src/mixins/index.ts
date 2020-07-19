export default function createRange(length: number): number[] {
  return Array.from({ length }, (v, k) => k);
}
