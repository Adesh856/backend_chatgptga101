const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config()

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function createCompletionChatGTP({ message }) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 2048,
    temperature: 0,
  });
  return response;
}

module.exports = { createCompletionChatGTP };