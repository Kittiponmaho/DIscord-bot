const { Client, Intents } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const random_num = () => {
  return Math.floor(Math.random() * 10);
};

client.on("ready", () => {
  console.log("Your bot is ready");
});

client.on("messageCreate", msg => {
  let foods = [
    "Boiled chicken breast",
    "Boiled salmon",
    "Grilled Saba with teriyaki",
    "Grilled pork and kimchi curry",
    "Minced pork porridge",
    "Pork tenderloin steak",
    "Thong Smith",
    "Korean beef salad",
    "MK restaurant",
    "The Copper",
  ];
  if (msg.content == "I'm hungry") {
    msg.reply(foods[random_num()]);
  }
});

client.login(process.env.TOKEN);
