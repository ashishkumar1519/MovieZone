import OpenAI from 'openai';
const GptApi = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "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",
  dangerouslyAllowBrowser: true 
});
export default GptApi;