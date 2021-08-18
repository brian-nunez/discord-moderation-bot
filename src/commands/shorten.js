import Discord from 'discord.js';
import fetch from 'node-fetch';

export default async (config, client, message, args) => {
  try {
    const { url } = await fetch('https://api.zws.im/', {
      method: 'POST',
      body: JSON.stringify({
        url: args.join(' '),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json());

    const embed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(`Shortened URL`)
      .addField(`URL`, url || 'UNKNOWN')
      .setFooter(`Created by Derthon#3605${config.footerMessage ? ` : ${config.footerMessage}` : ''}`);

    await message.channel.send(embed);
  } catch (e) {
    const response = await message.channel.send('An error occurred!');
    await response.delete({ timeout: 30000 });
  }
}
