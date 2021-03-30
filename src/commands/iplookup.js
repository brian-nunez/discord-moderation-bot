import Discord from 'discord.js';
import fetch from 'node-fetch';
import getCountryCodeName from '../utils/getCountryCodeName';

export default async (config, client, message, args) => {
  try {
    if (!(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(args[0]))) {
      const response = await message.channel.send('Please provide a valid IP');
      await response.delete({ timeout: 30000 });
      return;
    }
    const {
      city,
      country_name,
      ip,
      region_name,
      time_zone,
    } = await fetch(`https://freegeoip.app/json/${args[0]}`)
      .then(res => res.json());

    const helpEmbed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle('IP Lookup Service!')
      .setDescription(`Public info about ${ip}`)
      .addField('Country', country_name || null)
      .addField('City', city || null)
      .addField('Region Name', region_name || null)
      .addField('Time Zone', time_zone || null)
      .setFooter('Created by Derthon#9538 : Owned by Ultra2021#0001');

    await message.channel.send(helpEmbed);
  } catch (e) {
    const response = await message.channel.send('IP Lookup Service is down!');
    await response.delete({ timeout: 30000 });
  }
}
