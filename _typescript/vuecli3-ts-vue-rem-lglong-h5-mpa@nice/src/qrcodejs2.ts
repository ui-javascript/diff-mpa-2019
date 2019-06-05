declare module "qrcodejs2" {
  interface Options {
    width: number;
    height: number;
    text: string;
    colorDark?: string;
    colorLight?: string;
  }
  export default class {
    constructor(id: string, options: Options);
  }
}
