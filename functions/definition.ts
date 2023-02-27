import { DefineFunction, Schema } from "deno-slack-sdk/mod.ts";
/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in workflows.
 * https://api.slack.com/future/functions/custom
 */
const DadJokeFunctionDefinition = DefineFunction({
  callback_id: "create_joke_function",
  title: "Create Dad Joke function",
  source_file: "functions/create_dad_joke.ts",
  output_parameters: {
    properties: {
      joke: {
        type: Schema.types.string,
        description: "Dad joke to be posted",
      },
    },
    required: ["joke"],
  },
});

export default DadJokeFunctionDefinition;
