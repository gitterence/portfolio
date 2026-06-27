# Personal Portfolio

A modern and responsive personal portfolio built with React and Next.js.

### Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theming**: [`next-themes`](https://github.com/pacocoursey/next-themes) for flawless Dark/Light mode switching.

## Key Features
- **Flawless Dark Mode**: Implemented via `next-themes` with a blocking inline script to completely prevent Flash of Unstyled Content (FOUC).
- **Modern Architecture**: Uses `.jsx` extensions across all UI components, strictly separating Server Components (like layouts) from interactive Client Components.
- **Robust Pathing**: Utilizes the `@/` absolute path alias for all internal imports to prevent "relative path hell".
- **Tailwind Theming**: Custom color tokens (`portfolio-light`, `portfolio-dark`) configured in `tailwind.config.js` for easily maintainable semantic styling.
- **Static Export Ready**: Configured perfectly via `next.config.mjs` and GitHub Actions for seamless deployment to GitHub Pages.

## Getting Started

Verify Node and Node package manager versions:
```bash
nvm install
nvm use
```

Install dependencies: 
```bash
npm ci
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing and the webpage will auto-update as you edit the file.

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Credits

Credits to [Simo Edwin](https://github.com/developedbyed)
