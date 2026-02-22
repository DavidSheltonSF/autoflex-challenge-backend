export class InvalidCodeError extends Error {
  constructor(code: string) {
    super(`Code '${code}' is invalid. Code should be string of 8 characters`);
    this.name = InvalidCodeError.name;
  }
}
