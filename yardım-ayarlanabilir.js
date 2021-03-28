const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const ayarlanabilir = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Ayarlanabilir Menüsü`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Uslu'yu kullanırken @Uslu rolünü en yukarıya taşıyınız\`\`\`

    🔮\`u!otorol\`
    **Otorl Sistemi Açarsınız**✨
    
    🔮\`u!otorol-kapat\`
    **Otorol Sistemi Kapatırsınız**✨
    
    🔮\`u!sayaç\`
    **Ayarlanamayan Sayaç Sistem [MESAJ AYARLANAMAYAN]**✨

    🔮\`u!sa-as-emojili\`
    **Sa-As Sistemi Açarsınız [EMOJİLİ]**✨

    🔮\`u!sa-as\`
    **Sa-As Sistemi Açarsınız [MESAJLI]**✨

    🔮\`u!giriş-çıkış-ayarla\`
    **Giriş Çıkış Kanalı Ayarlarsınız [RESİMLİ]**✨
    
    🔮\`u!giriş-çıkış-sıfırla\`
    **Giriş Çıkış Kanalı Sıfırlarsınız [RESİMLİ]**✨

    🔮\`u!güvenlik\`
    **Güvenli VE Güvenli Değil Kanalı Ayarlarsınız [RESİMLİ]**✨

    🔮\`u!dm-hg\`
    **Sunucuya Girene Özelden Hoşgeldin Mesaj Ayarlarsınız**✨

    🔮\`u!dm-bb\`
    **Sunucudan Çıkana Özelden Görüşürüz Mesaj Ayarlarsınız**✨

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
    aliases: ["yardım-ayarlanabilir", "ayarlanabilir"]
};

exports.help = {
    name: "yardım-ayarlanabilir"
};