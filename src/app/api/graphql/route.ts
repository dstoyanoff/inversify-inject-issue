import "@/di";

import { createYoga } from "graphql-yoga";
import { buildGraphqlSchema } from "./schema";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  return createYoga({
    schema: await buildGraphqlSchema(),
    graphqlEndpoint: "/api/graphql",
    fetchAPI: {
      Response: Response,
    },
  })(request);
};

export { POST as GET };
