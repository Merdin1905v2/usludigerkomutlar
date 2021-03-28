const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const yardım = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Çekiliş Menüsü`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Uslu'yu kullanırken @Uslu rolünü en yukarıya taşıyınız\`\`\`
    
    🎉\`u!çekiliş-yap\`
    **Çekiliş Başlatır**✨

    🎉\`u!çekiliş-bitir\`
    **Çekiliş Bitirir**✨

    🎉\`u!çekiliş-liste\`
    **Çekiliş Yapılan Çekilisleri Listeler**✨

    🎉\`u!çekiliş-yenile\`
    **Çekiliş Yeniler**✨
    
    **👇Oy Vermek İstermisin?**
    [Tıkla ve uzaya çık](https://www.google.com/)

    **👇Beni Eklemek İstermisin?**
    [Tıkla ve uzaya çık](https://discord.com/oauth2/authorize?client_id=776788372743913522&scope=bot&permissions=8)`
)
    .setThumbnail(client.user.avatarURL())
    .setImage(`https://cdn.discordapp.com/attachments/788683867606745095/797009991307493376/adventure-time-distant-lands-bmo.png`)
message.channel.send(yardım)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ["yardım-çekiliş", "çekiliş"]
};

exports.help = {
    name: "yardım-çekiliş"
};