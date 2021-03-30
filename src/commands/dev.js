import BotState from '../utils/BotState';

export default async (config, client, message, args) => {
  let response = null;

  if (message.author.id !== config.ownerID) {
    if (BotState.getAllowDevelopers()) {
      if (!message.member.roles.cache.find(r => r.name === config.roles.dev)) {
        response = await message.channel.send(`Insufficient permissions (Requires permission \`Owner\` or \`${config.roles.dev}\`)`);
        await response.delete({ timeout: 30000 });
        return;
      } else {
        // Do Nothing
      }
    } else {
      response = await message.channel.send("Insufficient permissions (Requires permission `Owner`)");
      await response.delete({ timeout: 30000 });
      return;
    }
  }

  const [flag] = args;

  if (flag === 'false') {
    BotState.setAllowDevelopers(false);
    await message.channel.send("Dev Mode disabled");
  } else if (flag === 'true') {
    BotState.setAllowDevelopers(true);
    await message.channel.send("Dev Mode enabled");
  } else {
    response = await message.channel.send("Must provide true or false Usage: dev [true, false]");
    await response.delete({ timeout: 30000 });
    return;
  }
}