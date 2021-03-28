const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const eğlence = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Koruma Menüsü`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Uslu'yu kullanırken @Uslu rolünü en yukarıya taşıyınız\`\`\`
    
    🔮\`u!cpaslock-engel\`
    **Büyük Harf Engeli Açar**✨
    
    🔮\`u!küfür-engel\`
    **Küfür Engel Açar**✨

    🔮\`u!kanal-koruma\`
    **Kanal Koruma Sistemi Açar**✨

    🔮\`u!kanal-koruma-sıfırla\`
    **Kanal Koruma Sistemi Kapatır**✨

    🔮\`u!reklam-engel\`
    **Reklam Sistemi Açar**✨

    🔮\`u!rol-koruma\`
    **Rol Koruma Sistemi Açar**✨

    🔮\`u!rol-koruma-sıfırla\`
    **Rol Koruma Sistemi Kapatır**✨

    🔮\`u!spam\`
    **Spam Sistemi Açar**✨

    🔮\`u!spam-kapat\`
    **Spam Sistemi Kapatır**✨

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
    aliases: ["yardım-koruma", "koruma"]
};

exports.help = {
    name: "yardım-koruma"
};