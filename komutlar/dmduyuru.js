const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
if (message.author.id !=518727841467072512 ) { return; }
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('dm');
  message.delete();
      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyur','duyuru'],
  permLevel: 4
};

exports.help = {
  name: 'dmduyuru',
  description: 'Istediginiz seyi bota duyurtur.',
  usage: 'duyuru [duyurmak istedi�iniz �ey]'
};