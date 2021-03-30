import Discord from 'discord.js';
import fetch from 'node-fetch';

export default async (config, client, message, args) => {
  try {
    const username = args[0] || '';
    if (!username) {
      const response = await message.channel.send('Please provide a valid username');
      await response.delete({ timeout: 30000 });
      return;
    }

    const {
      name,
      id,
    } = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username.trim()}`)
      .then(res => res.json());

    const embed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle('UUID Service!')
      .setDescription(`Data returned from Mojang`)
      .addField('UUID', id)
      .addField('Name', name)
      .setFooter('Created by Derthon#9538 : Owned by Ultra2021#0001');

    await message.channel.send(embed);
  } catch (e) {
    const response = await message.channel.send('An error occurred!');
    await response.delete({ timeout: 30000 });
  }
}
