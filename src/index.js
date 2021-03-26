import Discord from 'discord.js';
import getConfig from './getConfig';
import help from './help';
import ping from './ping';
import kick from './kick';
import ban from './ban';
import add from './add';
import remove from './remove';
import say from './say';
import purge from './purge';
import rps from './rps';
import setavatar from './setavatar';
import setname from './setname';
import setstatus from './setstatus';
import setgame from './setgame';
import shutdown from './shutdown';

const client = new Discord.Client();

client.on('ready', _ => {
  console.log("Bot Started");
});

client.on('message', message => {
  const config = getConfig({ fresh: true });
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()

  const commandParams = [config, client, message, args];

  const commandMap = {
    help,
    ping,
    kick,
    ban,
    add,
    remove,
    say,
    purge,
    rps,
    setavatar,
    setname,
    setstatus,
    setgame,
    shutdown,
  };
  const unknownCommand = () => message.channel.send(`Unknown command... Try using ${config.prefix}help`);

  const { [command]: commandToRun = unknownCommand } = commandMap;

  commandToRun(...commandParams);
});

client.login(getConfig().token);
