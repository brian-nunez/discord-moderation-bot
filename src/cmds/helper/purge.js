import Commando from 'discord.js-commando';
import clamp from '../../utils/clamp';

export default class PurgeCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'purge',
      group: 'helper',
      memberName: 'purge',
      description: 'Deletes a bulk of messages',
      examples: ['purge 5'],
      clientPermissions: ['MANAGE_MESSAGES'],
      userPermissions: ['MANAGE_MESSAGES'],
      argsType: 'multiple',
      args: [
        {
          key: 'amount',
          prompt: 'Amount of messages to purge (1-100)',
          type: 'integer',
          validate: num => !!(num && clamp(num, 1, 100)),
        },
      ],
    });
  }

  async run(message, { amount }) {
    await message.delete();
    await message.channel.bulkDelete(amount + 1);
  }
}
