import Commando from 'discord.js-commando';
import getRoles from '../../utils/getRoles';
import scheduler from '../../utils/scheduler';

export default class MuteCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'mute',
      group: 'moderation',
      memberName: 'mute',
      description: 'Mutes a member',
      examples: ['mute @member', 'mute @member 1m'],
      clientPermissions: ['MUTE_MEMBERS'],
      userPermissions: ['MUTE_MEMBERS'],
      argsType: 'multiple',
      args: [
        {
          key: 'user',
          prompt: 'Provide user to mute',
          type: 'user',
        },
        {
          key: 'time',
          prompt: 'Amount of time to mute (i.e. 1m, 5m, 20m)',
          type: 'string',
          validate: time => {
            if (time === '') return true;
            return /^\d+m$/.test(time.trim());
          },
          default: '',
        }
      ],
    });
  }

  async run(message, { user, time }) {
    const member = message.guild.member(user);
    const targetRole = message.guild.roles.cache.find(r => r.name === 'Muted');

    if (!targetRole) {
      await message.reply('The role `Muted` doesn\'t exist on this server');
      return;
    }

    if (getRoles(member).get(targetRole.id)) {
      await message.reply(`This user already has the ${targetRole} role`);
      return;
    }

    await member.roles.add(targetRole.id);
    await message.reply(`${targetRole} added to ${member}`);

    try {
      await member.voice.setMute(true);
    } catch (e) {
      // Do Nothing
    }

    if (time) {
      const mins = Number(time.trim().replace('m', ''));
      await message.reply(`${member} will be unmuted in ${mins} minute(s)`);
      scheduler(async () => {
        try {
          await member.roles.remove(targetRole.id);
          await member.voice.setMute(false);
        } catch (e) {
          // Do Nothing
        }
      }, mins * 60 * 1000);
    }
  }
}
