import BotState from '../utils/BotState';

export default async (config, client, message, args) => {
  let response = null;

  if (!message.member.hasPermission('MANAGE_ROLES')) {
    response = await message.channel.send("Insufficient permissions (Requires permission `Manage Server`)");
    await response.delete({ timeout: 30000 });
    return;
  }

  BotState.enable();
  await message.channel.send('Bot is now enabled!');
}
