const express = require('express')
const app = express()
const {Client} = require('discord.js');
const client = new Client({ intents: 32767 });

app.use(express.static('public'))
app.set("view engine", "ejs");

client.on('ready', () => {
  app.get('/', async(req, res) => {
   var lxcry7 = await client.users.fetch('898784136490287165').catch(() => {})
   res.render('index', {av: lxcry7.displayAvatarURL({dynamic: true, format: 'png'}), nome: lxcry7.username})
  })
})

client.login('ODk5MTQ5MjUzMzAwMDc2NjE0.GiEVdC.qWE3nbGmhSv4Qcyii5d-1UGtLB14JG81Lja_QI')
app.listen(8080)