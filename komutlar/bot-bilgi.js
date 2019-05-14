﻿const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");


exports.run = (client, message) => {

    const embed = new Discord.RichEmbed()

        .addField("Version", "0.1", true)

        .addField("Toplam Sunucu Sayısı", client.guilds.size, true)

        .addField("Toplam Kullanıcı Sayısı", client.users.size, true)

        .addField("Toplam Kanal Sayısı", client.channels.size, true)

        .addField("Çalışma Süresi", moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]'), true)

        .addField("Kitaplık Türü", "discord.js")

        .setColor(0x36393E)

        .setFooter(`${client.user.username} - Tüm hakları saklıdır.`, client.user.avatarURL)
    return message.channel.sendEmbed(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bot durum','istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
    permLevel: 0
};

exports.help = {
    name: 'istatistik',
    description: 'Botun istatistiğini gösterir.',
    usage: 'istatistik'
};