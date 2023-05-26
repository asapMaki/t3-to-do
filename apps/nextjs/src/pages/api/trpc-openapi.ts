import { appRouter } from "@acme/api";
import { generateOpenApiDocument } from "trpc-openapi";

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "Example CRUD API",
  description: "OpenAPI compliant REST API built using tRPC with Next.js",
  version: "1.0.0",
  baseUrl: "/api",
  tags: ["project", "task", "user"],
});
