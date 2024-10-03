export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limite?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {} // DI + Dependeny Injection

  execute({ base, limite = 10 }: CreateTableOptions) {
    let outputMessage = "";
    for (let i = 1; i <= limite; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }

    return outputMessage;
  }
}
