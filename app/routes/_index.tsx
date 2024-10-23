import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const response = await fetch("http://localhost:8000/");
  const data = await response.json();
  return json(data);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix + FastAPI + Keycloak</h1>
      <p>Message from API: {data.message}</p>
    </div>
  );
}