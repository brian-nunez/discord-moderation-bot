export default async (config, client, message, args) => {
  let response = null;
  if (!message.member.hasPermission('MUTE_MEMBERS')) {
    response = await message.channel.send("Insufficient permissions (Requires permission `Mute Members`)");
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

  if (!member.roles.cache.get(roleMuted.id)) {
    response = await message.channel.send(`This user does not have the ${roleMuted} role`);
    await response.delete({ timeout: 30000 });
    return;
  }

  await member.roles.remove(roleMuted.id);
  await message.channel.send(`${roleMuted} removed from ${member.displayName}`);
  try {
    await member.voice.setMute(false);
  } catch (e) {
    // Do Nothing
  }
}