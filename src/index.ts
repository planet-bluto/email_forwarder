const print = console.log

import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import 'dotenv/config'

import DiscordSentry from './discord'

const app = new Hono()

app.post('/', async (c) => {
  let json = await c.req.json()
  print(json)

  DiscordSentry.DM({content: `\`\`\`json\n${JSON.stringify(json)}\n\`\`\``})

  return c.text('Yeah.')
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})