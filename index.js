const express = require('express')
const app = express()
const {Client} = require('discord.js');
const client = new Client({ intents: 32767 });

app.use(express.static('public'))
app.set("view engine", "ejs");

client.on('ready', () => {
  console.log('iniciou')
  
  app.get('/', async(req, res) => {
   if(client.users.cache.has('898784136490287165')) {
	  client.users.cache.delete('898784136490287165')
   }
   
   var lxcry7 = await client.users.fetch('898784136490287165').catch(() => {})
   res.render('index', {av: lxcry7.displayAvatarURL({dynamic: true, format: 'png'}), nome: lxcry7.username})
  })
  
  app.get('/amigos', async(req, res) => {
   var object = {
	 '646783301020942337': 'muito gostoso, sério. ',
     '687022032726392839': 'mineman fudido & desenvolvedor de discord bots 🤖.', 
	 '1019757163532537926': 'usuário fofo, minha amante apenas ❤. ', 
	 '550857045386199043': 'minha primeira dama 💍. ', 
	 '990374123924500500': 'user afeminado porém fofo 🤯. '
   }
   var arr = []
   
   for (const [key, value] of Object.entries(object)) {
	 if(client.users.cache.has(key)) {
	   client.users.cache.delete(key)
     }  
	   
     await client.users.fetch(key).then((u) => {
	    arr.push({texto: value, user: u})
	 }).catch(() => {})
   }
   
   res.render('amigos', {migs: arr})
 })
})

client.login('ODk5MTQ5MjUzMzAwMDc2NjE0.GYUmX6.qPucWbRqvRCmXBKFzjyx8vPZJr4rdU-I5C-_WA')
app.listen(80)
