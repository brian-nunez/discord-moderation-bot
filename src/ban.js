export default async (config, client, message, args) => {
  let response = null;
  if (!message.member.hasPermission('BAN_MEMBERS')) {
    response = await message.channel.send("Insufficient permissions (Requires permission `Ban members`)");
    await response.delete({ timeout: 30000 });
    return;
  }

  const member = message.mentions.members.first();

  if (!member) {
    response = await message.channel.send("You have not mentioned a user");
    await response.delete({ timeout: 30000 });
    return;
  }

  if (!member.bannable) {
    response = await message.channel.send("This user is unbannable");
    await response.delete({ timeout: 30000 });
    return;
  }

  const reason = args.slice(1).join(" ")

  if (!reason) {
    await member.ban();
    await message.channel.send(`${member.user.tag} was banned, no reason was provided`);
    return;
  }

  await member.ban(reason);
  await message.channel.send(`${member.user.tag} was banned for ${reason}`);
}
