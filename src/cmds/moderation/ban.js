import Commando from 'discord.js-commando';

export default class BanCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'ban',
      group: 'moderation',
      memberName: 'ban',
      description: 'Bans a member',
      examples: ['ban @member'],
      clientPermissions: ['BAN_MEMBERS'],
      userPermissions: ['BAN_MEMBERS'],
      argsType: 'multiple',
      args: [
        {
          key: 'user',
          prompt: 'Provide user to ban',
          type: 'user',
        },
        {
          key: 'reason',
          prompt: 'Provide a reason',
          type: 'string',
          default: '',
        }
      ],
    });
  }

  async run(message, { user, reason }) {
    const member = message.guild.member(user);
    if (!member.bannable) {
      await message.reply(`${member} is unbannable!`);
      return;
    }
    if (!reason) {
      await member.ban();
      await message.reply(`${member} was banned, no reason was provided`);
      return;
    }

    await member.ban(reason);
    await message.reply(`${member} was banned for ${reason}`);
  }
}
