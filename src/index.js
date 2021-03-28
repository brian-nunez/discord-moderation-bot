import Discord from 'discord.js';
import getConfig from './getConfig';
import * as commands from './commands';

const client = new Discord.Client();

client.on('ready', _ => {
  console.log("Bot Started");
});

client.on('message', message => {
  const config = getConfig({ fresh: true });
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const commandToRun = args.shift().toLowerCase()

  const commandParams = [config, client, message, args];

  const unknownCommand = () => message.channel.send(`Unknown command... Try using ${config.prefix}help`);

  const { [commandToRun]: command = unknownCommand } = commands;

  command(...commandParams);
});

client.login(getConfig().token);
