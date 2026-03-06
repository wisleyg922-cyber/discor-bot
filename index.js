const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("Bot ligado!");
});

client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.reply("Pong!");
  }
});

client.login("MTQ3OTU0NjY5ODkwMzg1MTE0Mw.GQnqer.miQCBZdTYi-EpA9SAvuyD_GGikz0d88BhLXkTQ");
