import { Mutation, Query, Resolver } from "type-graphql";
import { inject } from "inversify";
import type { ITestService } from "@/services/test.svc";
import { container } from "@/di";

@Resolver()
export default class TestResolver {
  @inject("test.service")
  private readonly _testService2!: ITestService;

  private readonly _testService3 = container.get<ITestService>("test.service");

  constructor(
    @inject("test.service") private readonly _testService: ITestService
  ){ }

  @Mutation(() => String)
  testMutation() {
    return "success"
  }

  @Query(() => String)
  constructorTest() {
    return this._testService.echo();
  }

  @Query(() => String)
  fieldTest() {
    return this._testService2.echo();
  }

  @Query(() => String)
  containerGetTest() {
    return this._testService3.echo();
  }
}
