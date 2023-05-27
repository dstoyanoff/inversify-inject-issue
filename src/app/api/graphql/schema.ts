import { buildSchema } from "type-graphql";
import testResolver from "@/resolvers/test.resolver";
import { container } from "@/di";

export const buildGraphqlSchema = () => {
  return buildSchema({
    resolvers: [testResolver],
    container,
  });
};
