# StudyNight

StudyNight is a flashcard study application built with vanilla JavaScript. Browse study sets, flip through cards, shuffle them, and create your own sets and cards, all from a single-page interface with no framework required.

## Features

- **Home and About pages** with simple navigation between views
- **Study Set Library** listing every set with its title and number of terms
- **Flip cards**: hover over a card to flip from the term to its description
- **Next / Previous navigation** that loops at both ends of a set
- **Shuffle** the cards in a set
- **Create new sets** with a title
- **Add new cards** (term and description) to any set
- **Form validation** with clear error messages for empty fields
- **Responsive styling** for desktop, tablet, and mobile

> **Note:** Data lives in memory only. Sets and cards you create will be reset when the page is refreshed.

## Tech Stack

| Purpose | Tool |
| --- | --- |
| Language | JavaScript (ES modules), HTML, CSS |
| Bundler / dev server | [Parcel](https://parceljs.org/) |
| Task runner | [Gulp](https://gulpjs.com/) |
| Unit tests | [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/) |
| End-to-end tests | [Cypress](https://www.cypress.io/) |
| Linting | [ESLint](https://eslint.org/) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (a current LTS version is recommended)
- npm (included with Node.js)

### Installation

```bash
git clone <your-repo-url>
cd interactive-front-end-web-application
npm install
```

### Run the app

```bash
npm run gulp
```

This runs `npx parcel index.html` and starts the dev server, by default at [http://localhost:1234](http://localhost:1234).

### Build for production

```bash
npm run build
```

The bundled output is written to the `dist/` folder.

## Testing

### Unit tests (Mocha + Chai)

```bash
npm test
```

Tests live in the `test/` folder and currently cover the `shuffle` function.

### End-to-end tests (Cypress)

The Cypress tests visit `http://localhost:1234`, so **start the dev server first** in a separate terminal:

```bash
npm run gulp
```

Then run:

```bash
npm run cypress
```

The suite covers:

- **Navigation**: Home, About, and Card Sets pages
- **Create Set form**: valid submission and empty-title error
- **Add Card form**: valid submission and empty term / description errors

To run both unit and end-to-end tests in sequence, use `npx gulp run-tests`.

### Linting

```bash
npx eslint .
```

ESLint is configured in `eslint.config.js` using the recommended rules and browser globals.

## Project Structure

```
.
├── index.html                 # App shell: header, navigation, <main>
├── data/
│   └── data.js                # Initial card sets (Web Dev, Cloud, React, Python)
├── src/
│   ├── index.js               # Entry point and navigation listeners
│   ├── homePage.js            # Home page
│   ├── aboutPage.js           # About page
│   ├── cardSetsPage.js        # Study set library and "Add New Set" toggle
│   ├── cardsPage.js           # Flip card view, next/previous, shuffle
│   ├── createSet.js           # Create set form and submit logic
│   ├── createCard.js          # Create card form and submit logic
│   ├── errors.js              # Form error display
│   ├── shuffle.js             # Shuffle algorithm
│   └── utilityRenderFunctions.js  # Reusable DOM element helpers
├── styles/                    # CSS for layout, cards, forms, navigation, pages
├── test/
│   └── shuffle.js             # Mocha unit tests
├── cypress/
│   └── e2e/                   # Cypress end-to-end tests
├── images/
│   └── imageCitations.md      # Image credits
├── gulpfile.js                # Gulp tasks (default, test, cypress, run-tests)
├── eslint.config.js
└── cypress.config.js
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run gulp` | Start the Parcel dev server |
| `npm run build` | Create a production build in `dist/` |
| `npm test` | Run Mocha unit tests |
| `npm run cypress` | Run Cypress end-to-end tests headlessly |

## Image Credits

See [`images/imageCitations.md`](images/imageCitations.md). The About page image is by C. Fibre on [Unsplash](https://unsplash.com/photos/boy-in-red-hoodie-wearing-black-headphones-JiOFFI3W7IA).

## License

This project is licensed under the [MIT License](LICENSE).

## Author

Mohammed Diab
