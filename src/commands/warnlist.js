import Discord from 'discord.js';
import BotState from '../utils/BotState';

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

    const warnedMembers = BotState.getLogs('warn').filter(warn => warn.memberID === member.id);

    if (warnedMembers.length === 0) {
      const embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`Member is clean :eyes:`)
        .setDescription(`This member has not been warned`)
        .setFooter('Created by Derthon#9538');
      await message.channel.send(embed);
      return
    }

    const embed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(`Warned Player ${warnedMember.user.username}`)
      .setDescription(`List of all warnings for member`)
      .setFooter('Created by Derthon#9538');

    warnedMembers.forEach((warn, idx) => {
      embed.addField(`Warn Number ${idx+1}.`, warn.reason);
    });

    await message.channel.send(embed);
    return;
  }

  const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription(`List of all warned members`)
    .setFooter('Created by Derthon#9538');

  const warnedMembers = BotState.getLogs('warn');
  
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