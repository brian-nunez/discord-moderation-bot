export default async (config, client, message, args) => {
  let response = null;

  if (message.author.id !== config.ownerID) {
    response = await message.channel.send("Insufficient permissions (Requires permission `Owner`)");
    await response.delete({ timeout: 30000 });
    return;
  }

  const text = args.join(" ");

  if(!text) {
    const response = await message.channel.send("You have not specified something to say");
    await response.delete({ timeout: 30000 });
    return;
  }
  await message.channel.send(text);
  await message.delete();
}
