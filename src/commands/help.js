import Discord from 'discord.js';

export default (config, client, message) => {
  const helpEmbed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`${client.user.username} commands`)
    .setDescription(`**Prefix:** ${config.prefix}`)
    .addField(`\`ping\``, `Check your bot's ping`)
    .addField(`\`rps\``, `Play rock paper scissors`)
    .addField(`\`serverdata\``, 'Displays the minecraft servers basic data')
    .addField(`\`mcuuid\``, 'Displays minecraft user uuid Usage: mcuuid <Username>')
    .addField(`\`joke\``, 'Displays a random joke')
    .setFooter('Created by Derthon#9538 : Owned by Ultra2021#0001');

  if (
    message.member.hasPermission('KICK_MEMBERS') ||
    message.member.hasPermission('BAN_MEMBERS') ||
    message.member.hasPermission('MANAGE_ROLES') ||
    message.member.hasPermission('MANAGE_MESSAGES') ||
    message.member.hasPermission('MUTE_MEMBERS')
  ) {
    helpEmbed
      .addField('\b', 'Admin Commands');
    if (message.member.hasPermission('KICK_MEMBERS')) {
      helpEmbed.addField(`\`kick\``, `Usage: **${config.prefix}kick [@User]**\n**${config.prefix}kick [@User][Reason]**`);
    }
    
    if (message.member.hasPermission('BAN_MEMBERS')) {
      helpEmbed.addField(`\`ban\``, `Usage: **${config.prefix}ban [@User]**\n**${config.prefix}ban [@User][Reason]**`);
    }
    
    if (message.member.hasPermission('MANAGE_ROLES')) {
      helpEmbed
        .addField(`\`add\``, `Adds a role to a user \nUsage: **${config.prefix}add [@User] [Role]**`)
        .addField(`\`remove\``, `Removes a role from a user \nUsage: **${config.prefix}remove [@User] [Role]**`);
      helpEmbed
        .addField(`\`enable\``, `Enables the bots commands ${config.prefix}enable`);
      helpEmbed
        .addField(`\`disable\``, `Disables the bots commands ${config.prefix}disable`);
    }
    
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
      helpEmbed
        .addField(`\`purge\``, `Clears a number of messages between 2 or 100 \nUsage: **${config.prefix}purge [number]**`);
    }

    if (message.member.hasPermission('MUTE_MEMBERS')) {
      helpEmbed
        .addField(`\`mute\``, `Allows you to mute members ${config.prefix}mute`);
      helpEmbed
        .addField(`\`unmute\``, `Allows you to unmute members ${config.prefix}unmute`);
      helpEmbed
        .addField(`\`tempmute\``, `Allows you to temporarily mute members ${config.prefix}mute <member> [duration] (reason)`);
      helpEmbed
        .addField(`\`warn\``, `Allows you to warn members ${config.prefix}warn <member> <reason>`);
      helpEmbed
        .addField(`\`unwarn\``, `Allows you to unwarn members ${config.prefix}unwarn <member>`);
      helpEmbed
        .addField(`\`warnlist\``, `Lists all warned members and reasons ${config.prefix}warnlist <optional member>`);
    }

    if (message.author.id === config.ownerID) {
      helpEmbed
        .addField('\b', 'Owner Commands')
        .addField(`\`say\``, `Have the bot say something`)
        .addField(`\`setavatar\``, `Changes the bots avatar`)
        .addField(`\`setname\``, `Changes the bots display name`)
        .addField(`\`setstatus\``, `Changes the bots status`)
        .addField(`\`setgame\``, `Changes the bots game display`)
        .addField(`\`shutdown\``, `Shuts down the bot (Manual restart is required)`);
    }
  }

  message.channel.send(helpEmbed);
}
