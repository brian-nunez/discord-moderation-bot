export default async (config, client, message, args) => {
  let response = null;

  if (message.author.id !== config.ownerID) {
    response = await message.channel.send("Insufficient permissions (Requires permission `Owner`)");
    await response.delete({ timeout: 30000 });
    return;
  }

  const typeMap = {
    PLAYING: 'PLAYING',
    STREAMING: 'STREAMING',
    LISTENING: 'LISTENING',
    WATCHING: 'WATCHING',
    CUSTOM_STATUS: 'CUSTOM_STATUS',
    COMPETING: 'COMPETING',
  };

  const [action, ...game] = args;

  const { [action.toUpperCase()]: type } = typeMap;

  if (!type) {
    response = await message.channel.send(
      `Use a valid action: [${Object.keys(typeMap).map(t => t.toLowerCase()).join(', ')}]`
    );
    await response.delete({ timeout: 30000 });
    return;
  }
  const presence = {
    activity: {
      name: game.join(' '),
      type,
    },
  };

  client.user.setPresence(presence);
}
