import Discord from 'discord.js';

export default (config, client, message) => {
  const helpEmbed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`${client.user.username} commands`)
    .setDescription(`**Prefix:** ${config.prefix}`)
    .addField(`\`ping\``, `Check your bot's ping`)
    .addField(`\`rps\``, `Play rock paper scissors`)
    .setFooter('Created by Derthon#9538');

  if (
    message.member.hasPermission('KICK_MEMBERS') ||
    message.member.hasPermission('BAN_MEMBERS') ||
    message.member.hasPermission('MANAGE_ROLES') ||
    message.member.hasPermission('MANAGE_MESSAGES')
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
    }
    
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
      helpEmbed
        .addField(`\`purge\``, `Clears a number of messages between 2 or 100 \nUsage: **${config.prefix}purge [number]**`);
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
