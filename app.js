const readline = require("readline")
const { generateNewsSentiment } = require("./controllers/openaiController")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("Tell me the News to find sentiment determination : \n", (news) =>
  generateNewsSentiment(news)
)
