const inputPrompt = require("../models/input-prompt");
const openai = require("../config/openai");

module.exports = {
  async sendText(req, res) {
    const inputModel = new inputPrompt(req.body);

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "user", content: inputModel.prompt }
        ],
      });

      return res.status(200).json({
        success: true,
        data: response.choices[0].message.content,
      });

    } catch (error) {
      console.error("Erro na OpenAI:", error);

      return res.status(400).json({
        success: false,
        error: error.response
          ? error.response.data
          : 'Houve um problema no servidor',
      });
    }
  }
};
