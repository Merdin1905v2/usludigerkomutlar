const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const eğlence = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Eğlence Menüsü`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Uslu'yu kullanırken @Uslu rolünü en yukarıya taşıyınız\`\`\`
    
    🔮\`u!kartopu\`
    **Kartopu Fırlatırım, uu buzz gibi**✨
    
    🔮\`u!kaç-cm\`
    **Malafat Çok büyük kaçın!**✨
    
    🔮\`u!şekerye\`
    **Şeker ye dostum tadı çok güzel**✨
    
    🔮\`u!efkarım\`
    **Efkarlanalım be Senin için**✨
    
    🔮\`u!espri\`
    **Espri Yaptır bakem**✨
    
    🔮\`u!balık-tut\`
    **Balık Tutmaya gidelim hadi**✨
    
    🔮\`u!öp\`
    **muck muck :)**✨
    
    🔮\`u!beşlik\`
    **Çak kanka, çak çak**✨

    🔮\`u!hesapla\`
    **Matematik sor sor :)**✨

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
    aliases: ["yardım-eğlence", "eğlence"]
};

exports.help = {
    name: "yardım-eğlence"
};