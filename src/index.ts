import bot from "./bot.js";

bot.start().then(() => {
  bot.uploadCommands();
});
