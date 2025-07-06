import {
  Declare,
  Options,
  Command,
  CommandContext,
  createUserOption,
  Embed,
} from "seyfert";

const opciones = {
  usuario: createUserOption({
    description: "El usuario del cual deseas obtener su avatar.",
    required: false,
  }),
};

@Declare({
  name: "avatar",
  description: "Obten tu avatar o el de otro usuario.",
})
@Options(opciones)
export default class AvatarCommand extends Command {
  async run(ctx: CommandContext<typeof opciones>) {
    const user = ctx.options.usuario || ctx.author; // OR

    let avatarURL = user.avatarURL({
      size: 1024,
    });

    let embed = new Embed()
      .setImage(avatarURL)
      .setDescription(`Avatar de ${user.toString()}`)
      .setColor("LightGrey");

    ctx.editOrReply({
      embeds: [embed],
    });
  }
}
