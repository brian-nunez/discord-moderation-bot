import path from 'path';
import Discord from 'discord.js';
import Commando from 'discord.js-commando';
import getConfig from './getConfig';
import * as commands from './commands';
import BotState from './utils/BotState';

const initConfig = getConfig();

const client = new Commando.CommandoClient({
  owner: '334444514045591555',
  commandPrefix: initConfig.prefix,
});

client.on('ready', _ => {
  console.log("Bot Started");

  client
    .registry
    .registerGroups([
      ['helper', 'helper commands'],
      ['moderation', 'moderation commands'],
      // ['externals', 'external commands'],
      // ['admin', 'admin commands'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'));
});

// client.on('message', async message => {
//   const config = getConfig();
//   if (message.author.bot) return;
//   if (message.content.indexOf(config.prefix) !== 0) return;
//   const roleMuted = message.guild.roles.cache.find(role => role.name === config.roles.muted);

//   if (message.member.roles.cache.has(roleMuted.id)) {
//     await message.delete();
//     return;
//   }

//   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
//   const commandToRun = args.shift().toLowerCase();

//   if (BotState.isDisabled() && commandToRun !== 'enable') {
//     await message.channel.send('Bot commands are disabled');
//     return;
//   }

//   const commandParams = [config, client, message, args];

//   const unknownCommand = () => message.channel.send(`Unknown command... Try using ${config.prefix}help`);

//   const { [commandToRun]: command = unknownCommand } = commands;

//   command(...commandParams);
// });

process.on('SIGINT', function() {
  client.destroy();
  process.exit();
});

client.login(getConfig().token);
