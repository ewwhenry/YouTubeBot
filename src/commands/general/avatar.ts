import {
  Command,
  Declare,
  CommandContext,
  Options,
  createUserOption,
  Embed,
} from "seyfert";

const options = {
  member: createUserOption({
    description: "Usuario del cual deseas obtener el avatar.",
    required: false,
  }),
};

@Declare({
  name: "avatar",
  description: "Obten tu avatar o el de un usuario mencionado.",
})
@Options(options)
export default class AvatarCommand extends Command {
  async run(ctx: CommandContext<typeof options>) {
    const usuario = ctx.options.member || ctx.author;

    let avatarURL = usuario.avatarURL({ size: 1024 });

    ctx.editOrReply({
      embeds: [
        new Embed()
          .setDescription(`## Avatar de ${usuario.toString()}`)
          .setColor("Blurple")
          .setImage(avatarURL),
      ],
    });
  }
}
