import { injectable } from "inversify";

export interface ITestService {
  echo: () => string;
}

@injectable()
export class TestService implements ITestService {
  echo(): string {
    return "echo back";
  }
}
