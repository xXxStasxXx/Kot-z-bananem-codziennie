const Discord = require("discord.js")
const Bot = new Discord.Client()
var prefix = "!"

const Webhook = require("webhook-discord")
const Hook = new Webhook("https://discordapp.com/api/webhooks/361489232839180289/-QSixPYwlPk9b5vT4J3lHfzub3D0CSKRwYJQ2BMjqe3MhzMXCXdMEPl4F_UNgvKf2K3w")

var cronJob = require('cron').CronJob;

var job = new cronJob({
  cronTime: '00 00 12 * * *',
  onTick: function() {
	Hook.custom("Kot z bananem","Kot z bananem codziennie! \n","https://www.wykop.pl/cdn/c3201142/comment_TCVRWQGuY2ZtvGD6zsaTM3wcJqbAY6ZH.jpg")
  },
  start: false,
  timeZone: "Europe/Warsaw"
});
job.start();