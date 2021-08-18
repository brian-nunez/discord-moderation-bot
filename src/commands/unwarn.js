import Discord from 'discord.js';
import BotState from '../utils/BotState';
import { query } from '../utils/connectDB';

const DELETE_WARNS_QUERY = (memberID) => `DELETE FROM warns WHERE memberID='${memberID}'`;

export default async (config, client, message, args) => {
  let response = null;
  if (!message.member.hasPermission('MUTE_MEMBERS')) {
    response = await message.channel.send("Insufficient permissions (Requires permission `Mute Members`)");
    await response.delete({ timeout: 30000 });
    return;
  }

  const member = message.mentions.members.first();

  if (!member) {
    response = await message.channel.send("Must provide a member to unwarn");
    await response.delete({ timeout: 30000 });
    return;
  }

  const amountRemoved = await query(DELETE_WARNS_QUERY(member.id));

  if (amountRemoved.affectedRows === 0) {
    const embed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(`${member.user.username} was not warned`)
      .setFooter(`Created by Derthon#3605${config.footerMessage ? ` : ${config.footerMessage}` : ''}`);
    
    message.channel.send(embed);
    return;
  }

  const extraChar = amountRemoved.affectedRows > 1 ? 's' : '';

  const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`Removed ${amountRemoved.affectedRows} Warning Message${extraChar} for ${member.user.username}`)
    .setFooter(`Created by Derthon#3605${config.footerMessage ? ` : ${config.footerMessage}` : ''}`);
  
  const modChannel = await message.guild.channels.cache.find(channel => channel.id === config.moderation_channel);
  await modChannel.send(embed);
  await message.channel.send(embed);
}
