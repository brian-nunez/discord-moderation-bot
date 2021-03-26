export default async (config, client, message, args) => {
  let response = null;
  if (!message.member.hasPermission('MANAGE_ROLES')) {
    response = await message.channel.send("Insufficient permissions (Requires permission `Manage roles`)");
    await response.delete({ timeout: 30000 });
    return;
  }

  const member = message.mentions.members.first();

  if (!member) {
    response = await message.channel.send("You have not mentioned a user");
    await response.delete({ timeout: 30000 });
    return;
  }

  const remove = args.slice(1).join(" ");
  
  if (!remove) {
    response = await message.channel.send("You have not specified a role");
    await response.delete({ timeout: 30000 });
    return;
  }

  const roleRemove = message.guild.roles.cache.find(role => role.name === remove);

  if (!roleRemove) {
    response = await message.channel.send("This role does not exist");
    await response.delete({ timeout: 30000 });
    return;
  }

  if (!member.roles.cache.get(roleRemove.id)) {
    response = await message.channel.send(`This user does not have the ${remove} role`);
    await response.delete({ timeout: 30000 });
    return;
  }


  await member.roles.remove(roleRemove.id);
  await message.channel.send(`${remove} removed to ${member.displayName}`);
}
