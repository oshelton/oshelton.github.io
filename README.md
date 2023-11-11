# OShelton (Owen Shelt) Profile Page

This repo contains the source and assets needed by my profile web ssite and handles deployment of it to github pages.

## Prerequisites

* Node.js and NPM
    * On Windows, [NVM for Windows](https://github.com/coreybutler/nvm-windows) is still a good option for managing node installations on Windows, even if a ssuccessor is in the works.

## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```powershell
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```powershell
npm run build
```

You can preview the production build with `npm run preview`.

## Deploying

This application uses Sveltekit's [static adapter](https://kit.svelte.dev/docs/adapter-static) for deploying with some configuration tweaks from [metonym/sveltekit-gh-pages](https://github.com/metonym/sveltekit-gh-pages) to make it more github pages friendly.

When commits are pushed to this repo's main brnach it should automatically deploy.
