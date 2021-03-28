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

  const add = args.slice(1).join(" ");
  
  if (!add) {
    response = await message.channel.send("You have not specified a role");
    await response.delete({ timeout: 30000 });
    return;
  }

  const roleAdd = message.guild.roles.cache.find(role => role.name === add);

  if (!roleAdd) {
    response = await message.channel.send("This role does not exist");
    await response.delete({ timeout: 30000 });
    return;
  }

  if (member.roles.cache.get(roleAdd.id)) {
    response = await message.channel.send(`This user already has the ${add} role`);
    await response.delete({ timeout: 30000 });
    return;
  }


  await member.roles.add(roleAdd.id);
  await message.channel.send(`${add} added to ${member.displayName}`);
}
