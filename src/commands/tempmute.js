export default async (config, client, message, args) => {
  let response = null;
  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
    response = await message.channel.send("Insufficient permissions (Requires permission `Manage messages`)");
    await response.delete({ timeout: 30000 });
    return;
  }

  const member = message.mentions.members.first();

  if (!member) {
    response = await message.channel.send("You have not mentioned a user");
    await response.delete({ timeout: 30000 });
    return;
  }

  const roleMuted = message.guild.roles.cache.find(role => role.name === config.roles.muted);

  if (!roleMuted) {
    response = await message.channel.send("This role does not exist");
    await response.delete({ timeout: 30000 });
    return;
  }

  if (member.roles.cache.get(roleMuted.id)) {
    response = await message.channel.send(`This user already has the ${roleMuted} role`);
    await response.delete({ timeout: 30000 });
    return;
  }

  const [user, time, reason] = args;

  if (!time || !reason) {
    response = await message.channel.send(`TempMute Usage1: ${config.prefix}tempmute <Duration in minutes>m <Reason>`);
    await response.delete({ timeout: 30000 });
    return;
  }

  if (!/^\d+m$/.test(time.trim())) {
    response = await message.channel.send(`TempMute Usage2: ${config.prefix}tempmute <Duration in minutes>m <Reason>`);
    await response.delete({ timeout: 30000 });
    return;
  }

  const mins = Number(time.trim().replace('m', ''));

  if (!mins) {
    response = await message.channel.send(`TempMute Usage3: ${config.prefix}tempmute <Duration in minutes>m <Reason>`);
    await response.delete({ timeout: 30000 });
    return;
  }

  setTimeout(async () => {
    await member.roles.remove(roleMuted.id);
  }, mins * 60 * 1000);

  await member.roles.add(roleMuted.id);
  await message.channel.send(`${roleMuted} added to ${member.displayName}`);
  try {
    await member.voice.setMute(true);
  } catch (e) {
    // Do Nothing
  }
}