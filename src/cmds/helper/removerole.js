import Commando from 'discord.js-commando';
import getRoles from '../../utils/getRoles';

export default class RemoveRoleCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'removerole',
      aliases: ['rr'],
      group: 'helper',
      memberName: 'removerole',
      description: 'Removes a role from a user',
      examples: ['removerole @member Muted', 'removerole @member Developer'],
      clientPermissions: ['MANAGE_ROLES'],
      userPermissions: ['MANAGE_ROLES'],
      argsType: 'multiple',
      args: [
        {
          key: 'user',
          prompt: 'Which user do you want the role to be added to?',
          type: 'user',
        },
        {
          key: 'role',
          prompt: 'Which role should be added?',
          type: 'string',
        }
      ],
    });
  }

  async run(message, { user, role }) {
    const member = message.guild.member(user);
    const targetRole = message.guild.roles.cache.find(r => r.name === role);
    if (!targetRole) {
      await message.reply(`That role doesn't exist!`);
      return;
    }
    const roles = getRoles(member);
    if (!roles.get(targetRole.id)) {
      await message.reply('That user does not have that role!');
      return;
    }

    await member.roles.remove(targetRole.id);
    await message.reply(`Removed ${targetRole} from ${member}!`);
  }
}
