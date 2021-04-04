"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

var _discord = _interopRequireDefault(require("discord.js"));

var _discord2 = _interopRequireDefault(require("discord.js-commando"));

var _getConfig = _interopRequireDefault(require("./getConfig"));

var commands = _interopRequireWildcard(require("./commands"));

var _BotState = _interopRequireDefault(require("./utils/BotState"));

var initConfig = (0, _getConfig.default)();
var client = new _discord2.default.CommandoClient({
  owner: '334444514045591555',
  commandPrefix: initConfig.prefix
});
client.on('ready', function (_) {
  console.log("Bot Started");
  client.registry.registerGroups([['helper', 'helper commands'], ['moderation', 'moderation commands'] // ['externals', 'external commands'],
  // ['admin', 'admin commands'],
  ]).registerDefaults().registerCommandsIn(_path.default.join(__dirname, 'cmds'));
}); // client.on('message', async message => {
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

process.on('SIGINT', function () {
  client.destroy();
  process.exit();
});
client.login((0, _getConfig.default)().token);