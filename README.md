# advertise-website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on cPanel

Sometimes a hosting provider that uses cPanel provides a service to host a Node.js app. Here is the steps to host the app on cPanel.

1. Edit `start` script on `package.json` file to `NODE_ENV=production node server.js`.
2. If you want to host the app not in the root domain, add these values to `next.config.mjs` file.

    ```js
    const nextConfig = {
    assetPrefix: '/YOUR_APP_PATH',
    basePath: '/YOUR_APP_PATH',
    // ...
    };
    ```

3. Build the app.

    ```bash
    npm run build
    # or
    yarn build
    # or
    pnpm build
    # or
    bun build
    ```

4. Archive the folders and files (except `.git`, and `node_modules` folder) and upload the archive to your server and extract it.
5. Open "Setup Node.js App" on your hosting provider and create the application.
6. Fill the form. Fill the "Application startup file" to "`server.js`". After filling the form, click "Create".
7. You will get the command line to enter the virtual environment of your application. Execute that on your server terminal.
8. Install all dependencies on the virtual environment.
9. Restart the server.

> [!TIP]
> After completing the deployment, you can revert the changes of `package.json` file and `next.config.mjs` file on your project.
