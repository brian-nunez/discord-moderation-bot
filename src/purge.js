export default async (config, client, message, args) => {
  let response = null;

  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
    response = await message.channel.send("Insufficient permissions (requires permission `Manage messages`)");
    await response.delete({ timeout: 30000 });
    return;
  }

  const number = args.join(" ");

  if (!number) {
    response = await message.channel.send("You haven't specified a number to purge");
    await response.delete({ timeout: 30000 });
    return;
  }

   message.channel.bulkDelete(number).catch(console.error)
}
