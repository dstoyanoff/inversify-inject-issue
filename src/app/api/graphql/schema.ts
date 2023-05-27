import { buildSchema } from "type-graphql";
import testResolver from "@/resolvers/test.resolver";

export const buildGraphqlSchema = () => {
  return buildSchema({
    resolvers: [testResolver],
  });
};
