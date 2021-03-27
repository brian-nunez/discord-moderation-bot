export default async (config, client, message, args) => {
  let response = null;

  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
    response = await message.channel.send("Insufficient permissions (requires permission `Manage messages`)");
    await response.delete({ timeout: 30000 });
    return;
  }

  const number = Number(args[0]);

  if (!number) {
    response = await message.channel.send("You haven't specified a number to purge");
    await response.delete({ timeout: 30000 });
    return;
  }

  if (number > 100) {
    response = await message.channel.send("Max number of purged messages is 100");
    await response.delete({ timeout: 30000 });
    return;
  }

  await message.delete();
  await message.channel.bulkDelete(number);
}
