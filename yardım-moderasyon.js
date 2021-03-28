const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const yardım = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Moderasyon Menüsü`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Uslu'yu kullanırken @Uslu rolünü en yukarıya taşıyınız\`\`\`

    ⚙\`u!mute\`
    **Bir Kullanıcıyı Susturursun!**⌛
    
    ⚙\`u!mute-yetkili-rol\`
    **Kullanıcıyı Susturacak Yetklinin Rolünü Ayarlarsın!**⌛

    ⚙\`u!mute-rol\`
    **Kullanıcı Susturulunca Verilecek Rol Ayarlarsın!**⌛

    ⚙\`u!ban\`
    **Bir Kullanıcıyı Banlarsın!**⌛
    
    ⚙\`u!ban-koruma\`
    **Ban Koruma Sistemi!**⌛

    ⚙\`u!ban-koruma-sıfırla\`
    **Ban Koruma Sistemi Sıfırlarsın!**⌛

    ⚙\`u!kanal-arındır\`
    **Tüm Kanalları Siler [SUNUCU SAHİBİ KULLANABİLİR]!**⌛

    ⚙\`u!rol-arındır\`
    **Tüm Rolleri Siler [SUNUCU SAHİBİ KULLANABİLİR]!**⌛

    ⚙\`u!mesaj-arındır\`
    **Mesajları Siler [SUNUCU SAHİBİ VB KİŞİLER KULLANIR]!**⌛

    ⚙\`u!nuke\`
    **Yazdıgın Kanalı Siler VE Aynı Yetkilere Sahip Kanal Açar!**⌛

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
    aliases: ["yardım-moderasyon", "moderasyon"]
};

exports.help = {
    name: "yardım-moderasyon"
};