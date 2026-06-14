# CF Sport Athlete Commerce Platform

This repository contains a Next.js landing page prototype for the CF Sport athlete commerce platform.

## Easiest option: open the standalone preview file

If downloading and running the full Next.js project is not working yet, use the standalone preview file instead:

1. Download just `preview.html` from this repository.
2. Double-click `preview.html` on your computer.
3. It will open directly in your browser with no `npm install` and no Terminal commands.

This standalone file is only for visual review. The editable Next.js source remains in `app/page.tsx` and `app/globals.css`.

## How to view the visual

1. Make sure this project is actually on your computer. If you only see these changes in a pull request or chat, first download or clone the repository from your Git provider.

2. Open a terminal and change into this project folder. Replace the path with wherever you downloaded or cloned the repo:

   ```bash
   cd /path/to/CFSEventCalendar
   ```

3. Confirm you are in the correct folder. You should see `package.json` listed:

   ```bash
   pwd
   ls package.json
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the local development server:

   ```bash
   npm run dev
   ```

6. Open the local site in your browser:

   ```text
   http://localhost:3000
   ```

The visual entry point is `app/page.tsx`, and the styling is in `app/globals.css`.

## If `cd /path/to/CFSEventCalendar` says no such directory

`/path/to/CFSEventCalendar` is a placeholder, not a real folder on your computer. Use the real location where you downloaded or cloned this repository.

If the project is not on your Mac yet, get it from your Git provider first. Common options are:

```bash
git clone <repository-url>
cd CFSEventCalendar
```

or download the repository as a ZIP file, unzip it, then open that unzipped `CFSEventCalendar` folder in Terminal.

To search common macOS locations for the folder, you can try:

```bash
find ~/Desktop ~/Downloads ~/Documents -maxdepth 3 -type d -name CFSEventCalendar 2>/dev/null
```

Once you find the folder, run `cd` with the full path that command prints.

## Fixing `Could not read package.json`

If npm prints an error like this:

```text
npm error enoent Could not read package.json
```

it means the command was run from a folder that does not contain this project. For example, if your prompt shows `~` or `/Users/yourname`, you are in your home folder, not the project folder. Run `cd` into the folder that contains this repository, then retry:

```bash
cd /path/to/CFSEventCalendar
npm install
npm run dev
```

On macOS, you can also type `cd ` with a trailing space, drag the project folder into Terminal, press Enter, then run `npm install`.

## What you should see

- A dark CF Sport hero section focused on fighter-powered supplement commerce.
- Platform cards for fighter storefronts, affiliate attribution, and CRM automation.
- An athlete commerce flow from fighter content through checkout attribution and CRM follow-up.
- CRM, fighter dashboard, content approval, sponsor reporting, and launch roadmap sections.

## Useful scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
