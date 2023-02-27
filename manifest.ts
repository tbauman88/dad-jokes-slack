import { Manifest } from "deno-slack-sdk/mod.ts";
import DadJokeWorkflow from "./workflows/workflow.ts";
import DadJokeFunctionDefinition from "./functions/definition.ts";

export default Manifest({
  name: "Dad Jokes",
  description: "Cheer up your team with a dad joke!",
  icon: "assets/icon.jpg",
  functions: [DadJokeFunctionDefinition],
  workflows: [DadJokeWorkflow],
  outgoingDomains: ["icanhazdadjoke.com"],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "triggers:write",
  ],
});
