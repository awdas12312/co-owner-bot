const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
client.user.setGame(Five Stars,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log([Start] ${new Date()});
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(Logged in as * [ " ${client.user.username} " ]);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(servers! [ " ${client.guilds.size} " ]);
  console.log(Users! [ " ${client.users.size} " ]);
  console.log(channels! [ " ${client.channels.size} " ]);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.login(process.env.BOT_TOKEN);

Rocket.on('message', message => { //ping
    if(!message.channel.guild) return;
if (message.content.startsWith('p!ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(Rocket.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms 📶 ")
.addField('**WebSocket:**',api + " ms 📶 ")
message.channel.send({embed:embed});
}
});

Rocket.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix # 'kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - ليس لديك البرمشنات المطلوبة!**');
       if(toKick.kickable) return message.reply("**# - لا استطيع طرد شخص اعلى مني**");
       if(!toReason) return message.reply("**# - اكتب سبب**")
       if(toKick.id === message.author.id) return message.reply("**# لا استطيع طردك**")
       if(!message.guild.member(toKick).kickable) return message.reply("**# - لا استعطيع طرد هذا الشخص!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("تم طردك من السيرفر!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - السيرفر:**",message.guild.name,true)
       .addField("**# - السبب:**",toReason,true)
       .addField("**# - من قبل:**",message.author,true)
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});

Rocket.on("message", function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix # "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - ليس لديك الخواص المطلوبه**");
       if(!toBan) return message.reply("**# - Mention a user!**");
       if(toBan.id === ("344127240935571457")) return message.reply("**انا لا استطيع طرد نفسي**");
       if(toBan === message.member.guild.owner) return message.reply("**# لا تستطيع طرد اونر السيرفر*");
       if(toBan.bannable) return message.reply("**لا استطيع طرد شخص اعلى مني**");
       if(!toReason) return message.reply("**# - اكتب سبب**")
       if(toBan.id === message.author.id) return message.reply("**# لا استطيع طردك**")
       if(!message.guild.member(toBan).bannable) return message.reply("**# - لا استطيع طرد هذا الشخص**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("تم طردك من السيرفر")
       .setThumbnail(toBan.avatarURL)
       .addField("**# - السيرفر:**",message.guild.name,true)
       .addField("**# - السبب:**",toReason,true)
       .addField("**# - من قبل:**",message.author,true)
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**# Done! I banned: ${toBan}**`))
       );

   }
});

