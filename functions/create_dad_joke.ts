import { SlackFunction } from "deno-slack-sdk/mod.ts";
import SampleFunctionDefinition from "./definition.ts";

export default SlackFunction(SampleFunctionDefinition, async () => {
  const headers = { "Accept": "application/json" };
  const api = "https://icanhazdadjoke.com/";
  const jsonResponse = await fetch(api, { method: "GET", headers });
  const data = await jsonResponse.json();
  return { outputs: { joke: data.joke ?? "No joke for you! :(" } };
});
