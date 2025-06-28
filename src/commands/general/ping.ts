import { Declare, Command, CommandContext } from "seyfert";
import { MessageFlags } from "seyfert/lib/types";

@Declare({
  name: "ping",
  description: "El bot responde con 'Pong'",
})
export default class PingCommand extends Command {
  run(ctx: CommandContext) {
    ctx.editOrReply({
      content: "Pong",
      flags: MessageFlags.Ephemeral,
    });
  }
}
