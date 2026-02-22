export class InvalidFieldError extends Error {
  constructor(field: string, value: any) {
    super(`Value '${value}' is invalid for field '${field}`);
    this.name = InvalidFieldError.name;
  }
}
