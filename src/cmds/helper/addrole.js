import Commando from 'discord.js-commando';
import getRoles from '../../utils/getRoles';

export default class AddRoleCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'addrole',
      aliases: ['ar'],
      group: 'helper',
      memberName: 'addrole',
      description: 'Adds a role to a user',
      examples: ['addrole @member Muted', 'addrole @member Developer'],
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
    if (roles.get(targetRole.id)) {
      await message.reply('That role is already applied!');
      return;
    }

    await member.roles.add(targetRole.id);
    await message.reply(`Added ${targetRole} to ${member}!`);
  }
}
