const openai = require("../config/openaiConfig")

const generateNewsSentiment = async (news) => {
  try {
    const sentiment = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `is this news positive, negative or neutral, only answer positive, negative or neutral no lengthy explanation please: ${news}`,
        },
      ],
      max_tokens: 100,
    })
    console.log({ news })

    const sentimentImage = await openai.createImage({
      prompt: news,
      n: 1,
      size: "512x512",
    })

    console.log("sentiment", sentiment?.data?.choices[0]?.message)
    console.log("sentimentImage", sentimentImage?.data?.data[0]?.url)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  generateNewsSentiment,
}
