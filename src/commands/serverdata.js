import Discord from 'discord.js';
import fetch from 'node-fetch';

export default async (config, client, message, args) => {
  try {
    if (!(config.mcserver && config.mcserver.ip)) {
      const response = await message.channel.send('No Minecraft server data provided in config');
      await response.delete({ timeout: 30000 });
      return;
    }

    const {
      motd: {
        clean,
      } = {},
      ip,
      port,
      software,
      version,
      online,
      players: {
        online: onlinePlayers,
        max: maxPlayers,
      } = {},
    } = await fetch(`https://api.mcsrvstat.us/2/${config.mcserver.ip}`)
      .then(res => res.json());

    const embed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(`Minecraft server ${config.mcserver.ip}`)
      .addField('IP', ip)
      .addField('Is Online', online)
      .setFooter(`Created by Derthon#3605${config.footerMessage ? ` : ${config.footerMessage}` : ''}`);

    if (online) {
      embed
        .setDescription(`Server is running ${software} version ${version}`)
        .addField('MOTD', clean)
        .addField('Players', `${onlinePlayers}/${maxPlayers}`);
    }

    await message.channel.send(embed);
  } catch (e) {
    const response = await message.channel.send('An error occurred!');
    await response.delete({ timeout: 30000 });
  }
}
