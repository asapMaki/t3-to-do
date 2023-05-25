import { appRouter } from "@acme/api";
import { generateOpenApiDocument } from "trpc-openapi";
import { origin } from "../docs";

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "Example CRUD API",
  description: "OpenAPI compliant REST API built using tRPC with Next.js",
  version: "1.0.0",
  baseUrl: `${origin}/api`,
  // docsUrl: "https://github.com/jlalmes/trpc-openapi",
  tags: ["project", "task", "user", "auth"],
});
