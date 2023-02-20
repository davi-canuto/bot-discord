const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { TOKEN, APPLICATION_ID, GUILD_ID } = process.env;

// import commands
const fs = require("node:fs");
const path = require("node:path");

client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(`${filePath} is with data or execute undefined ${c.user.tag}`);
  }
}

console.log(client.commands);

// Bot Login
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(TOKEN);

// Listener interations with bot
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = interaction.client.commands.get(interaction.commandName);
  if (!command) {
    console.error("Command not found");
  }
  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    await interaction.reply("Have error an execute this command. ");
  }
  console.log(interaction);
});
