const { OpenAI } = require('openai');
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Certifique-se que o .env tem essa variável corretamente
});

module.exports = openai;
