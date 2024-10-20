const envConfig = {
    appUrl: process.env.NEXT_PUBLIC_APP_URL ?? '',
    sendEmailTo: process.env.NEXT_PUBLIC_SEND_EMAIL_TO ?? '',
    resendApiKey: process.env.NEXT_PUBLIC_RESEND_API_KEY ?? '',
    telegramBotToken: process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ?? ''
}

export default envConfig