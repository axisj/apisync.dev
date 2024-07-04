export class ApiError extends Error {
  public code: number;
  public data?: any;
  public meta?: any;

  public constructor(code: number, message?: string, data?: any, meta?: any) {
    super(message);
    this.code = code;
    this.data = data;
    this.meta = meta;
  }
}
