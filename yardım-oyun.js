const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const eğlence = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Oyun Menüsü`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Uslu'yu kullanırken @Uslu rolünü en yukarıya taşıyınız\`\`\`
    
    🔮\`u!yaz-kazan\`
    **İlk Yazan Kazanır Dostum**✨
    
    🔮\`u!adamasmaca\`
    **Adam Asmaca oyunu**✨

    🔮\`u!uzaysavaşı\`
    **StarWars Filmi Çekiyoruz :)**✨

    🔮\`u!doğruluk-cesaret\`
    **Dogruluk Cesaretlilik**✨

    🔮\`u!emoji-yakalamaca\`
    **Emoji Yakalama Oyunu**✨

    🔮\`u!xox\`
    **XoX Oyunu**✨

    **👇Oy Vermek İstermisin?**
    [Tıkla ve uzaya çık](https://www.google.com/)

    **👇Beni Eklemek İstermisin?**
    [Tıkla ve uzaya çık](https://discord.com/oauth2/authorize?client_id=776788372743913522&scope=bot&permissions=8)`
)
    .setThumbnail(client.user.avatarURL())
    .setImage(`https://cdn.discordapp.com/attachments/788683867606745095/797009991307493376/adventure-time-distant-lands-bmo.png`)
message.channel.send(eğlence)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ["yardım-oyun", "oyun"]
};

exports.help = {
    name: "yardım-oyunlar"
};