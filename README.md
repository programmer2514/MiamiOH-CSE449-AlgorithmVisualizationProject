# CSE Algorithm Visualization Project

The Algorithms Visualization Project is a web-based educational tool that helps users understand the logic and behavior of classic algorithms through step-by-step visualizations, pseudocode synchronization, and a “Test Yourself” interactive mode. The platform is designed to promote active learning, reinforce key algorithmic concepts, and allow for user interaction at each stage.

*This is a clone of an internal GitLab repository and is likely outdated*

## Technical Details
  - **Base:** Node.js
  - **Framework:** React Router
  - **Frontend:** Tailwind CSS + Material Tailwind
  - **Tooling:** Vite
  - **Testing:** Vitest + Playwright


## Getting Started

### Installation
Download and install the Node version listed in `.nvmrc`.
- Get it directly from [the Node website](https://nodejs.org/en/download)
- Or download it with [Node Version Manager](https://www.nvmnode.com/guide/download.html): `nvm install`

Install the dependencies:
```bash
npm install
npx playwright install
npm run build-g4
```

### Development
Start the live development server:
```bash
npm run dev
```
Your application will be available at `http://localhost:5173`.

### Testing
Check types and fix code errors using eslint and tsc:
```bash
npm run lint
npm run typecheck
```

Run the live testing suite:
```bash
npm run test
```

### Building
Create a production build:
```bash
npm run build
```

### Deployment
Simply deploy the output of `npm run build` using the static server host of your choice.
```
├── package.json
├── package-lock.json
├── build/
│   ├── client/    # Static assets
```

## Credits

### Algorithm Logic & Pseudocode Designers
  - Matthew Valachek
  - Charlie Szczepanski
  - Xavier Rankin

### Pseudocode Developers
  - Nat Wagner
  - Stefan Wenzske

### UI/UX Designers
  - Benjamin Pryor
  - Cole Lingo
  - Nate Richmond

### AI Integration Developers
  - Huy Tran
