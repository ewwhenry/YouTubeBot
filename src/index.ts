import bot from "./bot.js";
import { shouldIUpdateCommands } from "./utils/misc.js";

bot.start().then(() => {
  if (shouldIUpdateCommands(bot)) {
    bot.logger.info("Los comandos deben ser actualizados.");
    bot.uploadCommands();
  } else {
    bot.logger.info("No hay nada para actualizar.");
  }
});
