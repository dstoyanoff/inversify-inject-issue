import "reflect-metadata";
import { Container } from "inversify";
import { ITestService, TestService } from "@/services/test.svc";

export const container = new Container();

container.bind<ITestService>("test.service").to(TestService);

