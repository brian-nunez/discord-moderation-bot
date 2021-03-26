export default async (config, client, message, args) => {
  let response = null;

  if (message.author.id !== config.ownerID) {
    response = await message.channel.send("Insufficient permissions (Requires permission `Owner`)");
    await response.delete({ timeout: 30000 });
    return;
  }

  client.user.setAvatar(args[0]);
}
