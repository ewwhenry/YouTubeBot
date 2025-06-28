import crypto from "node:crypto";
import fs from "node:fs";

import Bot from "../classes/Bot.js";

export function shouldIUpdateCommands(client: Bot) {
  var previous_hash = "";
  if (fs.existsSync("commands.hash")) {
    previous_hash = fs.readFileSync("commands.hash", "utf-8");
  }

  const actual_hash = crypto
    .createHash("sha256")
    .update(JSON.stringify(client.commands.values))
    .digest("hex");

  if (previous_hash !== actual_hash) {
    fs.writeFileSync("commands.hash", actual_hash);

    return true;
  } else return false;
}
