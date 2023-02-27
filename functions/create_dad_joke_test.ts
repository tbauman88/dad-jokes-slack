import { SlackFunctionTester } from "deno-slack-sdk/mod.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import SampleFunction from "./create_dad_joke.ts";
import * as mf from "https://deno.land/x/mock_fetch@0.3.0/mod.ts";

const { createContext } = SlackFunctionTester("sample_function");

// Replaces globalThis.fetch with the mocked copy
mf.install();

mf.mock("https://icanhazdadjoke.com/", () => {
  return new Response(
    `{"id":"SvzIBAQS0Dd","joke":"What did the pirate say on his 80th birthday? Aye Matey!","status":200}
    `,
    {
      status: 200,
    },
  );
});

Deno.test("Sample function test", async () => {
  const inputs = { message: "Hello, World!", user: "U01234567" };
  const { outputs } = await SampleFunction(createContext({ inputs }));
  await assertEquals(
    outputs?.joke,
    ":wave: <@U01234567> submitted the following message: \n\n>Hello, World!",
  );
});
