const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const ayarlanabilir = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Ekonomi Menüsü`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Uslu'yu kullanırken @Uslu rolünü en yukarıya taşıyınız\`\`\`

    🔮\`u!altın-ver\`
    **Altın Yollarsın**✨
    
    🔮\`u!altın-al\`
    **Altın Alırsın**✨
    
    🔮\`u!elmas-ver\`
    **Elmas Yollarsın**✨

    🔮\`u!elmas-al\`
    **Elmas Alırsın**✨

    🔮\`u!para-ver\`
    **Para Yollarsın**✨

    🔮\`u!günlük-ödül\`
    **1 Günde 1 Kez Alınan Ödül**✨

    🔮\`u!market\`
    **Uslu'nun Marketi :) [BAKIMDA]**✨
    
    🔮\`u!soygun-yap\`
    **Soygun Yaparsın, Sanki la casa de papel:)**✨

    🔮\`u!meslek\`
    **Meslek Seçersin**✨

    🔮\`u!profil\`
    **Profilini Görürsün**✨

\`\`\`diff
+ Ekonomi Sistemi Admin Komutları\`\`\`
    🔮\`u!admin-altın-ver\`
    **cızz admin komutu bu**✨

    🔮\`u!admin-elmas-ver\`
    **cızz admin komutu bu**✨

    🔮\`u!admin-para-ver\`
    **cızz admin komutu bu**✨

    **👇Oy Vermek İstermisin?**
    [Tıkla ve uzaya çık](https://www.google.com/)

    **👇Beni Eklemek İstermisin?**
    [Tıkla ve uzaya çık](https://discord.com/oauth2/authorize?client_id=776788372743913522&scope=bot&permissions=8)`
)
    .setThumbnail(client.user.avatarURL())
    .setImage(`https://cdn.discordapp.com/attachments/788683867606745095/797009991307493376/adventure-time-distant-lands-bmo.png`)
message.channel.send(ayarlanabilir)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ["yardım-ekonomi", "ekonomi"]
};

exports.help = {
    name: "yardım-ekonomi"
};