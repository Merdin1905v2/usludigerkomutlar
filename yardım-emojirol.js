const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const emojirol = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Emoji Rol Menüsü`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Uslu'yu kullanırken @Uslu rolünü en yukarıya taşıyınız\`\`\`

    🔮\`\`\`diff
+ Emoji Rol Ayarlamak İçin: *u!emoji-rol-ayarla <mesajid> <emoji> <rol>*\`\`\`✨

    🔮\`\`\`diff
+ Emoji Rol Ayarlamak İçin Gerçek Şekli: *u!emoji-rol-ayarla 767720494107459634 🔮 @Deneme*\`\`\`✨

    🔮\`\`\`diff
+ Kim Emoji Tıkladı Rol Aldı Log Kanalı: *u!emoji-rol-log <kanal>*\`\`\`✨

    🔮\`\`\`diff
+ Kim Emoji Tıkladı Rol Aldı Log Kanalı: *u!emoji-rol-log #emoji-rol-log*\`\`\`✨

    **👇Oy Vermek İstermisin?**
    [Tıkla ve uzaya çık](https://www.google.com/)

    **👇Beni Eklemek İstermisin?**
    [Tıkla ve uzaya çık](https://discord.com/oauth2/authorize?client_id=776788372743913522&scope=bot&permissions=8)`
)
    .setThumbnail(client.user.avatarURL())
    .setImage(`https://cdn.discordapp.com/attachments/788683867606745095/797009991307493376/adventure-time-distant-lands-bmo.png`)
message.channel.send(emojirol)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ["yardım-emojirol", "emoji-rol", "emojirol"]
};

exports.help = {
    name: "yardım-emojirol"
};