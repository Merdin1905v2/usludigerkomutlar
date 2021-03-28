const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const eğlence = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Kullanıcı Menüsü`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Uslu'yu kullanırken @Uslu rolünü en yukarıya taşıyınız\`\`\`
    
    🔮\`u!türkmü\`
    **Acaba Türk Botumu :)**✨

    🔮\`u!corona\`
    **Corona Bilgilerini Gösterir**✨
    
    🔮\`u!saat\`
    **Saat Kaç Acaba, Akşam Geç Kalma :)**✨
    
    🔮\`u!kullanıcı-bilgi\`
    **Kullanıcı Bilgisini Gösterir**✨
    
    🔮\`u!sunucu-bilgi\`
    **Sunucunun Bilgilerini Gösterir**✨
    
    🔮\`u!sunucu-resim\`
    **Sunucunun İconunu Gösterir**✨
    
    🔮\`u!avatar\`
    **Avatarını Gösterir**✨
    
    🔮\`u!mcskin\`
    **Bi Kullanıcının MC Skin'ni Gösterir**✨
    
    🔮\`u!tersyazı\`
    **Bir Mesajı Tersten Yazdırırsın**✨

    🔮\`u!yumruk-at\`
    **Bi Kullanıcıya Yumruk Atarsın**✨

    🔮\`u!davet\`
    **Botun Davet Linkini Gösterirsin**✨

    🔮\`u!afk\`
    **Afk Sistemi Aktif Eder**✨

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
    aliases: ["yardım-kullanıcı", "kullanıcı"]
};

exports.help = {
    name: "yardım-kullanıcı"
};