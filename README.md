# OShelton' (Jack Owen Shelton) Profile Page

This repo contains the source and assets needed by my [profile web site](https://oshelton.github.io/) and handles deployment of it to github pages.

## Prerequisites

- Node.js and NPM
  - On Windows, [NVM for Windows](https://github.com/coreybutler/nvm-windows) is still a good option for managing node installations on Windows, even if a successor is in the works.
- Node.js and npm v21.1.0
  - Other versions may work but this is what things are tested on.

## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```powershell
npm run dev
```

This will auto open your default browser to the appropriate URL and it will auto refresh as you make changes.

## Building

To create a production version of the app's files:

```powershell
npm run build
```

Unlike a default sveltekit build this will place the output files in a docs directory to make Github Pages happier.

You can preview the production build with `npm run preview`.

## Deploying

This application uses Sveltekit's [static adapter](https://kit.svelte.dev/docs/adapter-static) for deploying with some configuration tweaks from [metonym/sveltekit-gh-pages](https://github.com/metonym/sveltekit-gh-pages) to make it more github pages friendly.

Unlike the example there though this site is configured to deploy from the docs directory which is where the `npm run build` command will place the generated files.

Committing and pushing the changes to files in the docs directory to the main branch will result in Github Pages deployment process automatically picking up and deploying them. This makes it possible to commit and push to the repo while still maintaining manual control over when deployment happens.
