import { config } from "seyfert";

process.loadEnvFile(".env");

export default config.bot({
  token: process.env.BOT_TOKEN ?? "",
  locations: {
    base: "src",
    commands: "commands",
    events: "events",
  },
  intents: ["Guilds", "GuildMembers", "GuildInvites", "GuildVoiceStates"],
});
