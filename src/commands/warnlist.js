import { promisify } from 'util';
import Discord from 'discord.js';
import BotState from '../utils/BotState';
import { query } from '../utils/connectDB';

const SELECT_MEMBER_WARNS_QUERY = (memberID) => `SELECT * FROM warns WHERE memberID='${memberID}'`;
const SELECT_ALL_WARNS_QUERY = () => 'SELECT * FROM warns';

export default async (config, client, message, args) => {
  let response = null;
  if (!message.member.hasPermission('MUTE_MEMBERS')) {
    response = await message.channel.send("Insufficient permissions (Requires permission `Mute Members`)");
    await response.delete({ timeout: 30000 });
    return;
  }

  const member = message.mentions.members.first();

  if (member) {
    const warnedMember = message.guild.members.cache.find(mem => mem.id === member.id);

    const warnedMembers = await query(SELECT_MEMBER_WARNS_QUERY(member.id));

    if (warnedMembers.length === 0) {
      const embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`Member is clean :eyes:`)
        .setDescription(`This member has not been warned`)
        .setFooter(`Created by Derthon#3605${config.footerMessage ? ` : ${config.footerMessage}` : ''}`);
      await message.channel.send(embed);
      return
    }

    const embed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(`Warned Player ${warnedMember.user.username}`)
      .setDescription(`List of all warnings for member`)
      .setFooter(`Created by Derthon#3605${config.footerMessage ? ` : ${config.footerMessage}` : ''}`);

    warnedMembers.forEach((warn, idx) => {
      embed.addField(`Warn Number ${idx+1}.`, warn.reason);
    });

    await message.channel.send(embed);
    return;
  }

  const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription(`List of all warned members`)
    .setFooter(`Created by Derthon#3605${config.footerMessage ? ` : ${config.footerMessage}` : ''}`);

  const warnedMembers = await query(SELECT_ALL_WARNS_QUERY());
  
  embed.setTitle(`${client.user.username} Warns (${warnedMembers.length})`);
  for (let warn of warnedMembers) {
    try {
      const warnedMember = message.guild.members.cache.find(mem => mem.id === warn.memberID);
      embed.addField(`User: ${warnedMember.user.username}`, `Reason - ${warn.reason}`);
    } catch (e) {
      // Do Nothing
    }
  }

  await message.channel.send(embed);
}
