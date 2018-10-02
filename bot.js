const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "="

console.log(`hello`)





   client.on("message", message => {
 if (message.content === "=help") {
     message.channel.send('**:mailbox_with_mail: تم ارسال رسالة في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
=====================🌈 RainbowBot. 🌈=====================
=startrainbow = لبدا امر الرينبو
=stoprainbow = ايقاف امر الرينبو
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
        name: "rainbow",
        color: "#000000",
        permissions:[]
      })
    }}})
client.login(process.env.BOT_TOKEN)
