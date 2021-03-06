import Discord from 'discord.js';
import BotState from '../utils/BotState';
import { query } from '../utils/connectDB';

const INSERT_WARN_QUERY = (memberID, reason) => `INSERT INTO warns (memberID, reason) VALUES ('${memberID}', '${reason}')`;

export default async (config, client, message, args) => {
  let response = null;
  if (!message.member.hasPermission('MUTE_MEMBERS')) {
    response = await message.channel.send("Insufficient permissions (Requires permission `Mute Members`)");
    await response.delete({ timeout: 30000 });
    return;
  }

  const [_, ...reasonRaw] = args;
  const reason = reasonRaw.join(' ').trim();
  const member = message.mentions.members.first();

  if (!member) {
    response = await message.channel.send("You have not mentioned a user");
    await response.delete({ timeout: 30000 });
    return;
  }

  if (!reason) {
    response = await message.channel.send(`Warn Usage: ${config.prefix}warn <Member> <Reason>`);
    await response.delete({ timeout: 30000 });
    return;
  }

  query(INSERT_WARN_QUERY(member.id, reason));

  const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`Warned ${member.user.username}`)
    .setDescription(`Reason: ${reason}`)
    .setFooter(`Created by Derthon#3605${config.footerMessage ? ` : ${config.footerMessage}` : ''}`);

  const modChannel = await message.guild.channels.cache.find(channel => channel.id === config.moderation_channel);
  await modChannel.send(embed);
  await message.channel.send(embed);
}
