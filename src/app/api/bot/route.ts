export const dynamic = 'force-dynamic';

export const fetchCache = 'force-no-store';

import { Bot, webhookCallback } from 'grammy';

const token = '7404845445:AAEjf6AZ0T_jbT2dymUF818Ow-amWgDQFrY';

if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.');

const bot = new Bot(token);
bot.on('message:text', async (ctx) => {
  await ctx.reply(ctx.message.text);
});

export const POST = webhookCallback(bot, 'std/http');
