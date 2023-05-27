import "reflect-metadata";
import { Container } from "inversify";
import { ITestService, TestService } from "@/services/test.svc";
import TestResolver from "@/resolvers/test.resolver";

export const container = new Container();

container.bind<ITestService>("test.service").to(TestService);

container.bind(TestResolver).toSelf()
