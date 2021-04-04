import Commando from 'discord.js-commando';

export default class KickCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'kick',
      group: 'moderation',
      memberName: 'kick',
      description: 'Kicks a member',
      examples: ['kick @member'],
      clientPermissions: ['KICK_MEMBERS'],
      userPermissions: ['KICK_MEMBERS'],
      argsType: 'multiple',
      args: [
        {
          key: 'user',
          prompt: 'Provide user to kick',
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
    if (!member.kickable) {
      await message.reply(`${member} is not kickable!`);
      return;
    }
    if (!reason) {
      await member.kick();
      await message.reply(`${member} was kicked, no reason was provided`);
      return;
    }

    await member.kick(reason);
    await message.reply(`${member} was kicked for ${reason}`);
  }
}
