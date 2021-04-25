export default async (config, client, message, args) => {
  let response = null;

  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
    response = await message.channel.send("Insufficient permissions (Requires permission `Manage messages`)");
    await response.delete({ timeout: 30000 });
    return;
  }

  await message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true });
  await message.channel.send(':unlock: Unlocked');
}
