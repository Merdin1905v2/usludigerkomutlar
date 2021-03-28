const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const yardım = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Davet Menüsü`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Uslu'yu kullanırken @Uslu rolünü en yukarıya taşıyınız\`\`\`
    
    🔮\`u!davet-kanal\`
    **Eğlence Kategorisi Eğlenmek İçin İdeal Bir Kategori**✨

    🔮\`u!davet-kanal-sıfırla\`
    **Arkadaşlarınla Oyunmu Oynamak İstiyorsun O zaman Uslu Tam Yanında :)**✨

    🔮\`u!davet-sıfırla\`
    **Ekonomi Çötü loo :)**✨

    🎉\`u!bonus\`
    **Çekiliş Var Koşun :)**✨
    
    ⚙\`u!davetlerim\`
    **İşlerini Kolaylaştıracak Bir Yardımcı İstiyosan Uslu Orada!**⌛
    
    📀\`u!rütbe-ekle\`
    **Birçok Sistemi Ayarlamanın İpuçları Burada!**💿
    
    🤖\`u!rütbe-sıfırla\`
    **Usluyla Sunucunu Korumak İçin Gerekli Kategori!**👍
    
    🔞\`u!rütbeler\`
    **Nsfw Komutlarını Gösterir cızz Yanlış Yer [+18]**❎

    👥\`u!ayarlar\`
    **Tüm Herkese Açık Komutlar Burda Ablalarım Abilerim**👥

    \`\`\`fix
    çıkışMesaj, hoşgeldinMesaj, varsayılanMesaj\`\`\`
    \`\`\`diff
Bunları Ayarlamak İçin Yukarıdakinleri Kullanın

+ Kullanıcı Belirlersin: -member-
+ Kullanıcı Belirlersin: -target-
+ Kullanıcı Belirlersin: -total-\`\`\`
    
    **👇Oy Vermek İstermisin?**
    [Tıkla ve uzaya çık](https://www.google.com/)

    **👇Beni Eklemek İstermisin?**
    [Tıkla ve uzaya çık](https://discord.com/oauth2/authorize?client_id=776788372743913522&scope=bot&permissions=8)`
)
    .setThumbnail(client.user.avatarURL())
    .setImage(`https://cdn.discordapp.com/attachments/788683867606745095/797009991307493376/adventure-time-distant-lands-bmo.png`)
message.react("<:uslulogo:822538181039620137>")
message.channel.send(yardım)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ["davet", "yardım-davet"]
};

exports.help = {
    name: "yardım-davet"
};