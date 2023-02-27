import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import SampleFunctionDefinition from "../functions/definition.ts";

/**
 * A workflow is a set of steps that are executed in order.
 * Each step in a workflow is a function.
 * https://api.slack.com/future/workflows
 *
 * This workflow uses interactivity. Learn more at:
 * https://api.slack.com/future/forms#add-interactivity
 */
const DadJokeWorkflow = DefineWorkflow({
  callback_id: "dad_joke_workflow",
  title: "Dad Joke workflow",
  input_parameters: {
    properties: {
      channel: { type: Schema.slack.types.channel_id },
    },
    required: [],
  },
});

const message = DadJokeWorkflow.addStep(SampleFunctionDefinition, {});

DadJokeWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: DadJokeWorkflow.inputs.channel,
  message: message.outputs.joke,
});

export default DadJokeWorkflow;
