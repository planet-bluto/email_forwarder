const print = console.log

import Discord from 'discord-user-bots';
const client = new Discord.Client()

client.on("ready", () => {
  print(`Logged on as ${client.info.user.username}`)
})

client.login(process.env["TOKEN"])

class DiscordSentryClass {
  constructor() {}

  async DM(...args: any) {
    let res = await client.group([process.env["OWNER"]])
    client.send(res.id, ...args)
  }
}

const DiscordSentry = new DiscordSentryClass()
export default DiscordSentry
