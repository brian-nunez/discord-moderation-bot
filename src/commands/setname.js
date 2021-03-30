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

  message.guild.me.setNickname(args.join(' '));
}
