import Discord from 'discord.js';
import BotState from '../utils/BotState';

export default async (config, client, message) => {
  const helpEmbed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`${client.user.username} commands`)
    .setDescription(`**Prefix:** ${config.prefix}`)
    .addField(`\`ping\``, `Check your bot's ping`)
    .addField(`\`rps\``, `Play rock paper scissors`)
    .addField(`\`serverdata\``, 'Displays the minecraft servers basic data')
    .addField(`\`mcuuid\``, 'Displays minecraft user uuid Usage: mcuuid <Username>')
    .addField(`\`joke\``, 'Displays a random joke')
    .setFooter(`Created by Derthon#9538${config.footerMessage ? ` : ${config.footerMessage}` : ''}`);

  await message.channel.send(helpEmbed);

  const staffEmbed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`${client.user.username} commands`)
    .setDescription(`Staff Commands`)
    .setFooter(`Created by Derthon#9538${config.footerMessage ? ` : ${config.footerMessage}` : ''}`);

  if (
    message.member.hasPermission('KICK_MEMBERS') ||
    message.member.hasPermission('BAN_MEMBERS') ||
    message.member.hasPermission('MANAGE_ROLES') ||
    message.member.hasPermission('MANAGE_MESSAGES') ||
    message.member.hasPermission('MUTE_MEMBERS')
  ) {
    if (message.member.hasPermission('KICK_MEMBERS')) {
      staffEmbed.addField(`\`kick\``, `Usage: **${config.prefix}kick [@User]**\n**${config.prefix}kick [@User][Reason]**`);
    }
    
    if (message.member.hasPermission('BAN_MEMBERS')) {
      staffEmbed.addField(`\`ban\``, `Usage: **${config.prefix}ban [@User]**\n**${config.prefix}ban [@User][Reason]**`);
    }
    
    if (message.member.hasPermission('MANAGE_ROLES')) {
      staffEmbed
        .addField(`\`add\``, `Adds a role to a user \nUsage: **${config.prefix}add [@User] [Role]**`)
        .addField(`\`remove\``, `Removes a role from a user \nUsage: **${config.prefix}remove [@User] [Role]**`);
      staffEmbed
        .addField(`\`enable\``, `Enables the bots commands ${config.prefix}enable`);
      staffEmbed
        .addField(`\`disable\``, `Disables the bots commands ${config.prefix}disable`);
    }
    
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
      staffEmbed
        .addField(`\`purge\``, `Clears a number of messages between 2 or 100 \nUsage: **${config.prefix}purge [number]**`);
    }

    if (message.member.hasPermission('MUTE_MEMBERS')) {
      staffEmbed
        .addField(`\`mute\``, `Allows you to mute members ${config.prefix}mute`);
      staffEmbed
        .addField(`\`unmute\``, `Allows you to unmute members ${config.prefix}unmute`);
      staffEmbed
        .addField(`\`tempmute\``, `Allows you to temporarily mute members ${config.prefix}mute <member> [duration] (reason)`);
      staffEmbed
        .addField(`\`warn\``, `Allows you to warn members ${config.prefix}warn <member> <reason>`);
      staffEmbed
        .addField(`\`unwarn\``, `Allows you to unwarn members ${config.prefix}unwarn <member>`);
      staffEmbed
        .addField(`\`warnlist\``, `Lists all warned members and reasons ${config.prefix}warnlist <optional member>`);
    }

    await message.channel.send(staffEmbed);

    const ownerEmbed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(`${client.user.username} commands`)
      .setDescription(`Owner Commands`)
      .setFooter(`Created by Derthon#9538${config.footerMessage ? ` : ${config.footerMessage}` : ''}`);

    if (message.author.id === config.ownerID || BotState.getAllowDevelopers()) {
      if (message.author.id === config.ownerID) {
        ownerEmbed
          .addField('\`dev\`', 'Allows developers to use any command')
          .addField(`\`say\``, `Have the bot say something`)
          .addField(`\`setavatar\``, `Changes the bots avatar`)
          .addField(`\`setname\``, `Changes the bots display name`)
          .addField(`\`setstatus\``, `Changes the bots status`)
          .addField(`\`setgame\``, `Changes the bots game display`)
          .addField(`\`shutdown\``, `Shuts down the bot (Manual restart is required)`);
      } else if (BotState.getAllowDevelopers() && message.member.roles.cache.find(r => r.name === config.roles.dev)) {
        ownerEmbed
          .addField(`\`say\``, `Have the bot say something`)
          .addField(`\`setavatar\``, `Changes the bots avatar`)
          .addField(`\`setname\``, `Changes the bots display name`)
          .addField(`\`setstatus\``, `Changes the bots status`)
          .addField(`\`setgame\``, `Changes the bots game display`)
          .addField(`\`shutdown\``, `Shuts down the bot (Manual restart is required)`);
      }
      await message.channel.send(ownerEmbed);
    }
  }
}
