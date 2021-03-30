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

  if (!member) {
    response = await message.channel.send("Must provide a member to unwarn");
    await response.delete({ timeout: 30000 });
    return;
  }

  const amountRemoved = BotState.remove('warn', member.id);

  if (amountRemoved === 0) {
    const embed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(`${member.user.username} was not warned`)
      .setFooter('Created by Derthon#9538 : Owned by Ultra2021#0001');
    
    message.channel.send(embed);
    return;
  }

  const extraChar = amountRemoved > 1 ? 's' : '';

  const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`Removed ${amountRemoved} Warning Message${extraChar} for ${member.user.username}`)
    .setFooter('Created by Derthon#9538 : Owned by Ultra2021#0001');
  
  const modChannel = await message.guild.channels.cache.find(channel => channel.id === config.moderation_channel);
  await modChannel.send(embed);
  await message.channel.send(embed);
}