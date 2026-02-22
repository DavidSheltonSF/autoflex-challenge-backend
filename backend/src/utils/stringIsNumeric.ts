export function stringIsNumeric(str: string): boolean {
  return Number(str).toString() !== 'NaN';
}
