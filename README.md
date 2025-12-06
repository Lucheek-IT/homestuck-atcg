# Homestuck ATCG Web
This is a responsive website documenting the rules and cards for the Homestuck: Atypical Card Game, which lives at [hsatcg.lucheek.com](https://hsatcg.lucheek.com/).
## Usage
There are two types of [pages](./src/pages): 

- `.astro` files, which are for writing HTML + Javascript. These are used for the, uh, artisan-crafted websights.
- `.md` files, which you can write in Markdown and most of the HTML is handled for you. This is ideal for the rules, where you wanna focus on content and don't need a ton of Pretty Websights.

When writing `.md` files, the headers (`## This is a Second-Level header`) will be used for the table of contents.

### Updating the Card Database
The card CSV exports live in [`src/cards`](./src/cards). Updating the card tables on the site is as simple as updating these CSV files. If images have been added or revised, the [`src/cards/images`](./src/cards/images) should be updated with the changed files. The filenames there must match the card art filename column in the CSV, or else the generic "not found" image shows up on the site for that card.

<details><summary>Show Expected Headers by CSV</summary>

These headers must be present. Additional headers are OK, they just won't be used. 

`characters.csv`:
```
TITLE,subtitle,Power,Enter Cost,Tags,Game Text,Flavorlogue,Stars,Art Credit,Picture,Set Release,Card Number
```

`executables.csv`:
```csv
TITLE,subtitle,Enter Cost,Game Text,Flavorlogue,Stars,Art Credit,Picture,Set Release,Card Number
```

`inventory.csv`:
```csv
TITLE,subtitle,Enter Cost,Game Text,Flavorlogue,Stars,Art Credit,Picture,Set Release,Card Number
```

`planets.csv`:
```csv
TITLE,subtitle,Power,Max Damage,Draw Boost,Game Text,Flavorlogue,Stars,Art Credit,Picture,Picture (Destroyed),Set Release,Card Number
```
</details>

### Download
The rulebook, and any other PDF you want made downloadable, shoudl live in the [`public/`](./public) folder. The link is currently just in [`src/pages/index.astro`](./src/pages/index.astro), so that has to be changed if you're updating the file or adding more.

### Site Layout, Etc
The layouts are kept in `src/layouts`. The `Chrome.astro` file is the "chrome" of the site: the nav bar and some other miscellany. 

The `SiteLayout` is for use with `.astro` files. The `MarkdownLayout` is for use with `.md` files. Both use the `Chrome.astro` layout, but they handle the content area sliiiightly differently.

There are art assets in `src/images`. There are here instead of `public/` because Astro does some processing to make smaller files for fast loading on mobile & low-bandwidth devices when the website is deployed.

A small amount of CSS can be found in `src/styles`. But the site mostly uses Tailwind, which isn't written like traditional CSS because developers have to make everything difficult and painful.

### Deployment
Changes made on GitHub will be automatically deployed by an [Action](https://github.com/nie7321/homestuck-atcg/actions). The action runs Astro's process to turn all the files into some HTML/CSS/JS files and send them to a webserver.

The site is deployed to the comics Linode, which serves the [hsatch.lucheek.com](https://hsatcg.lucheek.com/) site.

## Tech
This is build with the following components:

- [Astro](https://astro.build/), a framework for building static sites
- [TailwindCSS](https://tailwindcss.com/), a CSS framework
- [Alpine.js](https://alpinejs.dev/), a lite Javascript framework
- [simple-datatables](https://github.com/fiduswriter/simple-datatables/tree/main), which is like DataTables.net (but no jQuery needed)
- [GitHub](https://github.com), which stores the source code and runs the Astro builds to turn this into a heap of HTML
- Comics Linode
  - But it's Just HTML(tm), so it can live anywhere: your linode, GitHub Pages, NeoCities, etc.

### Local Development
If you have node/yarn installed already:

```sh
yarn install
yarn run dev
```

The site should start on `http://localhost:4321` or something. It will tell you the correct URL. Changes should be reflected in the browser immediately.

## Credits
- Discord logo vector by [Gil Barbara](https://github.com/gilbarbara/logos). Used under the CC0 license.
- Table of contents generator based on a blog post by [Kevin Lee Drum](https://kld.dev/building-table-of-contents/).
