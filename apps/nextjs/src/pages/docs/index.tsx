import type { NextPage } from "next";
import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });

const IS_SERVER = typeof window === "undefined";
const origin = IS_SERVER
  ? process.env.NEXT_PUBLIC_API_URL
  : window.location.origin;

const Api: NextPage = () => {
  // Serve Swagger UI with our OpenAPI schema
  return <SwaggerUI url={`${origin}/api/openapi.json`} />;
};

export default Api;
