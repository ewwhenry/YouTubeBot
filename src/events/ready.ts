import { createEvent } from "seyfert";

export default createEvent({
  data: {
    name: "ready",
    once: true,
  },
  run(user, bot) {
    bot.logger.info(`El bot se encuentra en linea como ${user.username}`);
  },
});
