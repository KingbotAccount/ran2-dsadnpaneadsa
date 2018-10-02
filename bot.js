const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "R!"

console.log(`hello`)


client.on('ready', () => {                           
client.user.setGame(`🌈RAINBOW|R!help | R!invite`);                                                                                                                                                                                                                                                                                                                                                                                                                            
});

   client.on('message', message => {
	   if(message.content.startsWith(`${prefix}invite`)){
		   if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Add" + `${client.user.username}` + " <<")
		   .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=2080374975")
		   .setTimestamp()
		   .setFooter(`Requested By | ${message.author.username}`)
		   .setColor("RANDOM")
		   message.channel.send(":white_check_mark: | Check Your DM! تم الأرسال بلخاص")
		   message.author.send({embed})
	   }
   });



   client.on("message", message => {
 if (message.content === "R!help") {
     message.channel.send('**:mailbox_with_mail: تم ارسال رسالة في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
=====================🌈 RainbowBot. 🌈=====================
=startrainbow = لبدا امر الرينبو
=stoprainbow = ايقاف امر الرينبو
=invite = لاضافه البوت
**!ملاحظه: اذا ما شتغل البوت جرب تحط رتبه البوت اعلى من رتبه الرينبو **
=====================🌈 RainbowBot. 🌈=====================
`)
   message.author.sendEmbed(embed)
   
   }
   });
   client.on("message", message => {
 if(message.content.startsWith(prefix + "startrainbow")) {
   let rainbow = message.guild.roles.find(`name`, "Rainbow");
  //start of create role
  if(!rainbow){
         rainbow =  message.guild.createRole({
        name: "Rainbow",
        color: "#000000",
        permissions:[]
      })
    }}})
  
client.login(process.env.BOT_TOKEN)
