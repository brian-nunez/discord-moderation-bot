import Discord from 'discord.js';
import fetch from 'node-fetch';

export default async (config, client, message, args) => {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json());

    const helpEmbed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(`${response.setup}`)
      .setDescription(`> ${response.punchline}`)
      .setFooter(`Created by Derthon#3605${config.footerMessage ? ` : ${config.footerMessage}` : ''}`);

    await message.channel.send(helpEmbed);
  } catch (e) {
    const response = await message.channel.send('Joke Service is down!');
    await response.delete({ timeout: 30000 });
  }
}
