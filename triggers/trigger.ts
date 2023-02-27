import { Trigger } from "deno-slack-api/types.ts";
import DadJokeWorkflow from "../workflows/workflow.ts";

const trigger: Trigger<typeof DadJokeWorkflow.definition> = {
  type: "scheduled",
  name: "Dad Jokes",
  workflow: "#/workflows/dad_joke_workflow",
  inputs: {
    channel: { value: "CUCK3D72P" },
  },
  schedule: {
    start_time: "2023-02-28T14:25:00Z",
    frequency: {
      type: "daily",
    },
  },
};

export default trigger;
