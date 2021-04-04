import Commando from 'discord.js-commando';
import getRoles from '../../utils/getRoles';
import scheduler from '../../utils/scheduler';

export default class UnmuteCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'unmute',
      group: 'moderation',
      memberName: 'unmute',
      description: 'Unmutes a member',
      examples: ['unmute @member'],
      clientPermissions: ['MUTE_MEMBERS'],
      userPermissions: ['MUTE_MEMBERS'],
      argsType: 'multiple',
      args: [
        {
          key: 'user',
          prompt: 'Provide user to mute',
          type: 'user',
        },
      ],
    });
  }

  async run(message, { user }) {
    const member = message.guild.member(user);
    const targetRole = message.guild.roles.cache.find(r => r.name === 'Muted');

    if (!targetRole) {
      await message.reply('The role `Muted` doesn\'t exist on this server');
      return;
    }

    if (!getRoles(member).get(targetRole.id)) {
      await message.reply(`This user does not have the ${targetRole} role`);
      return;
    }

    await member.roles.remove(targetRole.id);
    await message.reply(`${targetRole} removed from ${member}`);

    try {
      await member.voice.setMute(false);
    } catch (e) {
      // Do Nothing
    }
  }
}
